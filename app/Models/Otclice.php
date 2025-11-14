<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\OtcliceFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Otclice extends Model
{
    /** @use HasFactory<\Database\Factories\OtcliceFactory> */
    use HasFactory;
}
