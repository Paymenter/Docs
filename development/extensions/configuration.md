---
title: "Configuration Options"
description: "`getConfig` and their available fields for extensions"
---
# Configuration

Paymenter allows you to define configuration options for your extensions and themes using a simple array structure.

## Basic Example

```php
public function getConfig($values = [])
{
    return [
        [
            'name' => 'api_key',
            'label' => 'API Key',
            'type' => 'password',
            'description' => 'Your service API key',
            'required' => true,
        ],
        [
            'name' => 'environment',
            'label' => 'Environment',
            'type' => 'select',
            'options' => [
                'sandbox' => 'Sandbox',
                'production' => 'Production',
            ],
            'default' => 'sandbox',
        ]
    ];
}
```

## Field Options

### Required Fields

**`name`** - `string`  
The field identifier used as the key for storing values.

**`label`** - `string`  
Display name shown to users.

**`type`** - `string`  
Field type. <br>
Available options:
`text`, `textarea`, `markdown`, `password`, `email`, `number`, `select`, `tags`, `checkbox`, `color`, `file`, `placeholder`

> **Note:** Checkout configs only support: `select`, `radio`, `text`, `password`, `number`, `checkbox`

### Optional Fields

**`default`** - `string`  
Default value when field is empty.

**`description`** - `string`  
Help text displayed below the field.

**`required`** - `boolean`  
Whether the field must be filled out.

**`validation`** - `string|array`  
Laravel validation rules (e.g., `'url|required'` or `['url', 'required']`).

**`options`** - `array`  
Required for `select`, `radio`, and `tags` types.

Options for `select` fields:
```php
'options' => [
    'value1' => 'Display Name 1',
    'value2' => 'Display Name 2',
]
```

**`disabled`** - `boolean`  
Whether the field is read-only.

**`live`** - `boolean`  
Triggers real-time updates when field value changes.

## Advanced Example

```php
public function getConfig($values = [])
{
    return [
        [
            'name' => 'host',
            'label' => 'Server URL',
            'type' => 'text',
            'default' => 'https://api.example.com',
            'description' => 'The base URL for your API server',
            'required' => true,
            'validation' => 'url',
        ],
        [
            'name' => 'location',
            'label' => 'Server Location',
            'type' => 'select',
            'description' => 'Choose your preferred server location',
            'required' => true,
            'options' => [
                'us-east' => 'US East',
                'us-west' => 'US West',
                'eu-central' => 'EU Central',
            ],
            'live' => true,
        ],
        [
            'name' => 'debug_mode',
            'label' => 'Enable Debug Mode',
            'type' => 'checkbox',
            'description' => 'Enable detailed logging for troubleshooting',
            'default' => false,
        ]
    ];
}
```