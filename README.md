# SmartForms

<div class="flex justify-center">
    <img alt="Logo" src="" />
</div>

by [@LMarshallAfzal](https/github.com/lmarshallafzal)

SuperForm is powerful intuitive form library for building complex and customisable forms within your svelte 
applications. Easily create forms with data validation, input masking and conditional logic

SuperForm simplifies form development, saying you time and effort while ensuring a consistent and user-friendly
experience for your application's users.

It makes building complex forms in Svelte a breeze. Its intuitive API and reusable components allow you to create 
beautiful and functional forms with ease.

<!-- TODO: Tech stack icons go here for technologies used -->

## Features

- Generate Dynamic forms for svelte.
- Apply styles and layout to the generated forms.
- Implement complex input validation seamlessly.

## Installation

Install SmartForm as a development dependency using npm:

```bash
npm install -D smartform
```

## Documentation

This svelte library provides a dynamic form generation system that allows for flexible and customisable form 
creation.

### Creating a form

This example demonstrates creating a form with fields for name, email, and password

**1. Form Configuration:**

Firstly import `SmartForm` and define variables for the form fields. Then, create a configuration object that defines
the form's structure.

```js
import { SmartForm } from "smartform";

export let form;

let name = form.name;
let email = form.email;
let password = form.password;

const config = {
    inputs: [
        {
            id: "name-input"
            name: "name",
            label: "Name",
            type: "text",
            required: true,
            placeholder: "John Doe"
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

**2. Rendering the form:**

Use the `SmartForm` component and pass the config object as a prop to render the form:

```html
<SmartForm config="{config}" />
```

### Validation

This section outlines the available validaton options in SmartForm and how to implement them.

#### Available validation rules

Smartform provides a variety of buit-in validation options

 - **Min/Max Length:** Ensures the input value falls within a specified character range.
    ```js
    validationRules: {
        min 8,      // Minimum length
        max 25,     // Maximum length
    }
    ```

 - **Email Validity:** Checks if the input value is a valid email address.
    ```js
    validationRules: {
        email: true,
    }
    ```

 - **Character Sets:** Defines rules for the types of characters allowed in the input.
    ```js
    validationRules: {
        characterSets: [
            { chars: 'A-Z', min: 1 },       // At least one uppercase letter
            { chars: '0-9', min: 1 },       // At lease one number
            { chars: '!@#%^&*', min 1 },    // At least one special character
            { chars: '-', exc: true },      // Exclude hyphens
        ],
    }
    ```

 - **Regex Patterns:** Allows for custom validation using regular expressions.
    ```js
    validationRules: {
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/, 
            // This regex examples enforces a strong password with specific criteria
    }
    ```

## Usage

TBD
<!-- TODO: Write usage -->

## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```
