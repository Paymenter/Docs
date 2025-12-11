---
title: Migrate Paymenter
description: Guide to migrate Paymenter to a new server or environment
---
# Migrate Paymenter

Migrating Paymenter to a new server or environment involves several steps to ensure that all data and configurations are transferred correctly. Follow the steps below to perform a successful migration.

## Install Paymenter on the new server

Follow the [Installation Guide](../installation/install) to set up a fresh instance of Paymenter on the new server.

Make sure to skip the "Setting up the database" step, as you will be migrating the existing database.

## Prepare the database for migration

On the old server, create a backup of your Paymenter database. You can use the following command to create a dump of your database:

```bash
mariadb-dump -u your_db_user -p your_db_name > paymenter_backup.sql
```

Replace `your_db_user` and `your_db_name` with your actual database username and name.

## Transfer database backup and files

Transfer the following files:
- The `storage` directory, but exclude `storage/logs` and `storage/framework` (these will be recreated automatically).
- The `paymenter_backup.sql` file created in the previous step.
- The `.env` file from the old server to the new server. (Make sure to review and update any environment-specific settings in the `.env` file as needed.)



If you are using any custom extensions or themes, make sure to transfer the `extensions` and `themes` directories as well.

## Restore the database on the new server

On the new server, restore the database using the backup file you transferred. Use the following command:

```bash
mariadb -u your_db_user -p your_db_name < paymenter_backup.sql
```

Replace `your_db_user` and `your_db_name` with the database username and name you set up during the installation on the new server.

## Finalize the migration

After restoring the database, ensure that the `.env` file on the new server has the correct database credentials and any other necessary configurations.
Run the following commands to clear caches and optimize the application:

```bash
php artisan optimize:clear
php artisan cache:clear
```

Finally, verify that everything is working correctly by accessing your Paymenter installation on the new server.
