<template>
  <div>
    <br>
    <h5 class="grey-text text-darken-2 mt-2">{{ oneBook.author }}</h5>
    <h3>{{ oneBook.title }}</h3>
    <router-link class="btn mr-1" :to="{ name: 'updateBook', params: { id: oneBook.id }}">Edit</router-link>
    <router-link class="btn grey mr-1" to="/books">Back</router-link>
    <button @click="removeBook(oneBook.id)" class="btn red">Delete</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BookDetail",
  methods: {
    ...mapActions(["getSingleBook", "removeBook"])
  },
  computed: mapGetters(["oneBook"]),
  created() {
    console.log(this.$route.params.id);
    this.getSingleBook(this.$route.params.id);
  }
};
</script>

<style>
.remove {
  color: red;
  cursor: pointer;
  margin-left: 10px;
}
.mt-2 {
  margin-top: 20px;
}
.mr-1 {
  margin-right: 10px;
}
.mr-2 {
  margin-right: 20px;
}
</style>
