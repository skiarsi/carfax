<?php

namespace App\Http\Controllers;

use App\Http\Resources\CarResource;
use App\Http\Resources\DealerResource;
use App\Models\Cardealers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class Cardealer extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Cardealers $dealer)
    {
        $dealer->load(['reviews','workingHours']);
        $cars = $dealer->cars()->select(
                                        '*',
                                        DB::raw('(SELECT image_url FROM carimages WHERE carimages.car_id = cars.id AND isThumbnail = 1 LIMIT 1) as thumbnail_url')
                                    )->paginate(22);

        return Inertia::render('dealer',[
            'app'   => config('app.name'),
            'cars'  => CarResource::collection($cars),
            'dealer' => new DealerResource($dealer)->resolve(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
