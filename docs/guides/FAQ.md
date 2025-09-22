# FAQ

::: details CSS assets are not loading
This is often related to a wrong app URL in the database. To fix this, run the following command:

```bash
php artisan app:settings:change app_url
```

:::

::: details I changed my theme, and now Paymenter is throwing an error.

This can happen for a few reasons. The most common is the installation guide was followed incorrectly.
To revert back to the default theme, run the following command:

```bash
php artisan app:settings:change theme
```

:::

::: details How to setup a proxy (e.g. Cloudflare, etc)

Navigate to **Admin → Settings → Security**. Here, you can fill in a single IP address, or a subnet.

:::

::: details I changed my CAPTCHA settings, and now I can not log in
You can disable CAPTCHA (it is not recommended to keep this off) by running the following command:

```bash
cd /var/www/paymenter && php artisan app:settings:change captcha disabled
```

:::

::: details I forgot my password, how can I reset it?

Normally, you can reset your password by clicking the "Forgot Password" link on the login page. However administrators can ONLY reset their password via the command line.

You can reset your password by running the following command:

```bash
php artisan app:user:password-reset <email>
```

:::