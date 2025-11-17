<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $user_id
 * @property int $vacancy_id
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @property-read \App\Models\Vacancy $vacancy
 * @method static \Database\Factories\OtcliceFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Otclice whereVacancyId($value)
 * @mixin \Eloquent
 */
class Otclice extends Model
{
    /** @use HasFactory<\Database\Factories\OtcliceFactory> */
    use HasFactory;
    protected $fillable = [
        "vacancy_id",
        "description"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function vacancy()
    {
        return $this->belongsTo(Vacancy::class);
    }
}
