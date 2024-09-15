<?php

namespace App\Http\Controllers;

use App\Models\PendingAdmin;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminManagementController extends Controller
{
    public function dashboard()
    {
        $userRole = Auth::user()->role;
        $pendingAdmins = ($userRole === 'Owner') ? PendingAdmin::all() : null;

        return Inertia::render('Admin/Dashboard', [
            'pendingAdmins' => $pendingAdmins,
            'userRole' => $userRole,
        ]);
    }

    public function adminManagement()
    {
        $userRole = Auth::user()->role;
    
        if ($userRole !== 'Owner') {
            return redirect()->route('admin.dashboard');
        }
    
        $admins = User::where('role', 'Admin')->get();
    
        return Inertia::render('Admin/AdminManagement', [
            'pendingAdmins' => PendingAdmin::all(),
            'admins' => $admins,
            'userRole' => $userRole,
        ]);
    }

    public function approveAdmin($id)
    {
        if (Auth::user()->role !== 'Owner') {
            abort(403, 'Unauthorized action.');
        }

        $pendingAdmin = PendingAdmin::find($id);

        if ($pendingAdmin) {
            User::create([
                'name' => $pendingAdmin->name,
                'username' => $pendingAdmin->username,
                'email' => $pendingAdmin->email,
                'password' => $pendingAdmin->password,
                'role' => 'Admin',
            ]);

            $pendingAdmin->delete();

            return redirect()->back()->with('success', 'Admin approved successfully.');
        }

        return redirect()->back()->with('error', 'Pending admin not found.');
    }

    public function rejectAdmin($id)
    {
        if (Auth::user()->role !== 'Owner') {
            abort(403, 'Unauthorized action.');
        }

        $pendingAdmin = PendingAdmin::find($id);

        if ($pendingAdmin) {
            $pendingAdmin->delete();

            return redirect()->back()->with('success', 'Admin rejected successfully.');
        }

        return redirect()->back()->with('error', 'Pending admin not found.');
    }

    public function index()
    {
        $userRole = Auth::user()->role;
        $pendingAdmins = ($userRole === 'Owner') ? PendingAdmin::all() : null;

        return Inertia::render('Admin/AdminManagement', [
            'pendingAdmins' => $pendingAdmins,
            'userRole' => $userRole,
        ]);
    }

    public function deleteAdmin($id)
    {
        $userRole = Auth::user()->role;

        if ($userRole !== 'Owner') {
            abort(403, 'Unauthorized action.');
        }

        $admin = User::find($id);

        if (!$admin || $admin->role !== 'Admin') {
            return redirect()->back()->with('error', 'Admin not found or cannot delete this user.');
        }

        $admin->delete();

        return redirect()->back()->with('success', 'Admin deleted successfully.');
    }

    public function updateAdmin(Request $request, $id)
    {
        $userRole = Auth::user()->role;

        if ($userRole !== 'Owner') {
            abort(403, 'Unauthorized action.');
        }

        $admin = User::find($id);

        if (!$admin || $admin->role !== 'Admin') {
            return redirect()->back()->with('error', 'Admin not found or cannot edit this user.');
        }

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users,username,' . $admin->id,
            'email' => 'required|string|email|max:255|unique:users,email,' . $admin->id,
            'password' => 'nullable|string|min:8|confirmed',
        ]);

        $admin->name = $validatedData['name'];
        $admin->username = $validatedData['username'];
        $admin->email = $validatedData['email'];

        if (!empty($validatedData['password'])) {
            $admin->password = Hash::make($validatedData['password']);
        }

        $admin->save();

        return redirect()->back()->with('success', 'Admin updated successfully.');
    }
}
