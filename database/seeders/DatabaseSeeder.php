<?php

namespace Database\Seeders;

use App\Models\Bodystyle;
use App\Models\Car;
use App\Models\Cardealers;
use App\Models\Carimage;
use App\Models\Carmake;
use App\Models\Carmodel;
use App\Models\Cartitle;
use App\Models\Drivetype;
use App\Models\Engine;
use App\Models\Fuletype;
use App\Models\Messages;
use App\Models\Transmission;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(600)->create();
        // Cardealers::factory(40)->create();

        
        // Carmake::factory(28)->create();
        // Carmodel::factory(500)->create();

        // Bodystyle::factory(10)->create();
        // Cartitle::factory(12)->create();
        // Drivetype::factory(4)->create();
        // Engine::factory(9)->create();

        // Fuletype::factory(5)->create();
        // Transmission::factory(2)->create();

        // Car::factory(10000)->create();
        

        // $cars = Car::all();
        // foreach ($cars as $car) {
        //     $imageCount = 3;

        //     $thumbnailIndex = rand(0, $imageCount - 1); // یکی رو به‌عنوان thumbnail انتخاب کن

        //     for ($i = 0; $i < $imageCount; $i++) {
        //         Carimage::create([
        //             'car_id'     => $car->id,
        //             'image_url'  => 'https://placehold.co/400x400',
        //             'isThumbnail' => $i === $thumbnailIndex,
        //         ]);
        //     }
        // }


        // Carimage::factory(20000)->create();

        Messages::factory(50)->create();

    }
}
