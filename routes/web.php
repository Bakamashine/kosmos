<?php

use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

Route::get("/", [MainController::class, 'index'])->name("main");

Route::middleware(["guest"])->group(function () {
    Route::inertia("/login", "auth/login")->name("login");
    Route::inertia("/register", 'auth/register')->name("register");
});

Route::middleware(["auth"])->group(function () {
    // Route::resource("/feedback", FeedbackController::class);
    Route::controller(FeedbackController::class)->group(function () {
        Route::post("/feedback", "store")->name("feedback.store");
    });
    Route::get("/home", [HomeController::class, 'index'])->name("home");
});

