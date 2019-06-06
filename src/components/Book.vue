<template>
  <div>
    <h3>All Books</h3>

    <ul class>
      <li class="collection-item listelement" v-for="book in allBooks" :key="book.id">
        <router-link
          class="indigo-text text-darken-2 font_links"
          :to="{ name: 'bookdetail', params: { id: book.id }}"
        >{{ book.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  methods: {
    ...mapActions(["init"])
  },
  computed: mapGetters(["allBooks"]),
  created() {
    this.init();
  }
};
</script>

<style>
.font_links {
  font-size: 1.2rem;
}
.listelement {
  padding: 0.5rem 0 !important;
}
</style>


