<script lang="ts">
  import logo from "/images/logo-md-white.png";
</script>

<header>
  <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    <div class="flex justify-between items-center">
      <a href="http://localhost:5173" class="flex items-center">
        <img src={logo} class="mr-3 h-6 sm:h-9" alt="SmartForm Logo" />
      </a>
      <div class="flex items-center lg:order-2">
        <!-- <a href="http://localhost:5173" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
              <a href="http://localhost:5173" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a> -->
      </div>
      <div
        class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      ></div>
    </div>
  </nav>
</header>
