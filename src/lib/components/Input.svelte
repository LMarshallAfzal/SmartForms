<script lang="ts">
  import ValidationError from "./ValidationError.svelte";

  import type { enctype } from "../types/global.ts";
  import type { inputType, ValidationRules } from "../types/input.ts";

  export let id: string = "";
  export let name: string = ""
  export let label: string = "";
  export let type: inputType = "text";
  export let placeholder: string = "";
  export let formaction: string = "";
  export let formenctype: enctype = "application/x-www-form-urlencoded";
  export let formnovalidate: boolean = false;
  export let required: boolean = false;
  export let value: string = "";
  export let classes: string = "";
  export let validationRules: ValidationRules = {};
  export let styles: string = "";

  const inputClasses: string = `${classes}`;

  let errors: string[] = [];
  
  function validate() {
    errors = [];
    
    if (validationRules.required && !value) {
      errors.push(`${label} is required`);
    }

    if (validationRules.min && value.length < validationRules.min) {
      errors.push(`Min length is ${validationRules.min}`);
    }

    if (validationRules.max && value.length > validationRules.max) {
      errors.push(`Max length is ${validationRules.max}`);
    }

    if (validationRules.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors.push("Invalid email address")
      }
    }

    if (validationRules.characterSets) {
      validationRules.characterSets?.forEach(rule => {
        if (rule.exc) {
          const excludeRegex = new RegExp(`[${rule.chars}]`, 'g');
          const matches = value.match(excludeRegex) || [];
          if (matches.length > 0) {
            errors.push(`Must not include any character(s) from: ${rule.chars}`);
          }
        } else {
          const characterSetRegex = new RegExp(`[${rule.chars}]`, 'g');
          const matches = value.match(characterSetRegex) || [];
          if (matches.length < (rule.min || 1)) {
            errors.push(`Must include at least ${rule.min || 1} character(s) from: ${rule.chars}`)
          }
        }
      })
    }

    if (validationRules.pattern) {
      const regex = validationRules.pattern;
      const patternString = regex.source;
      if (!regex.test(value)) {
        let patternErrors: string[] = [];

        // Check length
        const lengthMatch = regex.source.match(/\{(\d+)(?:,(\d+))?\}/);
        if (lengthMatch) {
          const minLength = parseInt(lengthMatch[1]);
          const maxLength = lengthMatch[2] ? parseInt(lengthMatch[2]) : undefined;

          if (value.length < minLength) {
            patternErrors.push(`Min length is ${minLength}`);
          }
          if (maxLength && value.length > maxLength) {
            patternErrors.push(`Min length is ${maxLength}`);
          }
        }

        // Check character sets
        const lowercaseMatch = value.match(/[a-z]/);
        const uppercaseMatch = value.match(/[A-Z]/);
        const digitMatch = value.match(/\d/);

        if (!lowercaseMatch) {
          patternErrors.push('Must include at least one lowercase letter');
        }
        if (!uppercaseMatch) {
          patternErrors.push('Must include at least one uppercase letter');
        }
        if (!digitMatch) {
          patternErrors.push('Must include at least one number');
        }

        // Extract symbols from the regex pattern
        const symbolsMatch = patternString.match(/(?!{\d+(?:,\d+)?}|\$\/|\?=\.|\[A-Z\])[^a-zA-Z\d\s]/g);
        if (symbolsMatch) {
          const symbols = Array.from(new Set(symbolsMatch)).join('');
          const symbolMatch = value.match(new RegExp(/[${symbols}]/));
          if (!symbolMatch) {
            patternErrors.push(`Must include at least one symbol from: ${symbols}`);
          }
        }

        // Check excluded characters
        const excludedCharsMatch = patternString.match(/\[(\^[^\]]+)\]/g);
        if (excludedCharsMatch) {
          const excludedChars = excludedCharsMatch[0].slice(2, -1);
          const excludedMatch = value.match(new RegExp(`[${excludedChars}]`));
          if (excludedMatch) {
            patternErrors.push(`Must not include any character(s) from: ${excludedChars}`);
          }
        }

        if (patternErrors.length > 0) {
          errors = [...patternErrors, ...errors];
        } else {
          errors.push('Invalid format');
        }
      }
    }
  }

  function handleBlur() {
    validate();
  }

  function handleInput() {
    validate();
  }
</script>

<div style={styles}>
  <label for={id}>{label}{required ? "*" : ""}</label>
  <input
    {id}
    {name}
    {...{type}}
    {placeholder}
    {formenctype}
    {formaction}
    {formnovalidate}
    {required}
    bind:value
    class={inputClasses}
    style={styles}
    on:blur={handleBlur}
    on:input={handleInput}
  />

  <ValidationError {errors}/>
</div>