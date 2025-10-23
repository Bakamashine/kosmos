<?php

namespace Database\Seeders;

use App\Models\Flying;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FlyingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Flying::factory()->count(10)->create();
    }
}
