<?php

namespace App\Providers;

use App\Http\Requests\Apartment\FilterRequest;
use App\Repositories\ApartmentRepository;
use App\Repositories\Interfaces\ApartmentRepositoryInterface;
use Illuminate\Foundation\Application;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(ApartmentRepositoryInterface::class, function (Application $app) {
            $filterRequest = new FilterRequest();
            return new ApartmentRepository($filterRequest);
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
