<?php

namespace App\Actions\Vacancy;

use App\Models\Vakancies;
use App\Services\ImageService;
use Illuminate\Http\Request;

class UploadImage
{
    public static function Upload(Request $request): string
    {
        return ImageService::UploadImage($request, "image", "vakancies");
    }

    public static function ReplaceImage(Request $request, Vakancies $vac): string {
        return ImageService::ReplaceImage($request, 'image', 'vakancies', $vac->image);
    }
}
