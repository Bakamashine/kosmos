<?php

namespace App\Http\Controllers;

use App\Http\Repository\OrderRepository;
use App\Http\Resources\OrderResource;
use App\Http\Resources\OrderUserResource;
use App\Models\Flying;
use App\Models\Order;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $feedbacks = request()->user()->feedbacks()->get(["feedback"]);
        $flying = Flying::select("id", "title", "price")->get();
        // $orders = request()->user()->orders()->get();
        $orders = OrderUserResource::collection(request()->user()->orders()->get());
        return inertia("user/home", [
            'feedbacks' => $feedbacks,
            'flying' => $flying,
            "orders" => $orders
        ]);
    }
}
