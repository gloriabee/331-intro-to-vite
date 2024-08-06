<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message'
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)
const pageSize = ref(2)
</script>

<template>
  <div class="text-center font-sans text-gray-700 antialiased">
    <header>
      <!--flash message-->
      <div id="flashMessage" v-if="message" class="animate-fade">
        <h4>{{ message }}</h4>
      </div>

      <h1>Deploy with Vercel</h1>

      <!--wrapper class-->
      <div class="wrapper">
        <nav class="py-6">
          <!-- <RouterLink to="/">Event</RouterLink> |
          <RouterLink to="/about">About</RouterLink> | 
          <RouterLink to="/students">Students</RouterLink> -->

          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'event-list-view', query: { pageSize: pageSize } }"
            >Event</RouterLink
          >
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'about' }"
            >About</RouterLink
          >
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'student' }"
            >Students</RouterLink
          >
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
/* #layout {
  font-family: Avenir, Helevetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
/* nav {
  padding: 30px;
} */

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
