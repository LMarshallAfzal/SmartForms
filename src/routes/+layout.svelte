<script lang="ts">
  import "../styles/base.css";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import Sidebar from "./Sidebar.svelte";
</script>

<svelte:head>
  <title>@nil-/doc</title>
  <link
    href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.min.css"
    rel="stylesheet"
  />
</svelte:head>

<div class="flex flex-col min-h-screen">
  <Header />

  <div class="flex h-full">
    <Sidebar />
    <article class="flex-1 h-full">
      <slot />
      <Footer />
    </article>
  </div>
</div>
