---
title: Extensions
description: Guide to creating and managing extensions for Paymenter
---
# Extensions

## Introduction

Extensions are a powerfull way to extend the functionality of the system. You can create extensions to add new features to the system. You can create extensions for the following:

- [Gateways](gateway.md) (payment gateways)
- [Servers](server.md) (game servers, web hosting, etc)
- Others (miscellaneous extensions that don't fit in the other categories, these can be used to add new admin pages, hook into lifecycle events, etc)


You can run the following command to create a new extension:

```bash
php artisan app:extension:create
```

If you ever need to disable an extension and that is not possible from the admin panel, you can run the following command:

```bash
php artisan app:extension:disable
```

## Admin Pages

Adding a new admin page to Paymenter is easy due to the versatile Filament framework.

Click [this](https://filamentphp.com/docs/4.x/navigation/custom-pages) to learn how to create a new admin page.
You can also create resources for controlling models. Click [this](https://filamentphp.com/docs/4.x/resources/overview) to learn how to create a new resource.

Make sure to select your extension path when asked.

Paymenter will automatically register the page or resource for you. (only when the extension is enabled)

## Configs

Every extension can have its own configuration. You can add a configuration via the `getConfig` function.

Example:

```php
public function getConfig($values = [])
{
    return [
        [
            'name' => 'host',
            'label' => 'Pterodactyl URL',
            'type' => 'text',
            'default' => 'https://example.com/',
            'description' => 'Pterodactyl URL',
            'required' => true,
            'validation' => 'url',
        ],
        [
            'name' => 'location',
            'label' => 'Location',
            'type' => 'select',
            'default' => '1',
            'description' => 'Location your node is in?',
            'required' => true,
            'options' => [
                '1' => 'Location 1',
                '2' => 'Location 2',
            ],
        ]
    ];
}
```

Read [this](configuration.md) to learn more about the available input fields and options.

## Lifecycle Hooks

You can use the following lifecycle hooks to run code at different stages of the extension lifecycle, all hooks have the extension instance as the first parameter.

- `boot` - Runs when the extension is booted (only when the extension is enabled), e.g. registering routes
- `enabled` - Runs when the extension is enabled
- `disabled` - Runs when the extension is disabled
- `updated` - Runs when the extension config is updated
- `installed` - Runs when the extension is installed via the admin panel
- `uninstalled` - Runs when the extension is uninstalled
- `upgraded` - Runs when the extension is upgraded to a newer version, passes the old version as a parameter (if available)

Examples:

:::code-group

```php [Boot Function]
<?php

namespace Paymenter\Extensions\Others\Example;

use App\Attributes\ExtensionMeta;
use App\Classes\Extension\Extension;
use App\Helpers\ExtensionHelper;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\View;
use Paymenter\Extensions\Others\Example\Middleware\ExampleMiddleware;

#[ExtensionMeta(
    name: 'Example',
    description: 'An example extension',
    version: '1.0.0',
    author: 'Your Name',
    url: 'https://yourwebsite.com',
    // Icon can be a URL, relative path or base64 encoded string
    icon: 'https://paymenter.org/logo-dark.svg'
)]
class Example extends Extension
{
    public function boot()// [!code focus:33]
    {
        // Register routes
        require __DIR__ . '/routes/web.php';
        // Register views
        View::addNamespace('example', __DIR__ . '/resources/views');

        // Register middleware (web is used for all routes)
        ExtensionHelper::registerMiddleware('web', ExampleMiddleware::class);

        // Register policies
        Gate::policy(Model::class, Policies\ModelPolicy::class);

        // Register permissions
        Event::listen('permissions', function () {
            return [
                'admin.announcements.view' => 'View Announcements',
                'admin.announcements.create' => 'Create Announcements',
                'admin.announcements.update' => 'Update Announcements',
                'admin.announcements.delete' => 'Delete Announcements',
            ];
        });

        // Registering navigation listeners
        Event::listen('navigation', function () {
            return [
                [
                    'name' => 'Example',
                    'url' => route('example.index'),
                    'icon' => 'ri-example-line',
                    'priority' => 10,
                ],
                [
                    'name' => 'Sub Example',
                    'url' => 'https://example.com',
                    'icon' => 'ri-example-line',
                    'priority' => 20,
                ]
            ];
        });
    }
}
```

```php [Enabled/Disabled Function]

<?php

namespace Paymenter\Extensions\Others\Example;

use App\Classes\Extension\Extension;
use App\Models\Extension as ExtensionModel;

class Example extends Extension
{
    public function enabled(ExtensionModel $extension)// [!code focus:4]
    {
        // Code to run when the extension is enabled, for example seed data
    }

    public function disabled(ExtensionModel $extension)// [!code focus:4]
    {
        // Code to run when the extension is disabled
    }
}

```

```php [Installed/Uninstalled/Upgraded Function]

<?php

namespace Paymenter\Extensions\Others\Example;

use App\Classes\Extension\Extension;
use App\Helpers\ExtensionHelper;

class Example extends Extension
{
    public function installed()// [!code focus:5]
    {
        // Code to run when the extension is installed, for example run migrations:
        ExtensionHelper::runMigrations('extension/Others/Example/database/migrations');
    }

    public function uninstalled()// [!code focus:5]
    {
        // Code to run when the extension is uninstalled, for example rollback migrations:
        ExtensionHelper::rollbackMigrations('extension/Others/Example/database/migrations');
    }

    public function upgraded()// [!code focus:5]
    {
        // Code to run when the extension is upgraded, for example run migrations:
        ExtensionHelper::runMigrations('extension/Others/Example/database/migrations');
    }
}

```

