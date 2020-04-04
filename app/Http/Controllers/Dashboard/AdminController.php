<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use App\Quotation;
use App;
use App\User;
use Auth;
use App\Mod;
use Response;

class AdminController extends Controller
{
    public function index(Request $request){
        $user = Auth::user();
        if($user->status == 3) {}elseif($user->status == 2){return redirect('/mod-check');} else{ return redirect('/404');}


        $all_mods = DB::table('mod')->count();
        $all_users = DB::table('users')->count();
        $all = DB::table('mod')->get();
        $count_v=0;
        foreach ($all as $count){
            $count_v  += $count->views;
        }
        $count_d=0;
        foreach ($all as $count){
            $count_d  += $count->downloads;
        }
        $users_info = DB::table('users')->orderBy('id', 'desc')->paginate(10);

        if ($request->get('block')){
            $block = $request->get('block');
            DB::table('users')->where('id', '=', $block)->update([
                'status' => -1,
            ]);
        }

        return view('dashboard/index', compact('user', 'all_mods','all_users','count_v','all_downloads','count_d','users_info'));
    }
    public function check(){
        $user = Auth::user();
        if($user->status == 2 || $user->status == 3) {}else{ return redirect('/404');}

        $all_mods = DB::table('mod')->count();
        $all_users = DB::table('users')->count();
        $all = DB::table('mod')->get();
        $count_v=0;
        foreach ($all as $count){
            $count_v  += $count->views;
        }
        $count_d=0;
        foreach ($all as $count){
            $count_d  += $count->downloads;
        }

        $mods = DB::table('mod')->orderBy('id', 'desc')->where('status','=', 0)->paginate(10);

        return view('dashboard/modcheck', compact('user','mods','all_mods','all_users','count_v','all_downloads','count_d','users_info'));
    }
    public function confirm(Request $request){
        $category = $request->input('id');
        $category_count = DB::table('category')->where('name', '=', $category)->first();
        $count = $category_count->quantity + 1;
        $confirm = $request->get('confirm');
        $user = Auth::user();
        if ($confirm > 0){

            DB::table('mod')->where('id', '=', $confirm)->update([

                'moderator' => $user->name,
                'status' => 1,
            ]);
            DB::table('category')->where('name', '=', $category)->update([
                'quantity' => $count,

            ]);

            return redirect('/mod-check');
        }
    }
}
