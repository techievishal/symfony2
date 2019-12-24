<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRestaurantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('restaurants', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->mediumInteger('user_id');
            $table->string('name');
            $table->text('description');
            $table->string('telephone_no');            
            $table->text('address');
            $table->string('zipcode');
            $table->float('lat', 8, 6);
            $table->float('lng', 8, 6);
            $table->rememberToken();
            $table->boolean('is_active')->default(0);            
            $table->timestamp('created_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('restaurants');
    }
}
