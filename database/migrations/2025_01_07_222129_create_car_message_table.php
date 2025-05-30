<?php

use App\Models\Car;
use App\Models\Messages;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('car_message', function (Blueprint $table) {
            $table->foreignIdFor(Car::class);
            $table->foreignIdFor(Messages::class);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('car_message');
    }
};
