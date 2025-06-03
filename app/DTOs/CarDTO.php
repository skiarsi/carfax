<?php
namespace App\DTOs;

class CarDTO
{
    public function __construct(
        public int $id,
        public string $slug_id,
        public string $car_make,
        public string $car_model,
        public string $dealer,
        public string $car_title,
        public string $body_type,
        public string $drive_type,
        public int $mileage,
        public float $price,
        public int $views,
        public int $year,
        public ?string $thumbnail_url = null
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            id: $data['id'],
            slug_id: $data['slug_id'],
            car_make: $data['car_make'],
            car_model: $data['car_model'],
            dealer: $data['dealer'],
            car_title: $data['car_title'],
            body_type: $data['body_type'],
            drive_type: $data['drive_type'],
            mileage: $data['mileage'],
            price: $data['price'],
            views: $data['views'],
            year: $data['year'],
            thumbnail_url: $data['thumbnail_url'] ?? null
        );
    }
}