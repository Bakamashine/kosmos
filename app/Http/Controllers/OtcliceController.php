<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOtcliceRequest;
use App\Http\Requests\UpdateOtcliceRequest;
use App\Models\Otclice;

class OtcliceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $otclice = Otclice::pagiante(5);
        return inertia("otclice/index", ['otclice' => $otclice]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Otclice $otclice)
    {
        return inertia("otclice/create", ['otclice' => $otclice]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOtcliceRequest $request)
    {
        $request->user()->otclice()->create([
            "vacancy_id" => $request->vacancy_id,
            "description" => $request->description
        ]);
        return redirect()->route("home");
    }

    /**
     * Display the specified resource.
     */
    public function show(Otclice $otclice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Otclice $otclice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOtcliceRequest $request, Otclice $otclice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Otclice $otclice)
    {
        //
    }
}
