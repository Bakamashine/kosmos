<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $title
 * @property string $description
 * @property int $price
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Order> $order
 * @property-read int|null $order_count
 * @method static \Database\Factories\FlyingFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Flying newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Flying newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Flying query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Flying whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Flying whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Flying whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Flying wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Flying whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Flying whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Flying extends Model
{
    /** @use HasFactory<\Database\Factories\FlyingFactory> */
    use HasFactory;

    public $table  = "flying";

    protected $fillable = [
        "title",
        "description",
        "price"
    ];

    public function order()
    {
        // return $this->hasMany(Order::class, "flying_id", "id");
        return $this->hasMany(Order::class);
    }
}
