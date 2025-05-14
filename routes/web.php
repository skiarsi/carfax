<?php

// use App\Http\Controllers\CarModelController;

use App\Http\Controllers\CarController;
use App\Http\Controllers\HomeController;
use App\Models\Carmake;
use App\Models\Carmodel;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// index
Route::get('/', [HomeController::class,'index'])->name('home');

Route::get('/api/brands', function(){
    return Carmake::get(['id','name','slug']);
});

// select car models by brand
Route::get('/api/carmodels/{carbrand}', function($carbrand){
    return Carmodel::with(['brand'])->where('make_slug',$carbrand)->get(['id','make_slug','name','slug']);
})->name('carmodel.bybrand');

// count cars
Route::controller(CarController::class)->group(function (){
    Route::get('/api/vehicles/count', 'count')->name('cars.count');
    Route::get('/cars', 'resualt')->name('cars.filterresualt');
});

// dashboard
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
