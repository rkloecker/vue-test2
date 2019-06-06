<template>
  <div>
    <h3>Add Book</h3>
    <div class="add">
     <p> {{ oneBook.title }} - {{ oneBook.author }}</p>
      <form @submit="onSubmit">
        <input type="text" v-model="title" >
        <input type="text" v-model="author" >
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

// export default {
//   name: "UpdateBook",
  
//   created() {
//     console.log(this.$route.params.id)
//     this.getSingleBook(this.$route.params.id);
//   },
//     methods: {
//     ...mapActions(["updateBook", "getSingleBook"]),
//     computed: mapGetters(["oneBook"]),
//     onSubmit(e) {
//       e.preventDefault();
//        const newBook = {
//       // id: this.oneBook.id,
//       // title: this.onebook.title,
//       // author: this.onebook.author
//     };
//       // this.updateBook(newBook);
//     }
//   }
// };
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
      console.log(newBook)
      this.updateBook(newBook);
    }
  },
  computed: mapGetters(["oneBook"]),
  created() {
    console.log(this.$route.params.id)
    this.getSingleBook(this.$route.params.id);
    console.log("author: ",this.oneBook.author)
    this.title = this.oneBook.title
    this.author = this.oneBook.author
    this.id = this.oneBook.id
  }
};
</script>


