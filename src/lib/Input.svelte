<script lang="ts">
  export let id = "";
  export let name = ""
  export let label = "";
  export let type: "text" | "number" | "email" | "url" | "password" | "hidden" | "tel" | "hidden" = "text";
  export let placeholder = "";
  export let required = false;
  export let value = "";
  export let classes = "";

  const inputClasses = `${classes}`
</script>

<div>
  <label for={id}>{label}</label>
  <input
    {id}
    {name}
    {...{type}}
    {placeholder}
    {required}
    bind:value
    class={inputClasses}
  />
</div>