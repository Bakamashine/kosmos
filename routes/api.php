<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(ApiController::class)
    ->group(function () {
        Route::get("info", "info");
        Route::get("navigate", 'navigate');
        Route::get("commerce", "commerce");
        Route::get("some", "some");
        Route::get("concurents", "concurents");
        Route::get("sitemap", "sitemap");
    });
