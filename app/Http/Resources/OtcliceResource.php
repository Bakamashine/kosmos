<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OtcliceResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "vacancy_id" => $this->vacancy_id,
            "user_id" => $this->user_id,
            "description" => $this->description,
            "user_name" => $this->user->name,
            "vacancy_name" => $this->vacancy->title
        ];
    }
}
