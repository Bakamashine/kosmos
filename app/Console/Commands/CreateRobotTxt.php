<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Robots\RobotsTxt;

class CreateRobotTxt extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'CreateRobotTxt';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Создаёт robot.txt';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $robots = \Spatie\Robots\Robots::create();
        $robotsTxt = new RobotsTxt("
        User-agent: *
        Disallow: /admin
        Crawl-delay: 1.5
        ");
        $robotsTxt->
    }
}
