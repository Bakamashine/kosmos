<?php

namespace App\Http\Controllers;

use App\Enums\OrderStatus;
use App\Http\Repository\OrderRepository;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Resources\OrderResource;
use App\Models\Flying;
use App\Models\Order;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Flying $flying)
    {
        return inertia("order/create", ['flying' => $flying]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
        // $request->user()->orders()->create($request->all());
        $result = OrderRepository::Add($request);
        if ($result)
            return redirect()->route("home")->with("success", "Заявка успешно создана!");
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        return inertia("order/show", ['order' => new OrderResource($order)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    public function indexMobile()
    {
        $order = OrderResource::collection(Order::paginate(5));
        $order_status = OrderStatus::cases();
        return inertia("order/updateStatusMobile", ['order' => $order, 'order_status' => $order_status]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        $order->status = $request->status;
        $order->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        $order->delete();
    }
}
