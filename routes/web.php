<?php

use App\Http\Controllers\AdminManagementController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AccountSettingController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
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

    Route::get('/admin/dashboard', [AdminManagementController::class, 'dashboard'])->name('admin.dashboard');

    Route::get('/admin/AllOrders', [OrderController::class, 'allOrders'])->name('admin.allOrders');
    // Route::get('/admin/AccountSetting', [OrderController::class, 'accountSetting'])->name('admin.accountSetting');

    Route::get('/admin/adminmanagement', [AdminManagementController::class, 'adminManagement'])->name('admin.management');

    Route::post('/admin/pending-admins/{id}/approve', [AdminManagementController::class, 'approveAdmin'])->name('admin.approve');
    Route::post('/admin/pending-admins/{id}/reject', [AdminManagementController::class, 'rejectAdmin'])->name('admin.reject');

    Route::post('/admin/admins/{id}/delete', [AdminManagementController::class, 'deleteAdmin'])->name('admin.delete');
    Route::post('/admin/admins/{id}/update', [AdminManagementController::class, 'updateAdmin'])->name('admin.update');
    Route::post('/account-settings', [UserController::class, 'updateAccountSettings'])->name('account.update');

    Route::get('/Admin/ProfileSetting', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/Admin/ProfileSetting', [ProfileController::class, 'update'])->name('profile.update');
    Route::get('/Admin/AccountSetting', [AccountSettingController::class, 'edit'])->name('account.setting');

    
});

Route::get('/debug/pending-admins', function () {
    $pendingAdmins = \App\Models\PendingAdmin::all();
    return response()->json($pendingAdmins);
});

require __DIR__ . '/auth.php';
