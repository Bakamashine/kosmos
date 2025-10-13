<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create([
            "id" => 1,
            "role_name" => "admin",
            "abilities" => json_encode(['*']),
        ]);
        Role::create([
            "id" => 2,
            "role_name" => "user",
            "abilities" => json_encode(['*']),
        ]);
    }
}
