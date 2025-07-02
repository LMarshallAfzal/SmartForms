<script lang="ts">
  import Input from "./fields/Input.svelte";
  import Combobox from "./fields/Combobox.svelte";
  import Button from "./Button.svelte";

  // import type { method } from "../types/global.ts";
  import type { FormConfig } from "../types/form.ts";

  type autoComplete = "on" | "off";

  export let action: string = "";
  export let autocomplete: autoComplete = "off";
  // export let method: method = "post";
  export let id: string = "";
  export let name: string = "";
  export let novalidate: boolean = false;
  export let rel: string = "";
  export let target: string = "";
  export let onSubmit = () => {};

  export let config: FormConfig = {
    inputs: [],
    buttons: [],
  };

  const { inputs, buttons } = config;
</script>

<form
  {autocomplete}
  {novalidate}
  {name}
  {id}
  {action}
  {rel}
  {target}
  on:submit|preventDefault={onSubmit}
>
  <div class="form-padding">
    {#each inputs as input}
      <div class="input-padding">
        {#if input.isCombobox}
          <Combobox
            id={input.id}
            label={input.label}
            name={input.name}
            placeholder={input.placeholder}
            formenctype={input.formenctype}
            formnovalidate={input.formnovalidate}
            required={input.required}
            value={input.value}
            classes={input.classes}
            styles={input.styles}
            options={input.options}
            disabled={input.disabled}
            readonly={input.readonly}
            autocomplete={input.autocomplete}
            list={input.list}
          />
        {:else}
          <Input
            id={input.id}
            label={input.label}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            formenctype={input.formenctype}
            formnovalidate={input.formnovalidate}
            required={input.required}
            value={input.value}
            classes={input.classes}
            styles={input.styles}
            validationRules={input.validationRules}
          />
        {/if}
      </div>
    {/each}
    <div>
      {#each buttons as button}
        <Button
          id={button.id}
          name={button.name}
          type={button.type}
          classes={button.classes}
          disabled={button.disabled}
          formnovalidate={button.formnovalidate}
          formenctype={button.formenctype}
          value={button.value}
          ariaLabel={button.ariaLabel}
          onClick={button.onClick}
        >
          {button.label}
        </Button>
      {/each}
    </div>
  </div>
</form>

<style>
  .input-padding {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .form-padding {
    padding-left: 5px;
    padding-right: 5px;
  }
</style>

