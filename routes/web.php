<?php

// use App\Http\Controllers\CarModelController;

use App\Http\Controllers\CarController;
use App\Http\Controllers\CardealerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MessagesController;
use App\Models\Carmake;
use App\Models\Carmodel;
use Illuminate\Support\Facades\Route;

// index
Route::get('/', [HomeController::class,'index'])->name('home');

Route::get('/api/brands', function(){
    return Carmake::get(['id','name','slug']);
});

// select car models by brand
Route::get('/api/carmodels/{carbrand}', function($carbrand){
    return Carmodel::with(['brand'])->where('make_slug',$carbrand)->get(['id','make_slug','name','slug']);
})->name('carmodel.bybrand');


Route::controller(CarController::class)->group(function (){
    // count cars
    Route::get('/api/vehicles/count', 'count')->name('cars.count');
    // search resualt
    Route::get('/cars', 'resualt')->name('cars.filterresualt');
    // one car
    Route::get('/car/{id}', 'details')->name('car.details');
});

// car dealer
Route::resource('dealer', CardealerController::class);

// messages
Route::resource('message', MessagesController::class);

// dashboard
Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    // Route::get('dashboard', [DashboardController::class]);
    // Route::get('dashboard', function () {
    //     return Inertia::render('dashboard');
    // })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
