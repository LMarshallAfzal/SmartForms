<script lang="ts">
  import { page } from '$app/stores';

  const sidebarConfig = [
    { 
      title: 'Home', 
      href: '/', 
    },
    { 
      title: 'Get Started', 
      href: '/get-started', 
    },
    { 
      title: 'Validation', 
      href: '/validation', 
    },
    { 
      title: 'Calendar', 
      href: '/calendar', 
    },
    { 
      title: 'Documents', 
      href: '/documents', 
    },
  ];
</script>

<div class="grid grid-cols-2 gap-y-5 overflow-y-auto bg-gray-900 px-6">
  <nav class="flex flex-1 flex-col py-5">
    <ul role="list" class="flex flex-1 flex-col gap-y-7">
      <li>
        <ul role="list" class="-mx-2 space-y-1">
          {#each sidebarConfig as { title, href }}
            <li>
              <a
                {href}
                class={`group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold ${$page.url.pathname === href ? "bg-gray-800 text-white" : "text-gray-400"}`}
              >
                {title}
              </a>
            </li>
          {/each}
        </ul>
      </li>
    </ul>
  </nav>
</div>
