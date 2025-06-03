<?php

namespace App\Services;

use App\Models\Messages;
use app\DTOs\MessageDTO;

class MessageService
{
  /**
   * Create a new message.
   *
   * @param MessageDTO $messageDTO
   * @return Messages
   */
  public function create(MessageDTO $messageDTO): String
  {
    $message = new Messages();
    $message->name = $messageDTO->name;
    $message->email = $messageDTO->email;
    $message->phone = $messageDTO->phone;
    $message->dealer = $messageDTO->dealer;
    $message->car = $messageDTO->car;
    $message->message = $messageDTO->message;
    $message->zipCode = $messageDTO->zipCode;
    $message->save();

    return 'ok';
    // return $message;
  }
}