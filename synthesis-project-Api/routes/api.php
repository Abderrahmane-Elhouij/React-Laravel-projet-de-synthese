<?php

use App\Models\Formateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FormateurController;
use App\Http\Controllers\AdministrateurController;

Route::post('admin/login', [AdministrateurController::class, 'login']);
Route::post('formateur/login', [FormateurController::class, 'login']);
Route::post('/formateur', [FormateurController::class, 'store']);
Route::delete('formateurs/{id}', [FormateurController::class, 'destroy']);
Route::post('/login', [AuthController::class, 'login']);

Route::resource('administrateur', AdministrateurController::class);
Route::resource('formateurs', FormateurController::class);

Route::middleware(['auth:api'])->group(function () {
    Route::post('admin/create-formateur', [AdministrateurController::class, 'createFormateur']);
});
