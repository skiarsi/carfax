<?php
namespace Database\Seeders;
use Illuminate\Support\Str;

use App\Models\Bodystyle;
use App\Models\Car;
use App\Models\Cardealers;
use App\Models\Carimage;
use App\Models\Carmake;
use App\Models\Carmodel;
use App\Models\Carreview;
use App\Models\Cartitle;
use App\Models\DealerWorkingHour;
use App\Models\Drivetype;
use App\Models\Engine;
use App\Models\Fuletype;
use App\Models\Messages;
use App\Models\Review;
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
        // User::factory(1000)->create();
        // Cardealers::factory(40)->create();

        
        // Carmake::factory(28)->create();
        // // Carmodel::factory(500)->create();
        // Carmake::all()->each(function ($make) {
        //     Carmodel::factory()->count(rand(5, 8))->create([
        //         'make_slug' => $make->slug,
        //     ]);
        // });

        // Bodystyle::factory(10)->create();
        // Cartitle::factory(12)->create();
        // Drivetype::factory(4)->create();
        // Engine::factory(9)->create();

        
        // Fuel types
        // $fuels = ['Gasoline','Flexible-Fuel','Diesel','Hybrid','Electric'];
        // foreach ($fuels as $fuel) {
        //     Fuletype::create([
        //         'fueltype_title' => $fuel,
        //         'fueltype_slug'  => Str::slug($fuel),
        //         'fueltype_desc'  => fake()->paragraph(1),
        //     ]);
        // }

        // Transmissions
        // $transmissions = ['Automatic', 'Manual'];
        // foreach ($transmissions as $transmission) {
        //     Transmission::create([
        //         'transmission_title' => $transmission,
        //         'transmission_slug'  => Str::slug($transmission),
        //         'transmission_desc'  => fake()->paragraph(1),
        //     ]);
        // }


        // Car::factory(10)->create();
        

        $cars = Car::all();
        foreach ($cars as $car) {
            $imageCount = 3;

            $thumbnailIndex = rand(0, $imageCount - 1);

            for ($i = 0; $i < $imageCount; $i++) {
                Carimage::create([
                    'car_id'     => $car->id,
                    'image_url'  => 'https://placehold.co/400x400',
                    'isThumbnail' => $i === $thumbnailIndex,
                ]);
            }
        }

        // messages
        // Messages::factory(50)->create();

        // reviews
        // Review::factory()->count(200)->create();
        // Cardealers::all()->each(function ($dealer) {
        //     $userIds = User::inRandomOrder()->take(rand(20, 40))->pluck('id');
        
        //     foreach ($userIds as $userId) {
        //         if (Review::where('user_id', $userId)->where('dealer_id', $dealer->id)->exists()) {
        //             continue;
        //         }
        
        //         Review::factory()->create([
        //             'user_id' => $userId,
        //             'dealer_id' => $dealer->id,
        //         ]);
        //     }
        // });

        // Car::all()->each(function ($car) {
        //     $userIds = User::inRandomOrder()->take(rand(20, 40))->pluck('id');
        
        //     foreach ($userIds as $userId) {
        //         if (Carreview::where('user_id', $userId)->where('car_id', $car->id)->exists()) {
        //             continue;
        //         }
        
        //         Carreview::factory()->create([
        //             'user_id' => $userId,
        //             'car_id' => $car->id,
        //         ]);
        //     }
        // });



        // // days working hours
        // $days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        // Cardealers::all()->each(function ($dealer) use ($days) {
        //     foreach ($days as $day) {
        //         $isClosed = fake()->boolean(10); // ۱۰٪ احتمال تعطیل بودن

        //         DealerWorkingHour::create([
        //             'dealer_id' => $dealer->id,
        //             'day'       => $day,
        //             'opens_at'  => $isClosed ? null : '09:00:00',
        //             'closes_at' => $isClosed ? null : '17:00:00',
        //             'is_closed' => $isClosed,
        //         ]);
        //     }
        // });

    }
}
