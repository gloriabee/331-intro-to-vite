<script setup lang="ts">
import type { Event } from '@/types'
import { ref } from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import BaseInput from '@/components/BaseInput.vue'

const event = ref<Event>({
  id: 0,
  category: '',
  title: '',
  description: '',
  location: '',
  date: '',
  time: '',
  petsAllowed: false,
  organizer: {
    id: 0,
    name: ''
  }
})

const router = useRouter()
const store = useMessageStore()

function saveEvent() {
  EventService.saveEvent(event.value)
    .then((response) => {
      router.push({
        name: 'event-detail-view',
        params: { id: response.data.id }
      })
      store.updateMessage('You are successfully add a new event for ' + response.data.title)
      setTimeout(() => {
        store.resetMessage()
      }, 3000)
    })
    .catch(() => {
      router.push({ name: 'network-error-view' })
    })
}
</script>

<template>
  <div class="event-form">
    <h1>Create an event</h1>
    <form @submit.prevent="saveEvent">
      <BaseInput v-model="event.category" type="text" label="Category" />
      <h3>Name & describe your event</h3>

      <BaseInput v-model="event.title" type="text" label="Title" />

      <BaseInput v-model="event.description" type="text" label="Description" />
      <h3>Where is your event?</h3>

      <BaseInput v-model="event.location" type="text" label="Location" />

      <button class="button" type="submit">Submit</button>
    </form>

    <pre>{{ event }}</pre>
  </div>
</template>

<style>
.event-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
h1,
h3 {
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 15px;
  font-weight: bold;
}

.field {
  margin-top: 5px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
}

.field:focus {
  outline: none;
  border-color: #007bff;
}

.button {
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #0056b3;
}

pre {
  margin-top: 20px;
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
