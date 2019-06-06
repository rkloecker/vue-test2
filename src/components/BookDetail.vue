<template>
<div>
 <p> {{ oneBook.title }} - {{ oneBook.author }}</p>
   <router-link :to="{ name: 'updateBook', params: { id: oneBook.id }}">Edit Book</router-link>
   <span @click="removeBook(oneBook.id)" class="remove">Delete Book</span>
</div>
 
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BookDetail",
  methods: {
    ...mapActions(["getSingleBook", "removeBook"]),
   
  },
  computed: mapGetters(["oneBook"]),
  created() {
    console.log(this.$route.params.id)
    this.getSingleBook(this.$route.params.id);
  }
};
</script>

<style>
.remove{
  color: red;
  cursor: pointer;
  margin-left: 10px;
}
</style>
