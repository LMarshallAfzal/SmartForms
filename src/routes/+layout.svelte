<script lang="ts">
  import "../styles/base.css";
  import Header from "./Header.svelte";
</script>

<div class="layout">
  
  <Header />

  <article class="prose"> 
    <slot /> 
  </article> 

</div>
