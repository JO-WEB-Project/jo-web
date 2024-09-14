<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage');
});
Route::get('/admin', function () {
    if (Auth::check()) {
        return redirect()->route('admin.dashboard');
    }
    
    return Inertia::render('Admin/Auth/Auth');
})->name('admin.login');
Route::middleware(['auth'])->group(function () {
    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');
    Route::get('/admin/AllOrders', function () {
        return Inertia::render('Admin/AllOrders');
    });    
    
});


// Route::middleware(['auth'])->group(function () {

//     Route::get('/admin/dashboard', function () {
//         return Inertia::render('Admin/Dashboard');
//     })->name('admin.dashboard');

//     Route::get('/admin/allOrders', function () {
//         return Inertia::render('Admin/AllOrders');
//     });
// });


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// // Rute Admin
// Route::get('/admin', function () {
//     return Inertia::render('admin/auth/Login');
// })->middleware('guest');

require __DIR__ . '/auth.php';
