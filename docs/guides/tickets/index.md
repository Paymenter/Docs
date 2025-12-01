---
title: Tickets
description: Manage and configure tickets in Paymenter
---

# Tickets
Tickets are used to manage customer support requests in Paymenter. They allow you to communicate with your customers and resolve their issues efficiently.

## Ticket Settings
To configure ticket settings, navigate to **Admin ➜ Settings ➜ Tickets**. Here you can adjust various settings related to ticket management.

| Setting                 | Description                                                                                         |
|-------------------------|-----------------------------------------------------------------------------------------------------|
| Disable Tickets        | Enable this to disable the ticketing system entirely.                                                |
| Departments            | Manage ticket departments to categorize and organize tickets.                                        |
| Disallow clients from closing tickets | Enable this to prevent clients from closing their own tickets.                                        |

### Email piping

Paymenter supports email piping to automatically add replies to tickets via email. To set this up configure the following settings:
| Setting                 | Description                                                                                         |
|-------------------------|-----------------------------------------------------------------------------------------------------|
| Email host              | The IMAP server address for your email provider.                                                     |
| Email port              | The port to connect to the IMAP server.                                                             |
| Email address           | The email address to fetch ticket replies from.                                                      |
| Email password          | The password for the email address.                                                                  |

Now Paymenter will fetch emails from the specified address and add them as replies to the corresponding tickets.

