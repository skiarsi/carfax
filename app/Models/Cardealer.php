<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cardealer extends Model
{
    /** @use HasFactory<\Database\Factories\CardealerFactory> */
    use HasFactory;

    protected $table = 'cardealers';

    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'dealer_slug';
    }

    // relation with days working time
    public function workingHours()
    {
        return $this->hasMany(DealerWorkingHour::class, 'dealer_id');
    }

    public function cars() : HasMany {
        return $this->hasMany(Car::class,'dealer','id');
    }
    
    public function reviews()  {
        return $this->hasMany(Review::class, 'dealer_id');
    }

    //relation with user
    public function user(){
        return $this->belongsTo(User::class);
    }
}
