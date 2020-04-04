<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\EmailConfirmation;

class UserConfrimController extends Controller
{
    public function request(User $user){

        return view('confirm', compact('user'));

    }
    public function SendEmail(User $user, Request $request){
        $token = $user->getEmailConfirmationToken();

        Mail::to($user->email)->send(new EmailConfirmation($user, $token));
        return redirect('/profile/'.$user->id);

    }
    public function confirm(User $user, $token){

        $userToConfirm = User::Where('email', $user->email)->where('confirmation_token', $token)->first();
        if (!$userToConfirm){
            return redirect('/');
        }
        $userToConfirm->Toconfirm();
        return redirect('/');
    }
}
