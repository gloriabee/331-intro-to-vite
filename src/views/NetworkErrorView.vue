<template>
  <div class="networkError">
    <h1>Uh-Oh!</h1>
    <h3>
      It looks like you're experiencing some network issues, please take a breadth and
      <a href="#" @click="$router.go(-1)">Click here</a> to try again
    </h3>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
