<?php

use App\Http\Controllers\Api\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::prefix('portfolio')->group(function () {
    Route::get('/profile', [PortfolioController::class, 'profile']);
    Route::get('/skills', [PortfolioController::class, 'skills']);
    Route::get('/experiences', [PortfolioController::class, 'experiences']);
    Route::get('/projects', [PortfolioController::class, 'projects']);
    Route::get('/education', [PortfolioController::class, 'education']);
});