<?php

namespace App\Http\Controllers;

use App\Actions\Vacancy\UploadImage;
use App\Http\Requests\StoreVacancyRequest;
use App\Http\Requests\UpdateVacancyRequest;
use App\Models\Vacancy;
use App\Services\ImageService;

class VacancyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vacancy = Vacancy::paginate(5);
        return inertia("vacancy/index", ['vacancy' => $vacancy]);
    }

    public function indexManagement()
    {
        $vacancy = Vacancy::paginate(5);
        return inertia("vacancy/management", ['vacancy' => $vacancy]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("vacancy/create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVacancyRequest $request)
    {
        $vac = new Vacancy($request->only(['title', 'description', 'payment']));
        $vac->image = UploadImage::Upload($request);
        $vac->save();
        return redirect()->route("vacancy.management");
    }

    /**
     * Display the specified resource.
     */
    public function show(Vacancy $vacancy)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vacancy $vacancy)
    {
        return inertia("vacancy/edit", ['vacancy' => $vacancy]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVacancyRequest $request, Vacancy $vacancy)
    {
        $vacancy->title = $request->title;
        $vacancy->description = $request->description;
        $vacancy->payment = $request->payment;
        if ($request->hasFile("image")) {
            $vacancy->image = UploadImage::ReplaceImage($request, $vacancy);
        }
        $vacancy->save();
        return redirect()->route("vacancy.management");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vacancy $vacancy)
    {
        $vacancy->delete();
    }

    public function restore(int $id)
    {
        Vacancy::onlyTrashed()->find($id)->restore();

    }

    public function destroyed()
    {
        $vac = Vacancy::onlyTrashed()->paginate(5);
        return inertia("vacancy/trash", ['vacancy' => $vac]);
    }
}
