<?php

namespace App\Http\Controllers;

use App\Http\Requests\Buliding\FilterRequest;
use App\Http\Resources\BuildingResource;
use App\Models\Building;

class BuildingController extends Controller
{
    public function index(FilterRequest $request)
    {
        $request->validated();
        $buildings = Building::all();
        return BuildingResource::collection($buildings);
    }
}
