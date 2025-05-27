<?php

namespace App\Http\Controllers;

use App\Http\Resources\CarResource;
use App\Models\Car;
use App\Models\Carmake;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
                            'carmake:id,slug,name',
                            'carmodel:id,slug,name',
                            'transmission',
                            'dealersel:id,dealer_title,dealer_slug',
                            'title',
                            'drivetype',
                            'engintype',
                            'bodytype',
                            'fueltype',
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
                        ->select([
                            'id',
                            'slug_id',
                            'year',
                            'price',
                            'mileage',
                            'mpg',
                            'car_make',
                            'car_model',
                            'description',
                            'dealer',
                            'transmission_type',
                            'car_title',
                            'drive_type',
                            'engin_type',
                            'fuel_type',
                            'body_type',
                            // این خط thumbnail رو مستقیماً از زیر کوئری می‌گیره
                            DB::raw('(SELECT image_url FROM carimages WHERE carimages.car_id = cars.id AND isThumbnail = 1 LIMIT 1) as thumbnail_url')
                        ])
                        ->paginate(20);

        return Inertia::render('search',[
            'searchresult' => CarResource::collection($searchresualt),
            'carbrands' => Carmake::get(['id','name','slug'])
        ]);
    }


    public function details(string $id) {
        
        $car = Car::where('slug_id', $id)->with(
                                            [
                                                'carmake',
                                                'carmodel',
                                                'images',
                                                'bodytype',
                                                'fueltype',
                                                'dealersel' => function ($q) {
                                                    $q->withAvg('reviews as rating', 'rating')
                                                    ->withCount(['reviews as count']);
                                                },
                                                'latestReviews'=> function($q){
                                                    $q->whereNotNull('comment')
                                                    ->with('user')
                                                    ->where('comment', '!=', '')
                                                    ->latest()
                                                    ->take(3);
                                                },
                                            ])
                                            ->withCount('allReviews as reviews_count')
                                            ->withAvg('allReviews as reviews_avg_rating', 'rating')
                                            ->first();

        $suggestion = Car::where('id', '!=', $car->id)
                        ->where('car_make', $car->car_make)
                        ->where('body_type', $car->body_type)
                        ->whereBetween('price', [$car->price * 0.85, $car->price * 1.15])
                        ->with(['carmake','carmodel','dealersel','thumbnail'])
                        ->limit(4)
                        ->select(
                            [
                                'id',
                                'slug_id',
                                'car_make',
                                'car_model',
                                'price',
                                'year',
                                DB::raw('(SELECT image_url FROM carimages WHERE carimages.car_id = cars.id AND isThumbnail = 1 LIMIT 1) as thumbnail_url')
                            ])
                        ->get();

        return Inertia::render('car', [
            'cardetails' => new CarResource($car)->resolve(),
            'ratingDistribution' => DB::table('carreviews')
                                    ->select('rating', DB::raw('count(*) as total'))
                                    ->where('car_id', $car->id)
                                    ->groupBy('rating')
                                    ->pluck('total', 'rating'),

            'suggestions'   => $suggestion->map(fn($item) => (new CarResource($item))->withDetails(false)->resolve()),
        ]);
    }
}
