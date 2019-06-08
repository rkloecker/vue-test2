<template>
  <div>
    <router-link class="btn grey mt-2" to="/books">Back</router-link>
    <h1 class="edit-header">Update Book</h1>
    <div class="update">
      <form @submit="onSubmit">
        <div class="input-field">
          <input type="text" v-model="book.title">
          <label class="active" for="title">Title</label>
        </div>
        <div class="input-field">
          <input type="text" v-model="book.author">
          <label class="active" for="author">Author</label>
        </div>
        <input type="submit" value="Save" class="btn">
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BookDetail",
  data() {
    return {
      book: {}
    };
  },
  methods: {
    ...mapActions(["getSingleBook", "updateBook"]),
    onSubmit(e) {
      e.preventDefault();
      this.updateBook(this.book);
    }
  },
  computed: mapGetters(["oneBook"]),
  created() {
    this.getSingleBook(this.$route.params.id);
    this.book = this.oneBook;
  }
};
</script>

<style>
.edit-header {
  font-size: 3rem;
}
.mt-2 {
  margin-top: 20px;
}
</style>



