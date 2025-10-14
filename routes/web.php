<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\OrderController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Route;

Route::get("/", [MainController::class, 'index'])->name("main");

Route::middleware(["guest"])->group(function () {
    Route::inertia("/login", "auth/login")->name("login");
    Route::inertia("/register", 'auth/register')->name("register");
});

Route::middleware(["auth"])->group(function () {
    Route::controller(FeedbackController::class)->group(function () {
        Route::post("/feedback", "store")->name("feedback.store");
    });
    Route::controller(OrderController::class)->group(function () {
        Route::post("/order", 'store')->name("order.store");
    });
    Route::get("/home", [HomeController::class, 'index'])->name("home");
    Route::middleware(AdminMiddleware::class)->group(function () {
        Route::controller(AdminController::class)->group(function () {
            Route::get("/admin", 'index')->name("admin");
        });
    });
});

