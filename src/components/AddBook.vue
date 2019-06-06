<template>
  <div>
    <router-link class="btn grey mt-2" to="/books">Back</router-link>
    <h1>Add Book</h1>
    <div class="add">
      <form @submit="onSubmit">
        <div class="input-field">
          <input type="text" v-model="title" placeholder="Add Title...">
          <label class="active" for="title">Title</label>
        </div>
        <div class="input-field">
          <input type="text" v-model="author" placeholder="Add Author...">
          <label class="active" for="author">Author</label>
        </div>
        <input type="submit" value="Save" class="btn">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddBook",
  data() {
    return {
      title: "",
      author: ""
    };
  },
  methods: {
    ...mapActions(["addBook"]),
    onSubmit(e) {
      e.preventDefault();
      const newBook = {
        id: Date.now().toString(),
        title: this.title,
        author: this.author
      };
      this.addBook(newBook);
    }
  }
};
</script>
<style>
.mt-2 {
  margin-top: 20px;
}
</style>

