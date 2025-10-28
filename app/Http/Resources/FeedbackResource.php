<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FeedbackResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // dd($this->order);
        return [
            'text' => $this->text,
            'score' => $this->score,
            'user_name' => $this->user->name,
            "flying_title" => $this->order->flying->title,
            "flying_price" => $this->order->flying->price,
        ];
    }
}
