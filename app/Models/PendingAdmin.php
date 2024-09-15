<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PendingAdmin extends Model
{
    use HasFactory;

    protected $table = 'pending_admins';

    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
    ];
}
