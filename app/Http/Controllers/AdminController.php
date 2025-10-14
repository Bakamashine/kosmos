<?php

namespace App\Http\Controllers;

use App\Enums\OrderStatus;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $order = OrderResource::collection(Order::all());
        $order_status = OrderStatus::cases();
        return inertia("admin/index", ['order' => $order, 'order_status' => $order_status]);
    }
}
