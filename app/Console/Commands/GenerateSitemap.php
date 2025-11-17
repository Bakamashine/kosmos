<?php

namespace App\Console\Commands;

use App\Models\Feedback;
use App\Models\Flying;
use App\Models\Vacancy;
use App\Models\News;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Spatie\Sitemap\Tags\Url;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\SitemapGenerator;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Создаёт карту сайта';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Sitemap::create()
            ->add(config("app.url"))
            ->add(Url::create("/home")
                ->setLastModificationDate(Carbon::yesterday()))
            ->add(Url::create(route("about_us")))
            // ->add(Feedback::all())
            ->add(Vacancy::all())
            ->add(News::all())
            ->add(Flying::all())
            ->writeToFile(public_path("sitemap.xml"));
    }
}
