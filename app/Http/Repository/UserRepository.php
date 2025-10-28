<?php

namespace App\Http\Repository;

use App\Enums\OrderStatus;
use App\Models\Order;
use Illuminate\Database\Eloquent\Builder;
use stdClass;

class UserRepository
{
    public static function GetUserSuccessOrder()
    {
        $userId = auth()->id();

        // $orders = Order::where("orders.status", OrderStatus::End)
        //     ->leftJoin("feedback", function ($join) {
        //         $join->on("orders.id", '=', 'feedback.order_id');
        //     })
        //     ->leftJoin("users", function ($join) {
        //         $join->on("orders.user_id", '=', 'users.id');
        //     })->get()
        // ;

        //         $orders = Order::with(['feedback', 'user'])
//         ->where("status", OrderStatus::End)
//         ->get();
// return $orders;

        return request()
            ->user()
            ->orders()
            ->where("status", OrderStatus::End)
            ->get();
    }

    public static function GetUserFeedbacks()
    {
        return request()
            ->user()
            ->feedbacks()
            ->get();
    }

}
