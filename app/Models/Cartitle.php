<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cartitle extends Model
{
    /** @use HasFactory<\Database\Factories\CartitleFactory> */
    use HasFactory;


    protected $primaryKey= 'cartitle_slug';
    protected $keyType= 'string';


    public function index() {
        return Cartitle::all(['id','cartitle_title']);
    }
}
