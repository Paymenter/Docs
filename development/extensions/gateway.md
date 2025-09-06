# Gateway extensions

The gateway extensions have a few hooks that you can use to process payments.

Gateways still support everything documented in the [extensions overview](index.md).

## `canUseGateway`

This hook is used to check if the gateway can be used. This can be used to check if the gateway is enabled, if the user has permission to use the gateway etc.

```php
public function canUseGateway($total, $currency, $type, $items = []){
    if ($currency == 'EUR') return false;
    if ($total > 1000) return false;

    return true;
}
```
`$total` is the total amount that needs to be paid.

`$currency` is the currency of the payment.

`$type` is either `invoice` or `cart`.

It is recommended to use above variables as below variable does not have a stable value.

`$items` is either a list of `InvoiceItem` or a array with a `Product`, `Price` and `Quantity`.

## `pay`

This hook is used to process the payment.

```php
public function pay(Invoice $invoice, $total)
{
    // Process the payment
}
```

`$invoice` is the invoice that is being paid.

`$total` is the total amount that needs to be paid. (This can be the total amount of the invoice or a part of the total amount)

