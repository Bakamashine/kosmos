<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FullUserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "name" => $this->name,
            "email" => $this->email,
            "status" => $this->status,
            "role" => $this->role->role_name,
            "feedbacks" => $this->feedbacks,
            "orders" => $this->orders,
            "id" => $this->id,
            "otclice" => $this->otclice
        ];
    }
}
