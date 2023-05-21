<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ApartmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'building_id' => $this->building_id,
            'number' => $this->number,
            'floor' => $this->floor,
            'square'  => $this->square,
            'rooms' => $this->rooms,
            'rent_price' => $this->rent_price
        ];
    }
}
