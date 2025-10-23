<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        return $this->hasMany(Order::class);
    }
}
