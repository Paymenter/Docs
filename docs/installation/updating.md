---
title: "Updating Paymenter"
description: "Update your Paymenter installation to the latest version"
---
# How to update

Before you start the upgrade process make sure that your extensions and themes are compatible with the new version. Check the extension/theme documentation or the marketplace for compatibility information.


## Automatic update

Run the following command in your terminal:

```bash
cd /var/www/paymenter
php artisan app:upgrade
```

## Manual update

Cd to your paymenter directory and run the following commands:

### Put the application in maintenance mode

```bash
php artisan down
```

### Download the latest version

```bash
curl -L https://github.com/paymenter/paymenter/releases/latest/download/paymenter.tar.gz | tar -xz
```

### Update extensions

Sometimes extensions also need to be updated, now is the time to check if any of your installed extensions have updates available.

### Set the correct permissions

```bash
chmod -R 755 storage/* bootstrap/cache/
```

### Migrate the database

```bash
php artisan migrate --force --seed
```

### Clear config and view

```bash
php artisan optimize:clear
```

### Set webserver permissions

```bash
chown -R www-data:www-data /var/www/paymenter/*
```

### Remove the maintenance mode

```bash
php artisan up
```

Update is now complete!


## Docker

If you are using the docker version of Paymenter, use the following commands to update:

::: warning
The `docker compose down -v` command clears non-persistent volumes (including built themes and extensions), which is necessary for the update. Themes and extensions source files are stored in persistent volumes and will be retained. This assumes you haven't made significant modifications to the default docker-compose file. If you have customized your setup extensively, please back up your data before proceeding with the update.
:::

```bash
docker compose down -v
docker compose pull
docker compose up -d --force-recreate
```

::: info
After the update completes, you must build the default theme and switch to it, as updates may break other themes.
:::

Run the following command to switch to the default theme:
```bash
docker compose exec paymenter php artisan app:settings:change theme default
``` 
