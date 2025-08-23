# Plesk

## Configure Paymenter

Create a new server in the Paymenter admin panel and select Plesk as the server type. Fill in the following fields:
- Hostname: The hostname of your Plesk server (e.g. `plesk.example.com:8443`)
- Username: The username of the Plesk main admin account 
- Password: The password of the Plesk main admin account

Due to API limitations, the Plesk Extension can only be used with root administrator data! [Here is an official explanation from Plesk](https://support.plesk.com/hc/en-us/articles/12377012952215-Unable-to-run-API-request-under-additional-administrator-account-Can-not-find-client-by-login)

![image](/assets/images/extensions/plesk/server_settings.png)

Press `Test Connection` to see if the connection is working.

## Configuring the product
Select the Plesk server you created in the previous step and type in the correct package.

![image](/assets/images/extensions/plesk/product.png)

### Sending the credentials via email

You can send the username and password to the customer via email. Fill in the email template in the product settings.

Here is a example of a email template:

```blade
Your domain {{ $domain }} is ready.
@isset($password)
- Username: {{ $username }}
- Password: {{ $password }}
@endisset
```
