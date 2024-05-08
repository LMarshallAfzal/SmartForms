<script lang="ts">
  export let id = "";
  export let name = ""
  export let label = "";
  export let type: "text" | "number" | "email" | "url" | "password" | "hidden" | "tel" | "hidden" = "text";
  export let placeholder = "";
  export let form = "";
  export let formaction = "";
  export let formenctype: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain" = "application/x-www-form-urlencoded";
  export let formmethod: "get" | "post" = "post";
  export let formnovalidate = false;
  export let popovertarget = "";
  export let popovertargetaction: "hide" | "show" | "toggle" = "hide";
  export let required = false;
  export let value = "";
  export let classes = "";

  const inputClasses = `${classes}`;
</script>

<div>
  <label for={id}>{label}</label>
  <input
    {id}
    {name}
    {...{type}}
    {placeholder}
    {form}
    {formaction}
    {formmethod}
    {formenctype}
    {formnovalidate}
    {popovertarget}
    {popovertargetaction}
    {required}
    bind:value
    class={inputClasses}
  />
</div>