<script lang="ts">
  import type { enctype, method } from "./types/global.ts";
  import type { popovertargetaction, btnType } from "./types/button.ts";
  import type { InputType } from "./types/input.ts";

  type autoComplete = "on" | "off";

  interface FormConfig {
    inputs: InputProps[];
    buttons: ButtonProps[];
  }

  interface InputProps {
    label?: string;
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
    label?: string;
    id?: string;
    name?: string;
    type?: btnType;
    form?: string;
    formaction?: string;
    formenctype?: enctype;
    formmethod?: method;
    formnovalidate?: boolean;
    disabled?: boolean;
    popovertarget?: string;
    popovertargetaction?: popovertargetaction;
    value?: string;
    ariaLabel?: string;
    classes?: string;
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
    {#each buttons as button}
      <Button 
        id={button.id}
        name={button.name}
        type={button.type}
        classes={button.classes}
        disabled={button.disabled}
        form={button.form}
        formaction={button.formaction}
        formenctype={button.formenctype}
        formmethod={button.formmethod}
        formnovalidate={button.formnovalidate}
        popovertarget={button.popovertarget}
        popovertargetaction={button.popovertargetaction}
        value={button.value}
        ariaLabel={button.ariaLabel}
      >
        {button.label}
      </Button>
    {/each}
  </div>
</form>

