<script lang="ts">
  import type { enctype, method } from "./types/global.ts";
  import type { InputType } from "./types/input.ts";

  type autoComplete = "on" | "off";

  interface FormConfig {
    inputs: InputProps[];
    buttons: ButtonProps[];
  }

  interface InputProps {
    id?: string;
    name?: string;
    type?: InputType
    placeholder?: string;
    form?: string;
    formaction?: string;
    formmethod?: method;
    formenctype?: enctype;
    formnovalidate?: boolean;
    required?: boolean;
    value?: string;
    classes?: string;
  }

  interface ButtonProps {
    // Define the properties for buttons
  }

  import Input from "./Input.svelte";
  import Button from "./Button.svelte";

  export let action: string = "";
  export let autocomplete: autoComplete = "off";
  export let enctype: enctype = "application/x-www-form-urlencoded";
  export let method: method = "post";
  export let id: string = "";
  export let name: string = "";
  export let novalidate: boolean = false
  export let rel: string = "";
  export let target: string = "";

  export let config: FormConfig = {
    inputs: [],
    buttons: [],
  }

  const { inputs, buttons } = config;
</script>

<form 
  {autocomplete} 
  {novalidate}
  {name} 
  {id} 
  {enctype} 
  {method} 
  {action} 
  {rel}
  {target}
>
  {#each inputs as input}
    <div>
      <Input
        id={input.id}
        name={input.name}
        type={input.type}
        placeholder={input.placeholder}
        form={input.form}
        formaction={input.formaction}
        formmethod={input.formmethod}
        formenctype={input.formenctype}
        formnovalidate={input.formnovalidate}
        required={input.required}
        value={input.value}
        classes={input.classes}
      />
    </div>
  {/each}
  <div>
    <Button type="submit">Submit</Button>
  </div>
</form>

