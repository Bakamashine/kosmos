<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Sitemap\Tags\Url;
use Spatie\Sitemap\Contracts\Sitemapable;

/**
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string $image
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property int $payment
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Otclice> $otclice
 * @property-read int|null $otclice_count
 * @method static \Database\Factories\VacancyFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Vacancy newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Vacancy newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Vacancy onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Vacancy query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Vacancy whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Vacancy whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Vacancy whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Vacancy whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Vacancy whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Vacancy wherePayment($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Vacancy whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Vacancy whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Vacancy withTrashed(bool $withTrashed = true)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Vacancy withoutTrashed()
 * @mixin \Eloquent
 */
class Vacancy extends Model implements Sitemapable
{
    /** @use HasFactory<\Database\Factories\VakanciesFactory> */
    use HasFactory, SoftDeletes;

    public $table = "vacancy";

    protected $fillable = [
        "title",
        'description',
        "payment",
        // "image"
    ];

    protected $guarded = [
        "image"
    ];

    protected $hidden = [
        "created_at",
        "updated_at"
    ];

    public function otclice()
    {
        return $this->hasMany(Otclice::class);
    }

    public function toSitemapTag(): array|string|\Spatie\Sitemap\Tags\Url
    {
        // return route("vacancy.show", $this);
        return Url::create(route("vacancy.show", $this))
            ->setLastModificationDate(Carbon::create($this->updated_at));
    }

}
