<template>
  <div>
    <h3>Add Book</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Title...">
        <input type="text" v-model="author" placeholder="Add Author...">
        <input type="submit" value="Submit">
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


