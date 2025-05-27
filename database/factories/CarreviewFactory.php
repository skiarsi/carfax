<?php

namespace Database\Factories;

use App\Models\Car;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Carreview>
 */
class CarreviewFactory extends Factory
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
            'car_id' => Car::inRandomOrder()->first()->id,
            'rating' => fake()->numberBetween(1,5),
            'comment' => fake()->boolean(70) ? fake()->sentence() : null
        ];
    }
}
