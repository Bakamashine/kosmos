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
    public static function UploadImage(Request $request, string $key, string $path): string
    {
        if ($request->hasFile($key)) {
            $url = Storage::url(
                $request->file($key)->store($path, "public")
            );
            return $url;
        }
        throw new Exception('File not found!');
    }

    /**
     * Удаление файла по пути
     * @param string $path
     * @throws \Exception
     * @return void
     */
    public static function DeleteOldImage(string $path): void
    {
        $path = str_replace("/storage/", "", $path);
        $result = Storage::disk("public");
        if ($result->exists($path)) {
            $result->delete($path);
            return;
        }
        throw new Exception("File not found!");
    }

    /**
     * Удаление всех файлов из модели (из хранилища)
     * @param class-string $model
     * @return void
     */
    public static function DeleteOldImages(string $model): void {
        $result = $model::all();
        foreach ($result as $file) {
            $path = substr($file->image_urls, 9);
            $result = Storage::disk('public');
            if ($result->exists($path)) {
                $result->delete($path);
            }
        }
    }

    public static function ReplaceImage(Request $request, string $key, string $path, string $old_path): string
    {
        self::DeleteOldImage($old_path);
        return self::UploadImage($request, $key, $path);
    }
}
