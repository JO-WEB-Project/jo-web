<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UpdateExistingUsersWithUsernameSeeder extends Seeder
{
    public function run()
    {
        $users = User::whereNull('username')->get();

        foreach ($users as $user) {
            $username = $this->generateUsername($user);
            $user->username = $username;
            $user->save();
        }
    }

    private function generateUsername($user)
    {
        $baseUsername = strstr($user->email, '@', true);
        $username = $baseUsername;
        $counter = 1;

        while (User::where('username', $username)->exists()) {
            $username = $baseUsername . $counter;
            $counter++;
        }

        return $username;
    }
}
