<?php

namespace App\Providers;

use App\Models\Cardealer;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Model::automaticallyEagerLoadRelationships();

        // Inertia::share([
        //     'auth' => function () {
        //         $user = Auth::user();

        //         if ($user) {
        //             $authUser = Cardealer::where('user_id', $user->id)->id();
        //             // $user->load('dealer');
        //         }
    
        //         return [
        //             'user' => $user,
        //             // 'isDealer' => $authUser,
        //             'isDealer' => 'ok',
        //         ];
        //     },
        // ]);
    }
}
