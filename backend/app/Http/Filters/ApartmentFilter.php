<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class ApartmentFilter extends AbstractFilter
{
    public const BUILDING_ID = 'building_id';
    public const NUMBER = 'number';
    public const FLOOR = 'floor';
    public const SQUARE = 'square';
    public const ROOMS = 'rooms';
    public const RENT_PRICE = 'rent_price';

    protected function getCallbacks(): array
    {
        return [
            self::NUMBER => [$this, 'number'],
            self::ROOMS => [$this, 'rooms'],
        ];
    }

    public function number(Builder $builder, $value)
    {
        $builder->where('number', 'like', "%{$value}%");
    }

    public function rooms(Builder $builder, $value)
    {
        $builder->where('rooms', $value);
    }
}
