<template>
  <div>
    <nav class="light-blue darken-4">
      <div class="container">
        <router-link to="/">Book app</router-link>
        <ul class="right">
          <li>
            <router-link to="/addbook">Add Book</router-link>
          </li>
          <li>
            <router-link class="hide-on-small-only" to="/books">Books</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>


<script>
export default { name: "Navbar" };
</script>

<style>
</style>
