<?php

namespace App\Http\Controllers;

use App\Http\Resources\CarResource;
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
        $yearafter = request('yearmin');
        $yearbefore = request('yearmax');
        $price = request('price');
        $mileage = request('mileage');
        $transmission = request('transmission');
        $title = request('title');
        $bodytype = request('bodytype');
        $drivetrain = request('drivetrain');
        $sort = request('sort');

        $searchresualt = Car::
                        with([
                            'thumbnail:id,car_id,image_url',
                            'carmake:id,slug,name',
                            'carmodel:id,slug,name',
                            'transmission',
                            'dealersel',
                            'title',
                            'drivetype',
                            'engintype',
                            'bodytype',
                            'fueltype'
                        ])
                        ->byMake($brand)
                        ->byModel($model)
                        ->byYear($yearafter)
                        ->byYearBefore($yearbefore)
                        ->byPrice($price)
                        ->byMileage($mileage)
                        ->byTransmission($transmission)
                        ->ByTitle($title)
                        ->ByBody($bodytype)
                        ->ByDrive($drivetrain)
                        ->sort($sort)
                        ->select(['id','slug_id','year','price','thumbnail','mileage','mpg','car_make','car_model','description','dealer','transmission_type','car_title','drive_type','engin_type','fuel_type','body_type'])
                        ->paginate(20);

        return Inertia::render('search',[
            'searchresult' => CarResource::collection($searchresualt),
            'carbrands' => Carmake::get(['id','name','slug'])
        ]);
    }


    public function details(string $id) {
        
        $car = Car::where('slug_id', $id)->with(['carmake','carmodel','images','dealersel','bodytype','fueltype'])->first();

        return Inertia::render('car', [
            'cardetails' => new CarResource($car)->resolve(),
        ]);
    }
}
