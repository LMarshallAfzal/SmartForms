<script lang="ts">
  import Input from "./Input.svelte";
  import Button from "./Button.svelte";

  import type { enctype, method } from "./types/global.ts";
  import type { FormConfig } from "./types/form.ts";

  type autoComplete = "on" | "off";

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

