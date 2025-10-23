<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    /** @use HasFactory<\Database\Factories\OrderFactory> */
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        "status",
        "flying_id",
        "text",
        "date"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function flying()
    {
        return $this->belongsTo(Flying::class);
    }
}
