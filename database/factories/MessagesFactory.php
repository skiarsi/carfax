<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Messages>
 */
class MessagesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'  => fake()->name(),
            'email' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'dealer' => DB::table('cardealers')->inRandomOrder()->value('id'),
            'car'   => DB::table('cars')->inRandomOrder()->value('id'),
            'message'   => fake()->paragraphs(3,true)
        ];
    }
}
