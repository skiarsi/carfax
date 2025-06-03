<?php

namespace App\Services;

use App\DTOs\CarDTO;
use App\Models\Car;

class CarService{
  public function create(CarDTO $dto): Car
  {
    $car = Car::create([
      'slug_id' => $dto->slug_id,
      'car_make' => $dto->car_make,
      'car_model' => $dto->car_model,
      'dealer' => $dto->dealer,
      'car_title' => $dto->car_title,
      'body_type' => $dto->body_type,
      'drive_type' => $dto->drive_type,
      'mileage' => $dto->mileage,
      'price' => $dto->price,
      'views' => $dto->views,
      'year' => $dto->year,
      'thumbnail_url' => $dto->thumbnail_url,
    ]);

    return $car;
  }
}