<?php

namespace App\Http\Controllers;

class VueController extends Controller
{
    public function index()
    {
        return view('vue.index');
    }


    public function userProfile()
    {
        return view('vue.user.profile');
    }

}
