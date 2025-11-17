<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class CreateSuperUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:createsuperuser';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Создаёт стартового администратора';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        User::create([
            "role_id" => 1,
            "name" => "admin",
            "email" => "admin@admin.ru",
            "password" => bcrypt("admin")
        ]);
    }
}
