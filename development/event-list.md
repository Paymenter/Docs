---
title: "Event List"
description: "All available event hooks in Paymenter"
---
# Event hooks

Example of how to use event hooks in your application.

```php
public function boot()
{
    // Register the event hooks
    Event::listen(\App\Events\User\Created::class, function (\App\Events\User\Created $event) {
        // Handle the event
    });
}
```

## Model events


- `Auth`
    - `Login` (triggers when a user logs in)


For the following models, you can listen to the `Created`, `Updated`, and `Deleted` events.

- `Cart`
- `CartItem`
- `Invoice`
- `InvoiceItem`
- `Order`
- `Properties`
- `Property`
- `Service`
- `ServiceCancellation`
- `ServiceUpgrade`
- `Setting`
- `Ticket`
- `TicketMessage`
- `User`

Append the `\App\Events\` to the events, for example:

```php
Event::listen(\App\Events\Invoice\Created::class, function (\App\Events\Invoice\Created $event) {
    // Handle the event
});
```

If you need more events you can create a issue on GitHub or create a pull request to add them.


## `navigation`

- `navigation`
- `navigation.dashboard` (only for authenticated users)
- `navigation.account-dropdown` (only for authenticated users)

Both hooks accept a array of navigation items like this:

```php
return [
    'name' => 'Announcements',
    'url' => route('announcements.index'), // or a external url
    'priority' => 10,
];
```

## `pages`

- `pages.home`

Hooks to include content on the home page.

```php
    Event::listen('pages.home', function () {
        return [
            'view' => view('example::home'),
        ];
    });
```

## `head`, `body` and `footer`

Those hooks are added right before the closing `</head>`, `<body>` and `</body>` tags respectively.

```php
    Event::listen('head', function () {
        return [
            'view' => view('example::head'),
        ];
    });
```
