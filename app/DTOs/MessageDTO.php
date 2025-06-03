<?php
namespace App\DTOs;

class MessageDTO {
  public function __construct(
    // public ?int $id,
    public string $name,
    public string $email,
    public ?string $phone,
    public int $dealer,
    public int $car,
    public ?string $message,
    public ?string $zipCode,
  ){}


  public static function fromArray(array $data): self
  {
    return new self(
      // id: $data['id'] ?? '',
      name: $data['name'],
      email: $data['email'],
      phone: $data['phone'] ?? '',
      dealer: $data['dealer'],
      car: $data['car'],
      message: $data['message'] ?? '',
      zipCode: $data['zipCode'] ?? ''
    );

  }
}