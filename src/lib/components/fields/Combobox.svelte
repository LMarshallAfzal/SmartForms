<script lang="ts">
  import type { enctype } from "../../types/global.ts";
  import type { FullAutoFill } from "svelte/elements";

  export let id: string = "";
  export let name: string = "";
  export let label: string = "";
  export let placeholder: string = "";
  export let formaction: string = "";
  export let formenctype: enctype = "application/x-www-form-urlencoded";
  export let formnovalidate: boolean = false;
  export let required: boolean = false;
  export let value: string = "";
  export let classes: string = "";
  export let styles: string = "";
  export let options: string[] = [];
  export let disabled: boolean = false;
  export let readonly: boolean = false;
  export let autocomplete: FullAutoFill = "off";
  export let list: string = "";

  const comboboxClasses: string = `${classes}`;

  $: datalistId = list || `${id}-options`;
  $: ariaControls = options.length > 0 ? datalistId : undefined;
</script>

<div style={styles}>
  <label for={id}>{label}{required ? "*" : ""}</label>
  <input
    {id}
    {name}
    type="text"
    {placeholder}
    {formenctype}
    {formaction}
    {formnovalidate}
    {required}
    {disabled}
    {readonly}
    {autocomplete}
    {list}
    bind:value
    class={comboboxClasses}
    style={styles}
    aria-controls={ariaControls}
    aria-expanded="false"
    aria-autocomplete="list"
  />

  {#if options.length > 0}
    <datalist id={datalistId}>
      {#each options as option}
        <option value={option}>{option}</option>
      {/each}
    </datalist>
  {/if}
</div>
