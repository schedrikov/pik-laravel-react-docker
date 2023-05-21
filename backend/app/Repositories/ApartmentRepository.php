<?php

namespace App\Repositories;

use App\Http\Filters\ApartmentFilter;
use App\Models\Apartment;
use App\Repositories\Interfaces\ApartmentRepositoryInterface;

class ApartmentRepository implements ApartmentRepositoryInterface
{
    public static function getAll($data)
    {
        $filter = app()->make(ApartmentFilter::class, ['queryParams' => array_filter($data)]);
        $apartments = Apartment::filter($filter)->paginate(5);

        return $apartments;
    }

    public static function update($data)
    {
        $apartment = Apartment::findOrFail($data['id']);
        unset($data['id']);
        $apartment->update($data);

        return $apartment;
    }
}
