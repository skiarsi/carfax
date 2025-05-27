<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Carreview extends Model
{
    /** @use HasFactory<\Database\Factories\CarreviewFactory> */
    use HasFactory;

    public function user() : BelongsTo {
        return $this->belongsTo(User::class,'user_id');
    }
}
