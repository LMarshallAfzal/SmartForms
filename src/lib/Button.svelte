<script lang="ts">
  import type { enctype, method } from "$types/global";

  type btnType = "button" | "submit" | "reset";
  type popovertargetaction = "hide" | "show" | "toggle";

  export let type: btnType = "button";
  export let classes = "";
  export let disabled = false;
  export let form = "";
  export let formaction = "";
  export let formenctype: enctype = "application/x-www-form-urlencoded";
  export let formmethod: method = "post";
  export let formnovalidate = false;
  export let popovertarget = "";
  export let popovertargetaction: popovertargetaction = "hide";
  export let id = ""
  export let name = ""; 
  export let value = "";
  export let ariaLabel = "";

  const buttonClasses = `${classes}`;
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