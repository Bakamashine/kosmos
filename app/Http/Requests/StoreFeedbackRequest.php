<?php

namespace App\Http\Requests;

use App\Models\Feedback;
use App\Models\Order;
use App\Rules\UniqFeedbackRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreFeedbackRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "text" => ['required', 'string'],
            "score" => ['required', 'integer', "min:1", "max:5"],
            "order_id" => [
                'required',
                'integer',
                 Rule::unique(Feedback::class)->where("user_id", auth()->id())
                // UniqFeedbackRule::class
            ]
        ];
    }
}
