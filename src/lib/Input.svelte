<script lang="ts">
  import type { enctype, method } from "./types/global.ts";
  import type { InputType } from "./types/input.js";

  export let id = "";
  export let name = ""
  export let label = "";
  export let type: InputType = "text";
  export let placeholder = "";
  export let form = "";
  export let formaction = "";
  export let formenctype: enctype = "application/x-www-form-urlencoded";
  export let formmethod: method = "post";
  export let formnovalidate = false;
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
    {required}
    bind:value
    class={inputClasses}
  />
</div>