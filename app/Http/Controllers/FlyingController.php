<?php

namespace App\Http\Controllers;

use App\Http\Repository\FlyingRepository;
use App\Http\Requests\StoreFlyingRequest;
use App\Http\Requests\UpdateFlyingRequest;
use App\Models\Flying;

class FlyingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $flying = FlyingRepository::Get();
        return inertia("flying/index", ['flying' => $flying]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFlyingRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Flying $flying)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Flying $flying)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFlyingRequest $request, Flying $flying)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Flying $flying)
    {
        //
    }
}
