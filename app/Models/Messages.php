<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Messages extends Model
{
    /** @use HasFactory<\Database\Factories\MessagesFactory> */
    use HasFactory;

    protected $guarded = [];

    protected $fillable = [
        'name',
        // 'zipCode',
        'email',
        'phone',
        'message',
        'car',
        'dealer'
    ];


    // relati with messages
    public function message() : BelongsToMany {
        return $this->belongsToMany(Car::class);
    }
}
