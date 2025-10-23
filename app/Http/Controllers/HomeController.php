<?php

namespace App\Http\Controllers;

use App\Models\Flying;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $feedbacks = request()->user()->feedbacks()->get(["feedback"]);
        $flying = Flying::all();
        return inertia("user/home", [
            'feedbacks' => $feedbacks,
            'flying' => $flying,
        ]);
    }
}
