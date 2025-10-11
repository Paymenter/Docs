# Creating a Theme

Learn how to create custom themes for Paymenter to match your brand and design preferences.

## Quick Start

### 1a. Create a New Theme (Recommended)

The easiest way to start is by using the built-in command:

```bash
php artisan app:theme:create
```

This command will:

- Copy the default theme as a starting point
- Set up the correct folder structure
- Update the `vite.config.js` file
- Update the `theme.php` configuration file with your theme name and author

### 1b. Alternative: Manual Setup

You can also create a theme manually by copying the `themes/default` folder and renaming it to your theme name.

You will need to update the build directory in `vite.config.js`.

### 3. Build Assets

You'll need to build your theme assets using Vite.

[Building Assets](assets.md)

## File Structure

All theme files are located in the `themes/` directory:

```bash
themes/
├── your-theme/
│   ├── views/           # Blade templates
│   ├── resources/       # CSS, JS, and assets
│   ├── vite.config.js   # Vite configuration
│   └── theme.php        # Theme configuration
```

For a complete example, see the [default theme structure](https://github.com/Paymenter/Paymenter/tree/master/themes/default).

## Customizing Extension Views

You can override extension views by creating a `vendor/` folder in your theme's views directory:

**Format:** `vendor/<extension-type>/<extension-name>/<view-name>.blade.php`

**Example:** To customize the Stripe payment modal (`gateways.stripe::pay`):

```bash
themes/your-theme/views/vendor/gateways/stripe/pay.blade.php
```

## Adding admin configuration

You can add a configuration page for your theme in the admin panel by editing the `theme.php` file in your theme folder.

Example:

```php
return [
    'name' => 'Your Theme Name',
    'author' => 'Your Name',
    'url' => 'https://yourwebsite.com',

    'config' => [
        [
            'name' => 'primary_color',
            'label' => 'Primary Color',
            'type' => 'color',
            'default' => '#3490dc',
            'description' => 'The primary color used throughout the theme.',
            'required' => true,
        ],
        [
            'name' => 'custom_css',
            'label' => 'Custom CSS',
            'type' => 'textarea',
            'default' => '',
            'description' => 'Add custom CSS to override default styles.',
            'required' => false,
        ],
    ],
];
```

You can then access the configuration in your theme using:

```php
$primaryColor = theme('primary_color', '#3490dc');
```

This will return the value set in the admin panel or the default value if none is set.

Read [this](../extensions/configuration.md) to learn more about the available input fields and options.
