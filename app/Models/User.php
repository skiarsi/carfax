<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\Cardealer;
use Illuminate\Database\Eloquent\Relations\HasOne;

// use Laravel\Sanctum\HasApiTokens;

/**
 * @property int $id
 * @property string $name
 * @property string $last_name
 * @property string $username
 * @property string $email
 * @property string $password
 * @property bool $is_active
 * @property string|null $activation_token
 */
class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table = 'users';

    protected $fillable = [
        'name',
        'last_name',
        'username',
        'email',
        'password',
        'is_active',
        'activation_token'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }



    // relation with cars
    public function cars() : BelongsToMany {
        return $this->belongsToMany(Car::class);
    }

    // relarion with dealers
    // check if user is dealer
    public function dealer() : HasOne {
        return $this->hasOne(Cardealer::class);
    }
}
