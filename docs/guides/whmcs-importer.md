---
title: WHMCS Importer
description: Migrate from WHMCS to Paymenter
---
# WHMCS Importer

This guide will help you migrate from WHMCS to Paymenter.

This will import the following data from your WHMCS installation:

- Currencies
- Users (clients)
- Admins
- Categories
- Products
- Tickets
- Orders
- Services
- Service Cancellations
- Invoices
- Payments

::: warning
This will remove all existing data in your Paymenter installation! Make sure to back up your data before proceeding.
:::

## 1. Backup Your Data

Start by backing up your WHMCS database:

```bash
mysqldump -u root -p whmcs > whmcs.sql
```

## 2. Install Paymenter

Follow the [Installation Guide](/docs/installation/install.md) to install the latest version.

## 3. Create a Temporary Database

You’ll need a temporary database to import your old data:

```bash
mysql -u root -p
```

Inside the MySQL shell:

```sql
CREATE DATABASE whmcs_temp;
GRANT ALL PRIVILEGES ON whmcs_temp.* TO 'paymenter'@'127.0.0.1' WITH GRANT OPTION;
```

Now import your backup into the temporary database:

```bash
mysql -u root -p whmcs_temp < whmcs.sql
```

## 4. Migrate the Data

Run the migration command:

```bash
php artisan app:import-from-whmcs whmcs_temp
```

This command will prompt you for the database user’s password.

> It uses your `.env` file to read the host, port, and username automatically.  
> Want to set them manually? Use this format:
>
> ```bash
> php artisan app:import-from-whmcs whmcs_temp username 127.0.0.1 3306
> ```

## 5. Cleanup

Once the migration is complete, you can remove the temporary database:

```bash
mysql -u root -p
```

Inside the MySQL shell:

```sql
DROP DATABASE whmcs_temp;
```


## 6. You're Done

You've successfully migrated from WHMCS to Paymenter!

If you encounter any issues, feel free to [open an issue on GitHub](https://github.com/Paymenter/Paymenter/issues).
