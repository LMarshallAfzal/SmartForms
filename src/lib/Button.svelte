<script lang="ts">
  import type { enctype, method } from "./types/global.ts";
  import type { popovertargetaction, btnType } from "./types/button.ts";

  export let type: btnType = "button";
  export let classes: string = "";
  export let disabled: boolean = false;
  export let form: string = "";
  export let formaction: string = "";
  export let formenctype: enctype = "application/x-www-form-urlencoded";
  export let formmethod: method = "post";
  export let formnovalidate = false;
  export let popovertarget: string = "";
  export let popovertargetaction: popovertargetaction = "hide";
  export let id: string = ""
  export let name: string = ""; 
  export let value: string = "";
  export let ariaLabel: string = "";

  const buttonClasses: string = `${classes}`;
</script>

<button 
  {type} 
  class={buttonClasses}
  form={form}
  {formaction}
  {formenctype}
  {formmethod} 
  {disabled} 
  {formnovalidate}
  {popovertarget}
  {popovertargetaction}
  {id}
  {name}
  {value}
  aria-label={ariaLabel}
  on:click
>
  <slot>Default button label</slot>
</button>