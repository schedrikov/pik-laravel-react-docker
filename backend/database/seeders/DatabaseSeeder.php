<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Apartment;
use App\Models\Building;
use App\Models\City;
use App\Models\Complex;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        City::create([
             'name' => 'Москва'
         ]);

        $complex = Complex::create([
            'name' => 'ЖК Парус'
        ]);

        Building::create([
            'number' => '10',
            'floors' => 20,
            'complex_id' => $complex->id
        ]);

        Building::create([
            'number' => '12a',
            'floors' => 20,
            'complex_id' => $complex->id
        ]);

        Apartment::factory(20)->create();
    }
}
