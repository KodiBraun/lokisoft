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

class LoaderController extends Controller
{
    //
    public function index(){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();
        if($info_user->loader == 0) return redirect('/404');
        $news = DB::table('news')->orderBy('id', 'desc')->get();

        $info_loader =  DB::table('loader')->where('id_base',  $id_base)->first();
        if($info_loader == NULL){}else{
        $count_loader = $info_loader->download_1 + $info_loader->download_2 + $info_loader->download_3;
        }

        return view('layouts.loader', compact('info_user','news','count_loader','info_loader'));
    }
    public function dowloaderTask(Request $request){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();
        if($info_user->loader == 0) return redirect('/404');

        $directory_1 = $request->input('directory_1');
        $task_1 = $request->file('task_1');
        if($directory_1 != NULL and $task_1 != NULL){
            $task_1->move('/var/www/html/public/loader/', $id_base.'_1');
            DB::table('loader')->where('id_base',  $id_base)->update([
                'directory_1' => $directory_1,
                'download_1' => 0,
            ]);
            return back();
        }
        $directory_2= $request->input('directory_2');
        $task_2 = $request->file('task_2');
        if($directory_2 != NULL and $task_2 != NULL){
            $task_2->move('/var/www/html/public/loader/', $id_base.'_2');
            DB::table('loader')->where('id_base',  $id_base)->update([
                'directory_2' => $directory_2,
                'download_2' => 0,
            ]);
            return back();
        }
        $directory_3 = $request->input('directory_3');
        $task_3 = $request->file('task_3');
        if($directory_3 != NULL and $task_3 != NULL){
            $task_3->move('/var/www/html/public/loader/', $id_base.'_3');
            DB::table('loader')->where('id_base',  $id_base)->update([
                'directory_3' => $directory_3,
                'download_3' => 0,
            ]);
            return back();
        }

    }
    public function dowloadLoader(){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();
        if($info_user->loader == 0) return redirect('/404');

        return Response::download('bilds_loader/'.$id_base.'.luac');
    }
}
