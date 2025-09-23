# Config Options

Config options are a powerful feature which allow your customer to customise their product. You can create config options for any product.

For example, you can create a config option for a Minecraft server where the customer can choose between different server types such as Paper, Spigot, or Vanilla.

## Types

There are several types of config options you can create:

| Type        | Description                                                                                     | Supports Pricing |
|-------------|-------------------------------------------------------------------------------------------------|------------------|
| Select      | A dropdown menu where the customer can select one option from a list of options.               | Yes              | 
| Radio       | A list of options where the customer can select one option.                                    | Yes              |
| Checkbox    | A list of options where the customer can select multiple options.                              | Yes              |
| Text        | A text input where the customer can enter a value.                                             | No               |
| Number      | A number input where the customer can enter a number.                                          | No               |
| Textarea    | A textarea input where the customer can enter a longer value.                                  | No               | 

## Create the Config Option

First, we need to create a category for the configuration and select the products we want to offer the choices upon checkout. We do this by filling in the following form:

![Config Options Overview](/assets/images/guides/config-options/configurable-options-overview.png)

It is important to set the `Name` to what you want to be displayed to your customers. In the example, we have chosen for `Server Type`

Now, we need to provide a `Environment Variable` that we want to change. In the example, we have chosen `egg_id`

## Making Inputs

Now we need to create the inputs for the config option. Click on `Options`.
In the example, we want an option for Paper. Click on `Add Option` and fill in the form.
The `Name` variable is once again what is shown to your customer upon reaching the config options window!
The `Environment Variable` is used to overwrite server setting variables, in this case, the egg ID.

![Config Options Config](/assets/images/guides/config-options/configurable-options-config.png)

## Updating Pricing

In case we want to add an additional charge for the config option, you can click on `pricing` to extend the window.
Here you can set a `Name`, which is shown to your customer. Examples of this could be: `Free`, `Monthly`, `Yearly`
In the same window, you can choose between a several options, (e.g `Free`, `Recurring` and `One Time`.)
When selecting `Recurring`, multiple variables pop such as "`Time Interval`" appear. This is the amount of `Days`, `Weeks`, `Months` or `Years` that should go by before charging the user again, which is chosen in the `Billing Period` box.
