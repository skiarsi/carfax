<?php

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
        Schema::create('cardealer', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('dealer_title');
            $table->string('dealer_slug');
            $table->string('dealer_logo');
            $table->string('phone');
            $table->string('email')->nullable();
            $table->string('address')->nullable();
            $table->double('latitude',10,6)->nullable();
            $table->double('longitude',10,6)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Cardealer');
    }
};
