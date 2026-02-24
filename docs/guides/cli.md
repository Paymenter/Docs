---
title: CLI
description: Command Line Interface commands for Paymenter
---
# CLI

All commands should be ran from the root of your Paymenter installation. (normally `/var/www/paymenter`)

### Run automated tasks <Badge type="warning" text="Automated" />

This should not be run manually, instead set up a cron job to run this every minute.

```bash
php artisan app:cron-job
```

### Create a new extension

```bash
php artisan app:extension:create
```

### Disable an extension

```bash
php artisan app:extension:disable <extension-name>
```

### Fetch ticket emails using IMAP <Badge type="warning" text="Automated" />

```bash 
php artisan app:fetch-emails
```

### Setup initial application

```bash
php artisan app:init
```

### Post application logs <Badge type="tip" text="Debug" />

```bash
php artisan app:logs
```

### Change a setting

```bash
php artisan app:settings:change <setting> [value]
```

### Telemetry <Badge type="warning" text="Automated" />

Used to post anonymous telemetry data. This is run automatically once a day via the cron job. 

```bash
php artisan app:telemetry {--simulate}
```

### Create a new theme

```bash
php artisan app:theme:create
```

### Upgrade the website to the latest version

```bash
php artisan app:upgrade
```

### Create a new user

```bash
php artisan app:user:create
```

### Reset a user's password

```bash
php artisan app:user:password-reset <email>
```
