<?php

namespace App\Http\Controllers;

use App\Http\Repository\NewsRepository;
use App\Http\Requests\StoreNewsRequest;
use App\Http\Requests\UpdateNewsRequest;
use App\Models\News;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = NewsRepository::Get();
        return inertia("news/index", ['news' => $news]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("news/create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNewsRequest $request)
    {
        News::create($request->all());
        // return back();
        return redirect()->route("news.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        return inertia("news/show", ['news' => $news]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        return inertia("news/edit", ['news' => $news]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNewsRequest $request, News $news)
    {
        $news->update($request->all());
        $news->save();
        return redirect()->route("news.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        $news->delete();
    }
}
