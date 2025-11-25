<?php

namespace App\Actions\Vacancy;

use App\Contracts\Services\IImageService;
use App\Models\Vacancy;
use App\Services\ImageService;
use Illuminate\Http\Request;

class UploadImage
{


    public function __construct(
        protected IImageService $imageService
    )
    {
    }

    public static function UploadStatic(Request $request): string
    {
        return ImageService::UploadImage($request, "image", "vakancies");
        // $this->$imageService::class;
    }

    public function Upload() {
        $this->imageService;
    }

    public static function ReplaceImage(Request $request, Vacancy $vac): string {
        return ImageService::ReplaceImage($request, 'image', 'vakancies', $vac->image);
    }
}
