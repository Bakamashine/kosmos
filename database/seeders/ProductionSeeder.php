<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class ProductionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->callOnce(RoleSeeder::class);
        User::create([
            "role_id" => 1,
            "name" => "admin",
            "email" => "admin@admin.ru",
            "password" => bcrypt("admin")
        ]);
    }
}
