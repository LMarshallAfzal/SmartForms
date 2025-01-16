<script lang="ts">
  import "../styles/base.css";
  import Header from "./Header.svelte";
  import Sidebar from "./Sidebar.svelte";
</script>

<div class="layout">

  <Header />
  

  <div class="flex">
    <Sidebar />
    <article class="flex-1 prose"> 
      <slot /> 
    </article> 
  </div>

</div>
