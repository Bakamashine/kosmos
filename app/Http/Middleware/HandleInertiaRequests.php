<?php

namespace App\Http\Middleware;

use Diglactic\Breadcrumbs\Breadcrumbs;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth.user' => fn() => $request->user() ? [
                'name' => $request->user()->name,
                'email' => $request->user()->email,
                "role_name" => $request->user()->role->role_name
            ] : null,
            "appName" => config("app.name"),
            "flash" => [
                "banned" => fn() => $request->session()->get("banned")
            ],
            // "breadcrumps" => fn() => Breadcrumbs::generate(),
            'breadcrumbs' => fn() =>
                $request->route() && $request->route()->getName()
                ? Breadcrumbs::generate($request->route()->getName(), ...array_values($request->route()->originalParameters()))
                : []
        ];
    }
}
