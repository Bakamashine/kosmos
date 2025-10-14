<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Models\Order;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $order = OrderResource::collection(Order::all());
        return inertia("admin/index", ['order' => $order]);
    }
}
