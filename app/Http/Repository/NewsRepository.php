<?php

namespace App\Http\Repository;

use App\Models\News;
use Illuminate\Pagination\LengthAwarePaginator;

class NewsRepository
{
    /**
     * Возвращает с пагинацией
     * @param $count
     * @return void
     */
    public static function Get($count  = 5): LengthAwarePaginator
    {
        return News::paginate($count);
    }
}
