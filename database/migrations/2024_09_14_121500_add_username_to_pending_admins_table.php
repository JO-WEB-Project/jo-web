<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUsernameToPendingAdminsTable extends Migration
{
    public function up()
    {
        Schema::table('pending_admins', function (Blueprint $table) {
            $table->string('username')->unique()->after('email');
        });
    }

    public function down()
    {
        Schema::table('pending_admins', function (Blueprint $table) {
            $table->dropColumn('username');
        });
    }
}
