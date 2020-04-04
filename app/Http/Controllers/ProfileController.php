<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Auth;
use DB;
use Carbon\Carbon;
use Response;


class ProfileController extends Controller
{
    public function index(){
        $id_base = Auth::id();
        $info_user = DB::table('users')->where('id',  $id_base)->first();
        $news = DB::table('news')->orderBy('id', 'desc')->get();
	$count_referal = DB::table('users')->where('refer',  $info_user->refcode)->get();

	
        return view('layouts.profile', compact('info_user', 'news','count_referal'));
    }
    public function editProfile(Request $request){
        $id_base = Auth::id();
        $name = $request->input('name');
        $image = $request->input('image');
        $uid = $request->input('uid');

        DB::table('users')->where('id','=', $id_base )->update([
            'name' => $name,
            'image' => $image,
            'UID' => $uid,
        ]);
        return back();

    }
	public function addPromo(Request $request){
        $id_base = Auth::id();
        $code = $request->input('code');
	$info_user = DB::table('users')->where('id',  $id_base)->first();
	$find_code = DB::table('users')->where('refcode',  $code)->first();
	
	if($code == NULL or $find_code != NULL) {return back();}
        DB::table('users')->where('id','=', $id_base )->update([
            'refcode'=> $code,
        ]);
        return back();

   	 }
	public function activate(Request $request){
        $id_base = Auth::id();
	$info_user = DB::table('users')->where('id',  $id_base)->first();
	$code = $request->input('code');
	$find_code = DB::table('users')->where('refcode',  $code)->first();
	if($info_user->refer != null or $code == NULL or $find_code == NULL or $info_user->refcode == $code) {return back();}	
	else{	
        DB::table('users')->where('id','=', $id_base)->update([
            'refer' => $code,
            'balance' => $info_user->balance + 20,
        ]);
        return back();
	}
    }
	
}
