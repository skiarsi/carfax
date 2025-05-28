<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DealerWorkingHour extends Model
{
    protected $fillable = ['dealer_id', 'day', 'opens_at', 'closes_at', 'is_closed'];

    public function dealer()
    {
        return $this->belongsTo(Cardealers::class, 'dealer_id');
    }
}
