<?php

namespace Database\Factories;

use App\Models\Building;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Apartment>
 */
class ApartmentFactory extends Factory
{
    public function definition(): array
    {
        return [
            'building_id' => Building::query()->first()->id,
            'number' => fake()->unique()->numberBetween(1, 200),
            'floor' => rand(1, 20),
            'square' => rand(30, 120),
            'rooms' => rand(1, 4),
            'rent_price' => rand(30000, 50000)
        ];
    }
}
