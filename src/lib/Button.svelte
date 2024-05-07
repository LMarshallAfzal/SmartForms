<script lang="ts">
    export let type: "button" | "submit" | "reset" = "button";
    export let classes = "";

const buttonClasses = `${classes}`;
</script>

<button {type} class={buttonClasses} on:click>
  <slot></slot>
</button>