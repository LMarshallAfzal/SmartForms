# Validation
This section outlines the available validation options in Smartform and how to implement them.

## Available Validation Rules

Smartform provides a variety of built-in validation options in Smartform and how to implement them.

### Min/Max Length

* **Description:** Ensures the input value falls within a specified character range.

* **Example:**

  ```javascript
  validationRules: {
    min: 8, // Minimum length
    max: 25, // Maximum length
  }
  ```

### Email Validity

* **Description:** Checks if the input value is a valid email address.

* **Example:**

  ```javascript
  validationRules: {
    email: true,
  }
  ```

### Character Sets

* **Description:** Defines rules for the types of characters allowed in the input.

* **Example:**

  ```javascript
  validationRules: {
    characterSets: [
      { chars: 'A-Z', min: 1 }, // At least one uppercase letter
      { chars: '0-9', min: 1 }, // At least one digit
      { chars: '!@#$%^&*', min: 1 }, // At least one special character
      { chars: '-', exc: true }, // Exclude hyphens
    ],
  }
  ```

### Regex Patterns

* **Description:** Allows for custom validation using regular expressions.

* **Example:**

  ```javascript
  validationRules: {
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/, 
    // (This regex example enforces a strong password with specific criteria)
  }
  ```
  