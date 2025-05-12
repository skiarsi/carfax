<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Car extends Model
{
    /** @use HasFactory<\Database\Factories\CarFactory> */
    use HasFactory;

    // relations


    // relation with thumbnail
    public function thumbnail() : HasOne {
        return $this->hasOne(Carimage::class)->where('isThumbnail',1);
    }

    // relation with images
    public function images() : HasMany {
        return $this->hasMany(Carimage::class);
    }


    // relation with title
    public function title() : BelongsTo {
        return $this->belongsTo(Cartitle::class,'car_title','cartitle_slug');
    }

    // relation with car make
    public function carmake() : BelongsTo {
        return $this->belongsTo(Carmake::class,'car_make','slug');
    }

    // relations with model
    public function carmodel() : BelongsTo {
        return $this->belongsTo(Carmodel::class,'car_model','slug');
    }

    // relations with drive type
    public function drivetype() : BelongsTo {
        return $this->belongsTo(Drivetype::class,'drive_type','drivetype_slug');
    }

    // relations with transmission
    public function transmission() : BelongsTo {
        return $this->belongsTo(Transmission::class,'transmission_type','transmission_slug');
    }

    // relations with engin
    public function engintype() : BelongsTo {
        return $this->belongsTo(Engine::class,'engin_type','engine_slug');
    }

    // relations with fuel type
    public function fueltype() : BelongsTo {
        return $this->belongsTo(Fuletype::class,'fuel_type','fueltype_slug');
    }

    // relations with body type
    public function bodytype() : BelongsTo {
        return $this->belongsTo(Bodystyle::class,'body_type','bodystyle_slug');
    }

    // relation with dealer
    public function dealersel() : BelongsTo {
        return $this->belongsTo(Cardealers::class,'dealer','id');
    }

    // relate with user like
    public function users() : BelongsToMany {
        return $this->belongsToMany(User::class);
    }


    // relati with messages
    public function message() : BelongsToMany {
        return $this->belongsToMany(Messages::class);
    }





    // local scopes

    // by make
    public function scopeByMake($query, $value){
        if(isset($value)){
            if($value == '0' || $value == 'any')
                return $query->whereNotNull('car_make');

            return $query->where('car_make', $value);
        }
    }

    // by model
    public function scopeByModel($query, $value) {
        if(isset($value)){
            if($value == '0' || $value == 'any')
                return $query->whereNotNull('car_model');

            return $query->where('car_model', $value);
        }
    }


    // by year
    public function scopeByYear($query, $value) {
        if(isset($value)){
            if($value == '0' || $value == 'any')
                return $query->whereNotNull('year');
            return $query->where('year','>=', $value);
        }
    }


    // by price
    public function scopeByPrice($query, $value)  {
        if(isset($value)){
            if($value == '0' || $value == 'any')
                return $query->whereNotNull('price');

            return $query->where('price','<=', $value);
        }
    }

    // by mileage
    public function scopeByMileage($query, $value) {
        if(isset($value)){
            if($value == '0' || $value == 'any')
                return $query->whereNotNull('mileage');

            return $query->where('mileage','<=', $value);
        }
    }

    // by transmission
    public function scopeByTransmission($query, $value)  {
        if(isset($value)){
            if($value == '0' || $value == 'any')
                return $query->whereNotNull('transmission_type');

            return $query->where('transmission_type', $value);
        }
    }

    // by title
    public function scopeByTitle($query, $value) {
        if(isset($value)){
            if($value == '0' || $value == 'any')
                return $query->whereNotNull('car_title');

            return $query->where('car_title', $value);
        }
    }

    // by body type
    public function scopeByBody($query, $value) {
        if(isset($value)){
            if($value == '0' || $value == 'any')
                return $query->whereNotNull('body_type');

            return $query->where('body_type', $value);
        }
    }

    // by drive
    public function scopeByDrive($query, $value) {
        if(isset($value)){
            if($value == '0' || $value == 'any')
                return $query->whereNotNull('drive_type');

            return $query->where('drive_type', $value);
        }
    }


    public function scopeByEngine($query, $value) {
        if(isset($value)){
            if($value == '0' || $value == 'any')
                return $query->whereNotNull('engin_type');

            return $query->where('engin_type', $value);
        }
    }


    public function scopeSort($query, $sort)
{
    switch ($sort) {
        case 'date-desc':
            return $query->orderBy('created_at', 'desc');
        case 'date-asc':
            return $query->orderBy('created_at', 'asc');
        case 'price-desc':
            return $query->orderBy('price', 'desc');
        case 'price-asc':
            return $query->orderBy('price', 'asc');
        case 'mileage-desc':
            return $query->orderBy('mileage', 'desc');
        case 'mileage-asc':
            return $query->orderBy('mileage', 'asc');
        case 'year-desc':
            return $query->orderBy('year', 'desc');
        case 'year-asc':
            return $query->orderBy('year', 'asc');
        default:
            return $query;
    }
}

}
