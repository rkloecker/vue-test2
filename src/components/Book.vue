<template>
  <div>
    <h3>All Books</h3>
    
    <div class="todos">
      <div
        v-for="book in allBooks"
        :key="book.id"
      >
       <!-- <router-link to="/books">{{ book.title }}</router-link> -->
       <router-link :to="{ name: 'bookdetail', params: { id: book.id }}">{{ book.title }}</router-link>
        
        <!-- <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  methods: {
    ...mapActions(["init"]),
   
  },
  computed: mapGetters(["allBooks"]),
  created() {
    this.init();
  }
};
</script>

