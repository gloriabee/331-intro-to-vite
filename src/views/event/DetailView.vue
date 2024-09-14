<script setup lang="ts">
import { toRefs, defineProps, ref, onMounted } from 'vue'
import { type Event } from '@/types'
import { useRoute } from 'vue-router'

const props = defineProps<{
  event: Event
  id: String
}>()

const { event } = toRefs(props)

//get the route to access query parameters
const route = useRoute()
const message = ref(route.query.message as string)

onMounted(() => {
  if (message.value) {
    setTimeout(() => {
      message.value = ''
    }, 3000)
  }
})
</script>

<template>
  <div id="flashMessage" v-if="message">
    <h4>{{ message }}</h4>
  </div>

  <p>{{ event.title }} @{{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<style>
@keyframes greenfade {
  from {
    background-color: green;
  }
  to {
    background-color: transparent;
  }
}

#flashMessage {
  animation: greenfade 3s ease-in-out;
}
</style>
