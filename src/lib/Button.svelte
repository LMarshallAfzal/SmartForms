<script lang="ts">
  export let type: "button" | "submit" | "reset" = "button";
  export let classes = "";
  export let disabled = false;
  export let form = "";
  export let formaction = "";
  export let formenctype: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain" = "application/x-www-form-urlencoded";
  export let formmethod: "get" | "post" = "post";
  export let formnovalidate = false;
  export let popovertarget = "";
  export let popovertargetaction: "hide" | "show" | "toggle" = "hide";
  export let id = ""
  export let name = "";
  export let value = "";
  export let arialabel = "";

  const buttonClasses = `${classes}`;
</script>

<button 
  {type} 
  class={buttonClasses}
  form={form}
  formaction={formaction}
  formenctype={formenctype}
  formmethod={formmethod} 
  {disabled} 
  {formnovalidate}
  popovertarget={popovertarget}
  popovertargetaction={popovertargetaction}
  id={id}
  name={name}
  value={value}
  aria-label={arialabel}
  on:click
>
  <slot>Default button label</slot>
</button>