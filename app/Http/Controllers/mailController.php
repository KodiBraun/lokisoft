<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\Welcome;

class mailController extends Controller
{
    public function send()
    {
        Mail::send(new Welcome());

    }
    public function email(){

        return view('email');
    }
}

