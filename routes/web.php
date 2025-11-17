<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\FlyingController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OtcliceController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VacancyController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\BannedUser;
use Illuminate\Support\Facades\Route;

Route::get("/", [MainController::class, 'index'])->name("main");
Route::inertia("/about_us", 'about_us')->name("about_us");

Route::get("/feedback", [FeedbackController::class, 'index'])->name("feedback.index");
Route::get("/vakancies", [VacancyController::class, "index"])->name("vakancies.index");

Route::middleware(["guest"])->group(function () {
    Route::inertia("/login", "auth/login")->name("login");
    Route::inertia("/register", 'auth/register')->name("register");
});

Route::middleware(["auth", BannedUser::class])->group(function () {
    Route::controller(FeedbackController::class)->group(function () {
        Route::post("/feedback", "store")->name("feedback.store");
    });
    Route::controller(OrderController::class)
        ->prefix("order")
        ->name("order")
        ->group(function () {
            Route::post("", 'store')->name(".store");
            Route::patch("/{order}", 'update')->name(".update");
            Route::get("/mobile", 'indexMobile')->name(".indexMobile");
            Route::get("/{order}", 'show')->name(".show");
        });
    Route::get("/home", [HomeController::class, 'index'])->name("home");
    Route::middleware(AdminMiddleware::class)->group(function () {
        Route::controller(AdminController::class)
            ->prefix("admin")
            ->group(function () {
                Route::get("", 'index')->name("admin");
                Route::get("/xml", "XMLExport")->name("XMLExport");
            });
        Route::controller(NewsController::class)
            ->prefix("news")
            ->name("news")
            ->group(function () {
                Route::get("", 'index')->name(".index");
                Route::get("/mobile", 'indexMobile')->name(".indexMobile");
                Route::get("/create", 'create')->name(".create");
                Route::get("/{news}/edit", 'edit')->name(".edit");
                Route::put("/{news}", 'update')->name(".update");
                Route::post("", 'store')->name(".store");
                Route::delete("/{news}", 'destroy')->name(".destroy");
            });
        Route::controller(UserController::class)
            ->prefix("user")
            ->name("user")
            ->group(function () {
                Route::get("", 'index')->name(".index");
                Route::get("/mobile", 'indexMobile')->name(".indexMobile");
                Route::post("", 'store')->name(".store");
                Route::get("/create", 'create')->name(".create");
                Route::get("/{user}/edit", 'edit')->name(".edit");
                Route::put("/{user}", 'update')->name(".update");
                Route::delete("/{user}", 'destroy')->name(".destroy");
                Route::patch("/{user}/ban", 'ban')->name(".ban");
                Route::patch("/{user}/unban", 'unban')->name(".unban");
                Route::get("/{user}", 'show')->name(".show");
            });

        Route::name("vacancy")
            ->prefix("vacancy")
            ->controller(VacancyController::class)
            ->group(function () {
                Route::get("", "index")->name(".index");
                Route::get("/management", 'indexManagement')->name(".management");
                Route::post("", "store")->name(".store");
                Route::get("/{vacancy}/edit", "edit")->name(".edit");
                Route::get("/create", "create")->name(".create");
                Route::delete("/{vacancy}", "destroy")->name(".destroy");
                Route::put("/{vacancy}/update", 'update')->name(".update");
                Route::post("/{vacancy}/restore", "restore")->name(".restore");
                Route::get("/destroyed", 'destroyed')->name(".destroyed");
                Route::get("{vacancy}", "show")->name(".show");
            });
        Route::resource('flying', FlyingController::class);

        Route::name("otclice")
            ->prefix("otclice")
            ->controller(OtcliceController::class)
            ->group(function () {
                Route::get("", "index")->name(".index");
                Route::get("/{vacancy}/create", 'create')->name(".create");
                Route::post("", 'store')->name(".store");
                Route::delete("/{otclice}/destroy", "destroy")->name(".destroy");
                Route::patch("/{otclice}/update", 'update')->name(".update");
            });
    });
});


Route::get("/news/{news}", [NewsController::class, 'show'])->name("news.show");
