<?php

namespace App\Http\Controllers;

use App\Mod;
use Illuminate\Http\Request;
use App\User;
use DB;
use App\Quotation;

class IndexController extends Controller
{
    public function index(){

        $mods = DB::table('mod')->orderBy('id', 'desc')->where('status','=', 1)->paginate(10);
        //Подсчет данных в пагинации][
       // $count_mod = $mods->total();
        $popular = DB::table('mod')->orderBy('views', 'desc')->limit(3)->get();

        $pop_user = DB::table('users')->orderBy('id', 'desc')->limit(10)->get();

        $categorys = DB::table('category')->get();


        return view('layouts.register', compact('mods','categorys', 'popular','pop_user'));
    }
    public function search(Request $request){
        $category = $request->get('category');
        $search = $request->get('search');
        $popular = DB::table('mod')->orderBy('views', 'desc')->limit(3)->get();
        $pop_user = DB::table('users')->orderBy('id', 'desc')->limit(10)->get();


        $mods = DB::table('mod')->orderBy('id', 'desc')->where([
        ['category', 'like', '%'.$category.'%'],
        ['name', 'like', '%'.$search.'%'],
        ])->paginate(10);
        $categorys = DB::table('category')->get();
        return view('layouts.index', compact('mods','categorys', 'popular','pop_user'));
    }
    public function category(){
        $categorys = DB::table('category')->get();
        return view('layouts.index', compact('categorys'));
    }

}
