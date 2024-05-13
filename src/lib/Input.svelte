<script lang="ts">
  import type { enctype, method } from "./types/global.ts";
  import type { InputType } from "./types/input.ts";

  export let id: string = "";
  export let name: string = ""
  export let label: string = "";
  export let type: InputType = "text";
  export let placeholder: string = "";
  export let formaction: string = "";
  export let formenctype: enctype = "application/x-www-form-urlencoded";
  export let formnovalidate: boolean = false;
  export let required: boolean = false;
  export let value: string = "";
  export let classes: string = "";

  const inputClasses: string = `${classes}`;
</script>

<div>
  <label for={id}>{label}</label>
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
  />
</div>