---
title: "Server Extensions"
description: "Creating server extensions for Paymenter"
---
# Server extensions

The server extensions have a few hooks that you can use to setup the server.

Servers still support everything documented in the [extensions overview](index.md).

## `getProductConfig`

Shown to the admin when configuring the product.

```php
public function getProductConfig($values = [])
{
    return [
        [
            'name' => 'ram',
            'label' => 'Ram',
            'type' => 'number',
            'required' => true,
            'default' => 1024,
            'description' => 'The amount of ram in MB',
        ],
    ];
}
```

| Parameter | Description                         |
|-----------|-------------------------------------|
| `$values` | The values that are provided on the product from `getProductConfig`. |

`$values` can come in handy if you want to show/hide certain fields based on other fields.

Read [this](configuration.md) to learn more about the available input fields and options.

## `getCheckoutConfig`

Shown to the user when they are checking out.

```php
use App\Models\Product;

public function getCheckoutConfig(Product $product, $values = [], $settings = [])
{
    return [
        [
            'name' => 'location',
            'label' => 'Location',
            'type' => 'select',
            'required' => true,
            'options' => [
                '1' => 'Location 1',
                '2' => 'Location 2',
            ],
        ]
    ];
}
```

| Parameter | Description                         |
|-----------|-------------------------------------|
| `Product $product` | The product that is being purchased. |
| `$values` | The values that are provided on the product from `getCheckoutConfig`. |
| `$settings` | The settings that are provided on the product from `getProductConfig`. |

`$values` can come in handy if you want to show/hide certain fields based on other fields.

Read [this](configuration.md) to learn more about the available input fields and options.

## `createServer`, `suspendServer`, `unsuspendServer`, `terminateServer`, `upgradeServer`

These hooks are used to create, suspend, unsuspend, terminate and upgrade the server.

| Parameter | Description                         |
|---------------|-------------------------------------|
| `Service $service` | The service that is being created, suspended, unsuspended or terminated. |
| `$settings` | The settings that are provided on the product from `getProductConfig`. |
| `$properties` | Custom properties created by the admin and values coming from `getCheckoutConfig`. <br>Its recommended to `array_merge($settings, $properties)` before using them. <br> This makes sure that any variable that the admin wants to override is properly set. |

```php
use App\Models\Service;

/**
 * Create a server for the service.
 * 
 * @param Service $service The service that is being created.
 * @param array $settings The settings that are provided on the product from `getProductConfig`.
 * @param array $properties Custom properties created by the admin and values coming from `getCheckoutConfig`.
 */
public function createServer(Service $service, $settings, $properties)
{
    // Create the server
}
```

## `getActions`

This hook is used to add actions to the service show page.

It supports texts, views, and buttons.

```php
public function getActions(Service $service, $settings, $properties)
{
    return [
        [
            'text' => properties['username'],
            'label' => 'Panel Username',
            'type' => 'text',
        ]
        [
            'name' => 'control_panel',
            'label' => 'Go to control panel',
            'url' => 'https://panel.paymenter.org',
            'type' => 'button',
        ],
        [
            'name' => 'console',
            'label' => 'Go to console',
            'type' => 'view',
        ],
    ];
}
```

Having a time sensistive url? Then you can use the function argument to generate the url.

```php
public function getActions(Service $service, $settings, $properties)
{
    return [
        [
            'name' => 'control_panel',
            'label' => 'Go to control panel',
            'function' => 'getControlPanelUrl',
            'type' => 'button',
        ],
        [
            'name' => 'console',
            'label' => 'Go to console',
            'type' => 'view',
            'function' => 'getView', // If this function is not provided, we will use the function `getView` to render the view.
        ],
    ];
}

public function getControlPanelUrl(Service $service)
{
    return 'https://panel.paymenter.org/' . $service->id;
}

public function getView(Service $service, $settings, $properties, $view)
{
    return view('extension::' . $view, ['service' => $service]);
}
```
