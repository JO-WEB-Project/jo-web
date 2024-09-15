<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\PendingAdmin;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function allOrders()
    {
        $userRole = Auth::user()->role;
        $pendingAdmins = ($userRole === 'Owner') ? PendingAdmin::all() : null;

        return Inertia::render('Admin/AllOrders', [
            'pendingAdmins' => $pendingAdmins,
            'userRole' => $userRole,
        ]);
    }
}
