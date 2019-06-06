<template>
  <div>
    <Book/>
  </div>
</template>

<script>
// @ is an alias to /src
import Book from "@/components/Book.vue";

export default {
  name: "home",
  components: {
    Book
  }
};
</script>
