---
title: "Gateway Extensions"
description: "Creating gateway extensions for Paymenter"
---
# Gateway extensions

The gateway extensions have a few hooks that you can use to process payments.

Gateways still support everything documented in the [extensions overview](index.md).

## `canUseGateway`

This hook is used to check if the gateway can be used. This can be used to check if the gateway is enabled, if the user has permission to use the gateway etc.

```php
public function canUseGateway($total, $currency, $type, $items = [])
{
    if ($currency == 'EUR') return false;
    if ($total > 1000) return false;

    return true;
}
```

| Parameter | Description                                                                                         |
|-----------|-----------------------------------------------------------------------------------------------------|
| `$total`  | The total amount that needs to be paid.                                                            |
| `$currency` | The currency of the payment.                                                                       |
| `$type`   | Either `invoice` or `cart`.                                                                         |
| `$items`  | An array of items that are being paid for. This can be either a list of `InvoiceItem` or a array with a `Product`, `Price` and `Quantity`. |

`$total`, `$currency` and `$type` are always set.

::: tip
Prefer using $total, $currency, and $type for reliable checks. $items may not always have a stable value.
:::

You should return either `true` or `false`.

## `pay`

This hook is used to process the payment.

```php
public function pay(Invoice $invoice, $total)
{
    // Process the payment and return either a url OR a view
    return view('my-gateway::pay', ['invoice' => $invoice, 'total' => $total]);
}
```

| Parameter | Description                         |
|-----------|-------------------------------------|
| `$invoice` | The invoice that is being paid.    |
| `$total`  | The total amount that needs to be paid. (This can be the total amount of the invoice or a part of the total amount) |

You should return either a URL or a view that will be displayed to the user.