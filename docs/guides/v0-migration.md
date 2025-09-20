# Migration from Version 0.x to 1.0

This guide will help you migrate from Paymenter v0.x to v1.0.

::: warning
Always back up your data before proceeding. This migrator is not guaranteed to work without issues!
:::

## 1. Backup Your Data

Start by backing up your database:

```bash
mysqldump -u root -p paymenter > paymenter.sql
```

Next, copy the value of `APP_KEY` from your `.env` file and store it somewhere safe — you’ll need it later.

Backup the current v0 installation folder in case you need to roll back:

```bash
cp -r /var/www/paymenter /var/www/paymenter-v0
```

Now, remove the old installation folder to prepare for the new version:

```bash
rm -rf /var/www/paymenter
```

:::info tip
Adjust the paths above if your Paymenter installation is located elsewhere.
:::

## 2. Install the New Version

::: warning
Paymenter v1.0 requires a newer PHP version. If you're running PHP 8.2, remove it first:

```bash
sudo apt remove php8.2*
```

:::

Follow the [Installation Guide](/docs/installation/install.md) to install the latest version.

Skip the "Setting up database" section and instead run:

```bash
php artisan migrate:fresh --seed
php artisan db:seed --class=CustomPropertySeeder
php artisan app:init
```

Then update your new `.env` file with the `APP_KEY` you backed up earlier.

## 3. Create a Temporary Database

You’ll need a temporary database to import your old data:

```bash
mysql -u root -p
```

Inside the MySQL shell:

```sql
CREATE DATABASE paymenter_temp;
GRANT ALL PRIVILEGES ON paymenter_temp.* TO 'paymenter'@'127.0.0.1' WITH GRANT OPTION;
```

Now import your backup into the temporary database:

```bash
mysql -u root -p paymenter_temp < paymenter.sql
```

## 4. Migrate the Data

Run the migration command:

```bash
php artisan app:migrate-0.x paymenter_temp
```

This command will prompt you for the database user’s password.

> It uses your `.env` file to read the host, port, and username automatically.  
> Want to set them manually? Use this format:
>
> ```bash
> php artisan app:migrate-0.x paymenter_temp username 127.0.0.1 3306
> ```

## 5. Cleanup

Once the migration is complete, you can remove the temporary database:

```bash
mysql -u root -p
```

Inside the MySQL shell:

```sql
DROP DATABASE paymenter_temp;
```

Now remove the backup of your old installation:

```bash
rm -rf /var/www/paymenter-v0
```

## 6. You're Done!

Your Paymenter instance has successfully migrated from v0.x to v1.0.  
If you encounter any issues, feel free to [open an issue on GitHub](https://github.com/Paymenter/Paymenter/issues).
