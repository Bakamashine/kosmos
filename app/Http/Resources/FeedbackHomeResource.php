<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FeedbackHomeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "score" => $this->score,
            "text" => $this->text,
            "flying_title" => $this->order->flying->title,
            "date" => $this->created_at
        ];
    }
}
