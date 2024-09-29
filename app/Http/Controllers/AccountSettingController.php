<?php

namespace App\Http\Controllers;

use App\Models\PendingAdmin;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AccountSettingController extends Controller
{
    public function edit(): Response
    {
        $userRole = Auth::user()->role;
        $pendingAdmins = ($userRole === 'Owner') ? PendingAdmin::all() : null;

        return Inertia::render('Admin/AccountSetting', [
            'pendingAdmins' => $pendingAdmins,
            'userRole' => $userRole,
        ]);
    }
}
