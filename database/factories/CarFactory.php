<?php

namespace Database\Factories;

use App\Models\Car;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Car>
 */
class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    function generateUniqueCode()
    {
        do {
            $code = Str::random(10);
        } while (Car::where('custom_id', $code)->exists()); // فرض بر اینکه فیلد custom_id داریم

        return $code;
    }

    public function definition(): array
    {
        $make = DB::table('carmakes')->inRandomOrder()->value('slug');
        return [   
            'views'     => fake()->numberBetween(70,200),
            'slug_id'   => $this->generateUniqueCode(),
            'car_make'  => $make,
            'car_model'  => DB::table('carmodels')->where('make_slug',$make)->inRandomOrder()->value('slug'),
            'dealer'     => DB::table('cardealers')->inRandomOrder()->value('id'),

            'car_title' => DB::table('cartitles')->inRandomOrder()->value('cartitle_slug'),
            'body_type' => DB::table('bodystyles')->inRandomOrder()->value('bodystyle_slug'),
            'drive_type' => DB::table('drivetypes')->inRandomOrder()->value('drivetype_slug'),
            'transmission_type' => DB::table('transmissions')->inRandomOrder()->value('transmission_slug'),
            'engin_type' => DB::table('engines')->inRandomOrder()->value('engine_slug'),
            'fuel_type' => DB::table('fuletypes')->inRandomOrder()->value('fueltype_slug'),
            'mpg' => fake()->randomElement(['20/25','15/21','23/28','16/23','22/25']),

            'title_description' => fake()->paragraph(1),
            'dealer_description' => fake()->paragraph(1),
            'description' => fake()->paragraph(1),

            'interior_color' => 'color '.fake()->word(),
            'exterior_color' => 'color '.fake()->word(),

            'feature' => null,
            'year'      => fake()->numberBetween(1980,2024),
            'price'      => fake()->numberBetween(1500,100000),
            'mileage'      => fake()->numberBetween(0,200000)
        ];
    }
}
