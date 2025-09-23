# Products

Products are the core of Paymenter. They represent the services you offer to your customers. This can be anything from web hosting, game servers, or even digital products like software licenses.

## Creating a Product

To create a product, navigate to **Admin ➜ Products ➜ Products** and click on the "Create Product" button. You will be presented with a form where you can fill in the details of your product.

### General

| Field            | Description                                                                                         |
|------------------|-----------------------------------------------------------------------------------------------------|
| Name             | The name of the product. This is what your customers will see when they are purchasing the product. |
| Slug             | A unique identifier for the product. This is used in URLs and should be lowercase with hyphens.     |
| Stock            | The amount of stock available for the product. Leave empty to disable stock management.             |
| Per User Limit   | The maximum amount of this product a single user can purchase. Leave empty for no limit.            |
| Allow Quantity   | Enable this to allow customers to purchase multiple quantities of the product in a single order. <br /> No = 1 quantity per order<br /> Separated = multiple items in the same orders<br /> Combined = one item with a quantity in the same order |
| Email Template   | Text to add to the email sent to the customer after purchasing the product. Usefull to display initial login details or other important information. (most extensions show an example on their page) |
| Hide Product     | Enable this to hide the product from the store. Useful to disable a product without deleting it.         |
| Description      | A brief description of the product. This is also shown to your customers.                           |
| Image            | An image to represent the product. This is shown to your customers on the product page.            |
| Category        | The category the product belongs to. This is used to group products together in the store.         |


### Pricing

Pricing tab allows you to set up different pricing options for your product. You can create multiple pricing options for a single product, such as monthly, yearly, or one-time payments.

| Field            | Description                                                                                         |
|------------------|-----------------------------------------------------------------------------------------------------|
| Name             | The name of the plan. This is what your customers will see when they are purchasing the product.    |
| Type             | The type of plan. This can be Free, One Time, or Recurring.                                         |
| Time Interval   | The interval for recurring plans. This can be Days, Weeks, Months, or Years.                        |
| Billing Period  | The number of intervals for the plan. For example, if you select Months and enter 3, the plan will be billed every 3 months. |

Prices are set in the next section, where you can set different prices for different currencies.

| Field            | Description                                                                                         |
|------------------|-----------------------------------------------------------------------------------------------------|
| Currency         | The currency for the price. This should match the currencies you have set up in Paymenter.         |
| Amount           | The amount to charge for the product in the selected currency.                                      |
| Setup Fee        | An optional one-time setup fee to charge when the product is purchased.                            |

### Upgrades

The Upgrades tab allows you to set up available upgrades or downgrades for your product. This is useful if you want to offer different tiers of a product, such as Basic, Pro, and Premium.

### Server

Server tab shows all available server extensions. You can select the server you want to use for this product. Once you select a server, additional fields will appear that are specific to the selected server.


