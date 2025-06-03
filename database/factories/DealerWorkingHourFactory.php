<?php

namespace Database\Factories;

use App\Models\Cardealer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DealerWorkingHour>
 */
class DealerWorkingHourFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $day = $this->faker->unique()->dayOfWeek(); // 'Monday' تا 'Sunday'
        $isClosed = $this->faker->boolean(10); // 10 درصد تعطیل

        return [
            'dealer_id' => Cardealer::factory(),
            'day' => $day,
            'opens_at' => $isClosed ? null : '09:00:00',
            'closes_at' => $isClosed ? null : '17:00:00',
            'is_closed' => $isClosed,
        ];
    }
}
