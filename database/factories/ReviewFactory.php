<?php

namespace Database\Factories;

use App\Models\Cardealer;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::inRandomOrder()->first()->id,
            'dealer_id' => Cardealer::inRandomOrder()->first()->id,
            'rating' => fake()->numberBetween(1,5),
            'comment' => fake()->boolean(70) ? fake()->sentence() : null
        ];
    }
}
