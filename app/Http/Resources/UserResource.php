<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            "role_name" => $this->role->role_name,
            "role_id" => $this->role_id,
            "status" => $this->status,
            "id" => $this->id,
            "email" => $this->email
        ];
    }
}
