<template>
  <div>
    <router-link class="btn grey mt-2" to="/books">Back</router-link>
    <h1 class="edit-header">Update Book</h1>
    <div class="update">
      <!-- <p> {{ oneBook.title }} - {{ oneBook.author }}</p> -->
      <form @submit="onSubmit">
        <div class="input-field">
          <input type="text" v-model="title">
          <label class="active" for="title">Title</label>
        </div>
        <div class="input-field">
          <input type="text" v-model="author">
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
      title: "",
      author: "",
      id: ""
    };
  },
  methods: {
    ...mapActions(["getSingleBook", "updateBook"]),
    onSubmit(e) {
      e.preventDefault();
      const newBook = {
        id: this.id,
        title: this.title,
        author: this.author
      };
      console.log(newBook);
      this.updateBook(newBook);
    }
  },
  computed: mapGetters(["oneBook"]),
  created() {
    console.log(this.$route.params.id);
    this.getSingleBook(this.$route.params.id);
    console.log("author: ", this.oneBook.author);
    this.title = this.oneBook.title;
    this.author = this.oneBook.author;
    this.id = this.oneBook.id;
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



