<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Auth;
use DB;
use Carbon\Carbon;
use Response;

class PaymentsController extends Controller
{
    public function index(){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();
        

        return view('layouts.payment', compact('info_user'));
    }
    public function success(Request $request){
	$merchant_id = '10525';	
	$merchant_secret = '9uhor9i9';
	$AMOUNT = $request->input('AMOUNT');
	$MERCHANT_ORDER_ID = $request->input('MERCHANT_ORDER_ID');
	$s = $request->input('SIGN');
	$P_EMAIL = $request->input('P_EMAIL');	
	$sign = md5($merchant_id.':'.$AMOUNT.':'.$merchant_secret.':'.$MERCHANT_ORDER_ID);
	$info_user = DB::table('users')->where('email',  $P_EMAIL)->first();
	$ref = DB::table('users')->where('refcode',  $info_user->refer)->first();
	
	if ($sign != $s) {
		die('Оплата не найдена!1 - '.$sign.' | 2 - '.$s);
    	}else{
	DB::table('users')->where('email',  $P_EMAIL)->update([
                'balance' => $info_user->balance + $AMOUNT,
        ]);

	if($ref != NULL){
	DB::table('users')->where('refcode',  $info_user->refer)->update([
                'derivable' => $ref->derivable + ($AMOUNT*15/100),
        ]);

		
	}


	$client = new \GuzzleHttp\Client();

     	 $promise = $client->getAsync('https://lokisoft.ru/bot/bot.php?payment=1&AMOUNT='.$AMOUNT.'&email='.$P_EMAIL)->then(
           	function ($response) {
              	 return $response->getBody();
          		 }, function ($exception) {
            	return $exception->getMessage();
       		 }
       	);
       		$promise->wait();
		return redirect('/main');
	}
    }
 	public function payments(Request $request){
		$order_id = rand(1, 999999999);
		$email = $request->input('email');
		$order_amount = $request->input('AMOUNT');
		$merchant_id = '10525';	
		$merchant_secret = '9uhor9i9';
		$sign = md5($merchant_id.':'.$order_amount.':'.$merchant_secret.':'.$order_id);

		return redirect('http://www.free-kassa.ru/merchant/cash.php?m='.$merchant_id.'&oa='.$order_amount.'&o='.$order_id.'&s='.$sign.'&lang=ru&i=&em='.$email);
	}
}
