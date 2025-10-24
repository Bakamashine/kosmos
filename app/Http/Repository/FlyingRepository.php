<?php

namespace App\Http\Repository;

use App\Models\Flying;

class FlyingRepository
{
    /**
     * Возвращает с пагинацией
     * @param mixed $count
     * @return \Illuminate\Pagination\LengthAwarePaginator
     */
    public static function Get($count = 5)
    {
        return Flying::paginate($count);
    }
}
