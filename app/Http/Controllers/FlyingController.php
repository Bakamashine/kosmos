<?php

namespace App\Http\Controllers;

use App\Contracts\Services\IImageService;
use App\Http\Repository\FlyingRepository;
use App\Http\Requests\StoreFlyingRequest;
use App\Http\Requests\UpdateFlyingRequest;
use App\Models\Flying;

class FlyingController extends Controller
{
    private int $width = 286;
    private int $height = 169;

    public function __construct(
        protected IImageService $imageService
    ) {
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $flying = FlyingRepository::Get();
        return inertia("flying/index", ['flying' => $flying]);
    }

    public function indexUser()
    {
        $flying = FlyingRepository::Get();
        return inertia("flying/indexuser", ['flying' => $flying]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("flying/create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFlyingRequest $request)
    {
        // Flying::create($request->all());
        // return redirect()->route("flying.index");


        $flying = new Flying($request->only(['title', 'description', 'price']));
        if ($request->hasFile("image"))
            $flying->image = $this->imageService->OptimizedAndUpload($request, "image", "flying", $this->width, $this->height);
        $flying->save();
        return redirect()->route("flying.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Flying $flying)
    {
        return inertia("flying/show", ['flying' => $flying]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Flying $flying)
    {
        return inertia("flying/edit", ['flying' => $flying]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFlyingRequest $request, Flying $flying)
    {
        // $flying = new Flying($request->only(['title', 'description', 'price']));
        // $flying->image = $this->imageService->OptimizedAndUpload($request, "image", "flying", $this->width, $this->height);
        // $flying->save();

        $flying->title = $request->title;
        $flying->description = $request->description;
        $flying->price = $request->price;
        if ($request->hasFile("image")) {
            $flying->image = $this->imageService->OptimizedAndUpload($request, "image", "flying", $this->width, $this->height);
        }
        $flying->save();
        return redirect()->route("flying.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Flying $flying)
    {
        $flying->delete();
    }
}
