<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $feedbacks = request()->user()->feedbacks()->get(["feedback"]);
        return inertia("user/home", ['feedbacks' => $feedbacks]);
    }
}
