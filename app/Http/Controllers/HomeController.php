<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Carmake;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
        return Inertia::render('welcome',[
            'carbrands' => Carmake::all(),
            'image_path' => asset('storage/'),
            'mostviews' => Car::with(['thumbnail:id,car_id,image_url','dealersel:id,dealer_title,dealer_slug'])
                                ->orderby('views','desc')
                                ->limit(9)
                                ->get(['id','slug_id','dealer','car_make','car_model','mileage','price','views','year']),
        ]);
    }
}
