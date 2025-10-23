<?php

namespace App\Http\Controllers;

use App\Http\Repository\NewsRepository;
use App\Models\News;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index()
    {
        $news = NewsRepository::Get();
        return inertia("main", ['news' => $news]);
    }
}
