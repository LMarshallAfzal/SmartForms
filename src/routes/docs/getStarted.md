# Get Started with Smartform

This guide will walk you through installation and basic usage of Smartform to create forms in your applications.

## Installation

Install Smartform as a development dependency using npm:

```bash
npm install -D smartform
```

## Creating a form

This example demonstrates creating a form with fields for name, email, and password.

**1. Form Configuration:**

Firstly import `Smartform` and define variables for the form fields. Then, create a configuration object that defineds the form's structure.

```js
import { SmartForm } from "smartform";

export let form;

let name = form.name;
let email = form.email;
let password = form.password;

const config = {
    inputs: [
        {
            id: "name-input",
            name: "name",
            label: "Name",
            type: "text",
            required: true,
            placeholder: "John Doe",
            value: name,
        },
        {
            id: "email-input",
            name: "email-input",
            label: "Email",
            type: "email",
            required: true,
            placeholder: "Email",
            value: email,
        },
        {
            id: "password-input",
            name: "password-input",
            label: "Password",
            type: "password",
            required: true,
            placeholder: "Password",
            value: password,
        },
    ],
    buttons: [
        {
            id: "submit-btn",
            name: "submit-btn",
            label: "Save",
            type: "submit",
        },
    ],
};
```

**2. Rendering the Form:**

Use the `SmartForm` component and pass the config object as a prop to render the form:

```html
<SmartForm config="{config}" />
```
