<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Auth;
use DB;
use Carbon\Carbon;
use Response;


class MainController extends Controller
{
    //
    public function index(Request $request){

        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();

        $news = DB::table('news')->orderBy('id', 'desc')->get();
        $logs = DB::table('logs')->where('id_base',  $id_base)->get();

        $count_money = DB::table('clipper')->where('id_base',  $id_base)->get();
        $count = 0;
        foreach ($count_money as $money){
            $count += $money->money;
        }
        $money = $count;

        $info_loader =  DB::table('loader')->where('id_base',  $id_base)->first();
        if($info_loader == NULL){$count_loader = 0;}else{
        $count_loader = $info_loader->download_1 + $info_loader->download_2 + $info_loader->download_3;
        }
//        $client = new \GuzzleHttp\Client();
//
//        $promise = $client->getAsync('http://goodmods.ru/clip/success.php?account=asd&money=12233333&name_account=wefef&server=123%27&uid=307361188')->then(
//            function ($response) {
//                return $response->getBody();
//            }, function ($exception) {
//            return $exception->getMessage();
//        }
//        );
//        $promise->wait();

        return view('layouts.main', compact('info_user', 'news','logs','money','count_loader'));
    }
    public function gluer()
    {
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id', $id_base)->first();


        return view('layouts.gluer', compact('info_user'));
    }
    public function buyGluer(Request $request){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id', $id_base)->first();
        $serial = $request->input('serial');

        if ($serial != NULL and $info_user->balance > 49) {

            DB::table('users')->where('id', $id_base)->update([
                'gluer' => $serial,
                'balance' => $info_user->balance - 50,
            ]);
        }
        return back();
    }
    public function piar()
    {
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id', $id_base)->first();

        return view('layouts.piar', compact('info_user'));
    }
    public function buyPiar(Request $request){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id', $id_base)->first();
        $file = $request->input('file');

        if ($file != NULL and $info_user->balance > 249) {

            DB::table('piar')->where('base_id', $id_base)->insert([
                'file' => $file,
                'base_id' => $id_base,
            ]);

            DB::table('users')->where('id', $id_base)->update([
                'balance' => $info_user->balance - 250,
            ]);
        }
	$client = new \GuzzleHttp\Client();

     	 $promise = $client->getAsync('https://lokisoft.ru/bot/bot.php?piar=1&id_base='.$id_base.'&file='.$file)->then(
           	function ($response) {
              	 return $response->getBody();
          		 }, function ($exception) {
            	return $exception->getMessage();
       		 }
       	);
       		$promise->wait();

        return back();
    }
    public function buyClipper(){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();
	
	if($info_user->balance < 149 AND $info_user->clipper == 0 ){return redirect('/payment');}
        if($info_user->clipper == 0 AND $info_user->balance >= 150){
	$date = Carbon::now(+3)->addDay(31);
	DB::table('users')->where('id',  $id_base)->update([
            	'clipper' => 1,
		'balance' => $info_user->balance - 150,
		'date_clipper' => $date,
        ]);
	$client = new \GuzzleHttp\Client();

     	 $promise = $client->getAsync('https://lokisoft.ru/bot/bot.php?clipper=1&id_base='.$id_base)->then(
           	function ($response) {
              	 return $response->getBody();
          		 }, function ($exception) {
            	return $exception->getMessage();
       		 }
       	);
       		$promise->wait();

	return redirect('/clipper');
        }else{return back();}

  }
	public function buyStealer(){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();
	
	if($info_user->balance < 119 AND $info_user->stealer == 0 ){return redirect('/payment');}
        if($info_user->stealer == 0 AND $info_user->balance >= 120){
		
        DB::table('users')->where('id',  $id_base)->update([
            	'stealer' => 1,
		'loader' => 1,
		'balance' => $info_user->balance - 120,
		        ]);

	return redirect('/stealer');
        }else{return back();}

  }


}
