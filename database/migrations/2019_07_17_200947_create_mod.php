<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMod extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mod', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('name');
            $table->text('description');
            $table->text('moderator');
            $table->text('category');
            $table->integer('downloads')->nullable(0);
            $table->integer('views')->nullable(0);
            $table->text('author');
            $table->text('image');
            $table->text('file');
            $table->integer('user_id');
            $table->integer('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mod');
    }
}
