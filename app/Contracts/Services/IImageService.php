<?php

namespace App\Contracts\Services;

use Illuminate\Http\Request;


interface IImageService
{
    public function OptimizedAndUpload(
        Request $request,
        string $key,
        string $path,
        int $width,
        int $height
    ): string;

    public function OptimizedAndUploadReplace(
        Request $request,
        string $key,
        string $path,
        int $width,
        int $height,
        string $pathOldImage
    ): string;
}
