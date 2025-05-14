<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Carmake;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CarController extends Controller
{
    public function count(Request $request) {
        
        $carsQuery = Car::
                        byMake($request->brand)
                        ->byModel($request->model)
                        ->byYear($request->year)
                        ->byPrice($request->price)
                        ->byMileage($request->mileage)
                        ->byTransmission($request->transmission)
                        ->ByTitle($request->title)
                        ->ByBody($request->bodytype)
                        ->ByDrive($request->drivetrain)
                        ;

        return response()->json([
            'count'   => $carsQuery->count(),
        ]);
    }

    // get index searhc resualt
    public function resualt() {
        $brand = request('brand');
        $model = request('model');
        $year = request('year');
        $price = request('price');
        $mileage = request('mileage');
        $transmission = request('transmission');
        $title = request('title');
        $bodytype = request('bodytype');
        $drivetrain = request('drivetrain');

        $searchresualt = Car::
                        byMake($brand)
                        ->byModel($model)
                        ->byYear($year)
                        ->byPrice($price)
                        ->byMileage($mileage)
                        ->byTransmission($transmission)
                        ->ByTitle($title)
                        ->ByBody($bodytype)
                        ->ByDrive($drivetrain)
                        ->paginate(20);

        return Inertia::render('search',[
            'searchresult' => $searchresualt,
            'carbrands' => Carmake::get(['id','name','slug'])
        ]);
    }
}
