<?php

use App\Http\Controllers\ApartmentsController;
use App\Http\Controllers\BuildingController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::controller(ApartmentsController::class)->group(function () {
    Route::get('/apartments', 'index')->name('apartment.index');
    Route::post('/apartments', 'store')->name('apartment.store');
    Route::match(['put', 'patch'],'/apartments/{id}', 'update')->name('apartment.update');
});

Route::controller(BuildingController::class)->group(function () {
    Route::get('/buildings', 'index')->name('building.index');
});

