<?php

namespace App\Http\Controllers;

use App\Actions\Vacancy\UploadImage;
use App\Http\Requests\StoreVakanciesRequest;
use App\Http\Requests\UpdateVakanciesRequest;
use App\Models\Vakancies;
use App\Services\ImageService;

class VakanciesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vakancies = Vakancies::paginate(5);
        return inertia("vakancies/index", ['vakancies' => $vakancies]);
    }

    public function indexManagement()
    {
        $vakancies = Vakancies::paginate(5);
        return inertia("vakancies/management", ['vakancies' => $vakancies]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("vakancies/create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVakanciesRequest $request)
    {
        $vac = new Vakancies($request->only(['title', 'description', 'payment']));
        $vac->image = UploadImage::Upload($request);
        $vac->save();
        return redirect()->route("vakancies.management");
    }

    /**
     * Display the specified resource.
     */
    public function show(Vakancies $vakancies)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vakancies $vakancy)
    {
        return inertia("vakancies/edit", ['vakancy' => $vakancy]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVakanciesRequest $request, Vakancies $vakancy)
    {
        // $vakancy->update($request->only(["title", "description", "payment"]));
        $vakancy->title = $request->title;
        $vakancy->description = $request->description;
        $vakancy->payment = $request->payment;
        if ($request->hasFile("image")) {
            $vakancy->image = UploadImage::ReplaceImage($request, $vakancy);
        }
        $vakancy->save();
        return redirect()->route("vakancies.management");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vakancies $vakancy)
    {
        $vakancy->delete();
    }
}
