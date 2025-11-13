<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vacancy extends Model
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
}
