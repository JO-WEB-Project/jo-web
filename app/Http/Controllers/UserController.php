<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function updateAccountSettings(Request $request)
    {
        $user = Auth::user();
    
        // Validate input
        $validatedData = $request->validate([
            'email' => ['required', 'email', 'max:255', 'unique:users,email,' . $user->id],
            'current_password' => ['required'],
            'new_password' => ['nullable', 'min:8', 'confirmed'],
        ]);
    
        // Check if current password is correct
        if (!Hash::check($validatedData['current_password'], $user->password)) {
            return back()->withErrors(['current_password' => 'Current password is incorrect.']);
        }
    
        // Update email if changed
        if ($user->email !== $validatedData['email']) {
            $user->email = $validatedData['email'];
        }
    
        // Update password if new password is provided
        if (!empty($validatedData['new_password'])) {
            $user->password = Hash::make($validatedData['new_password']);
        }
    
        $user->save();
    
        // Refresh the user data
        $request->session()->put('auth.password_confirmed_at', time());
        $user->refresh();
    
        return back()->with('success', 'Account settings updated successfully.');
    }
    
}
