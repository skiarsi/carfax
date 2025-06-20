<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cardealer>
 */
class CardealerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->company();
        $slug = Str::slug($name);

        return [
            'user_id'     => DB::table('users')->inRandomOrder()->value('id'),
            'dealer_title'=> $name,
            'dealer_slug' => $slug,
            'dealer_logo' => fake()->imageUrl(),
            'phone'       => fake()->phoneNumber(),
            'email'       => fake()->email(),
            'address'     => fake()->address(),
            'latitude'    => fake()->randomFloat(6, 32.6, 33.0),
            'longitude'   => fake()->randomFloat(6, -97.0, -96.6),
        ];
    }
}
