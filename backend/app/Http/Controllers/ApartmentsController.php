<?php

namespace App\Http\Controllers;

use App\Http\Requests\Apartment\FilterRequest;
use App\Http\Requests\Apartment\StoreRequest;
use App\Http\Requests\Apartment\UpdateRequest;
use App\Http\Resources\ApartmentResource;
use App\Models\Apartment;
use App\Repositories\ApartmentRepository;

class ApartmentsController extends Controller
{
    public function index(FilterRequest $request)
    {
        $data = $request->validated();
        $apartments = ApartmentRepository::getAll($data);
        return ApartmentResource::collection($apartments);
    }

    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        $apartment = Apartment::create($data);
        return new ApartmentResource($apartment);
    }

    public function update(UpdateRequest $request, Apartment $apartment)
    {
        $data = $request->validated();
        $apartment = $apartment->update($data);
        return new ApartmentResource($apartment);
    }
}
