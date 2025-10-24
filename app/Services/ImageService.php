<?php
namespace App\Services;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageService
{
    /**
     * Загрузка большого кол-ва изображения
     * @param \Illuminate\Http\Request $request
     * @param string $key Ключ под которым хранится значение в Request
     * @param string $path Путь под которым идёт сохранение
     * @return string
     */
    public static function UploadMoreImage(Request $request, string $key, string $path): array
    {
        $urls = [];
        if ($request->hasFile($key)) {
            foreach ($request->file($key) as $file) {
                $urls[] = Storage::url($file->store($path, 'public'));
            }
        }
        if ($urls)
            return $urls;
        throw new Exception('Files not found!');
    }

    /**
     * Загрузка изображения
     * @param \Illuminate\Http\Request $request
     * @param string $key Ключ под которым хранится значение в Request
     * @param string $path Путь под которым идёт сохранение
     * @throws \Exception
     * @return string
     */
    public static function UploadImage(Request $request, string $key, string $path)
    {
        if ($request->hasFile($key)) {
            $url = Storage::url(
                $request->file($key)->store($path, "public")
            );
            return $url;
        }
        throw new Exception('File not found!');
    }
}
