<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes(['register' => false]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/home/1', [CompanyController::class,'index'])->name('companies');
Route::get('/home/2', [EmployeeController::class,'index'])->name('employees');

// Route::get('/home/1', [CompanyController::class,'create'])->name('companies');
// Route::get('/home/2', [EmployeeController::class,'create'])->name('employees');

Route::post('/home/1', [CompanyController::class,'store'])->name('companies');
Route::post('/home/2', [EmployeeController::class,'store'])->name('employees');