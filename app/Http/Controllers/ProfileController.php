<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Update the user's profile information.
     */
    public function edit(): Response
    {
        $userRole = Auth::user()->role;
        $pendingAdmins = ($userRole === 'Owner') ? \App\Models\PendingAdmin::all() : null;
    
        return Inertia::render('Admin/ProfileSetting', [
            'pendingAdmins' => $pendingAdmins,
            'userRole' => $userRole,
        ]);
    }
    

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request)
    {
        $user = Auth::user();
    
        // Update user data
        $user->name = $request->input('name');
        $user->username = $request->input('username');
    
        if ($request->filled('profile_picture_url')) {
            $user->profile_picture = $request->input('profile_picture_url');
        }
    
        $user->save();
    
        return Redirect::route('profile.edit')->with('success', 'Profile updated successfully.');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
