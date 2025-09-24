# Creating SSL Certificates

Paymenter's official guide to generating SSL certificates. An SSL certificate secures your site, displaying the padlock icon and "Secure" label in browsers.

## 1. Installing Certbot

First, we need to install Certbot.

::: code-group

```bash [Nginx]
sudo apt install -y python3-certbot-nginx
```

```bash [Apache]
sudo apt install -y python3-certbot-apache
```

```bash [Other]
sudo apt install -y certbot
```

:::

## 2. Creating the Certificate

Using Certbot, we will create the certificate.

> [!IMPORTANT]
> Make sure you are not running anything on port 80 — Certbot will not work if anything is using it. You can check with:
>
> ```bash
> sudo lsof -i :80
> ```

::: code-group

```bash [Nginx]
sudo systemctl stop nginx
certbot certonly --nginx -d example.com
```

```bash [Apache]
sudo systemctl stop apache2
certbot certonly --apache -d example.com
```

```bash [Other]
certbot certonly --standalone -d example.com
```

:::

> [!IMPORTANT]
> Replace `example.com` with your actual domain name.

## Renewing Your SSL Certificate

Your SSL certificates are now active, but they **expire automatically** and need to be renewed regularly. You can renew them manually by running:

```bash
sudo certbot renew
```

Or, you can automate this using a **cron job**, which is the recommended approach.

Run the following command to open the cronjob file:

```bash
crontab -e
```

Paste the following line at the bottom of the file. This example will run the renewal process every day at **11:00 PM**:

```bash
0 23 * * * certbot renew --quiet --deploy-hook 'systemctl restart nginx'
```

> [!IMPORTANT]
> Make sure to replace `"nginx"` with the name of your webserver (e.g., `apache2` or another if you're using something else).

