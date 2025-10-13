<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

Route::get("/", [MainController::class, 'index'])->name("main");

Route::middleware(["guest"])->group(function () {
    Route::inertia("/login", "auth/login")->name("login");
    Route::inertia("/register", 'auth/register')->name("register");
});

Route::inertia('/home', 'user/home')->name("home");
