<script lang="ts">
  import type { enctype, method } from "$types/global";

  import Input from "./Input.svelte";
  import Button from "./Button.svelte";

  type acceptCharset = "utf-8" | "iso-8859-1" | "windows-1252";

  export let acceptCharset: acceptCharset = "utf-8";
  export let action = "";
  export let autocomplete = false;
  export let enctype: enctype = "application/x-www-form-urlencoded";
  export let method: method = "post";
  export let id = "";
  export let name = "";
  export let novalidate=false
  export let rel = "";
  export let target = "";

  export let config = {
    inputs: [],
    buttons: [],
  };

  const { inputs, buttons } = config;
</script>

<form 
  accept-charset={acceptCharset} 
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
      <Input {...input} />
    </div>
  {/each}
  <div>
    <Button type="submit">Submit</Button>
  </div>
</form>

