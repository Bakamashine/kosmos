<?php

namespace App\Http\Repository;

use App\Models\Flying;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderRepository
{
    public static function Add(Request $request): Order
    {
        return $request->user()->orders()->create([
            "flying_id" => $request->flying_id,
            "date" => $request->date
        ]);
    }

    // public static function GetWithFlying()
    // {
    //     return request()
    //         ->user()
    //         ->orders()
    //         ->with(Flying::class)
    //         ->get();
    // }
}
