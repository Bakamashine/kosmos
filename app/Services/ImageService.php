<?php
namespace App\Services;

use App\Contracts\Services\IImageService;
use Exception;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Foundation\Console\OptimizeClearCommand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image;
use Str;


class ImageService implements IImageService
{

    public function __construct(
        #[Storage("public")] protected Filesystem $filesystem
    ) {
    }

    /**
     * Обрезает изображение и сохраняет
     * @param Request $request
     * @param string $key Ключ под которым хранится значение в Request
     * @param string $path Путь под которым идёт сохранение
     * @param int $width Длина картинки
     * @param int $height Высота картинки
     * @throws Exception
     * @return string
     */
    public function OptimizedAndUpload(\Illuminate\Http\Request $request, string $key, string $path, int $width, int $height): string
    {
        if ($request->hasFile($key)) {
            $upload = $request->file($key);
            $image = Image::read($upload)->resize($width, $height);
            $fileName = Str::random() . "." . $upload->getClientOriginalExtension();
            $fullPath = $path . "/" . $fileName;
            $result = Storage::disk("public")->put(
                $fullPath,
                $image->encodeByExtension($upload->getClientOriginalExtension(), quantity: 70)
            );

            if ($result) {
                return Storage::url($fullPath);
            }
        }
        throw new Exception('File not found!');
    }

    public function OptimizedAndUploadReplace(Request $request, string $key, string $path, int $width, int $height, string $pathOldImage): string
    {
        $newImage = $this->OptimizedAndUpload($request, $key, $path, $width, $height);
        if (Storage::disk("public")->exists($pathOldImage)) {
            Storage::delete($pathOldImage);
        }

        return $newImage;
    }

    /**
     * Загрузка большого кол-ва изображения
     * @param \Illuminate\Http\Request $request
     * @param string $key Ключ под которым хранится значение в Request
     * @param string $path Путь под которым идёт сохранение
     * @throws Exception
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
    public static function DeleteOldImages(string $model): void
    {
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
