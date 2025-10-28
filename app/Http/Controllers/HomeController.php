<?php

namespace App\Http\Controllers;

use App\Http\Repository\OrderRepository;
use App\Http\Repository\UserRepository;
use App\Http\Resources\FeedbackHomeResource;
use App\Http\Resources\FeedbackResource;
use App\Http\Resources\OrderResource;
use App\Http\Resources\OrderUserResource;
use App\Http\Resources\SuccessOrderResource;
use App\Models\Flying;
use App\Models\Order;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // $feedbacks =  UserRepository::GetUserFeedbacks();

        $feedbacks = FeedbackHomeResource::collection(UserRepository::GetUserFeedbacks());
        $flying = Flying::select(["id", "title", "price"])->get();
        $orders = OrderUserResource::collection(request()->user()->orders()->get());
        $success_order = SuccessOrderResource::collection(UserRepository::GetUserSuccessOrder());

        return inertia("user/home", [
            'feedbacks' => $feedbacks,
            'flying' => $flying,
            "orders" => $orders,
            "success_order" => $success_order
        ]);
    }
}
