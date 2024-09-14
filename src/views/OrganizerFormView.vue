<script setup lang="ts">
import type { Organizer } from '@/types'
import { ref } from 'vue'
import OrganizerService from '@/services/OrganizerService'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const organizer = ref<Organizer>({
  id: 0,
  address: '',
  orgName: ''
})

const router = useRouter()
const store = useMessageStore()

function saveOrganizer() {
  OrganizerService.saveOrganizer(organizer.value)
    .then((response) => {
      // router.push({})
      store.updateMessage('You are successfully add a new organizer for ' + response.data.orgName)
      setTimeout(() => {
        store.resetMessage()
      }, 3000)
    })
    .catch(() => {
      router.push({
        name: 'network-error-view'
      })
    })
}
</script>

<template>
  <div class="organizer-form">
    <h1>Add an Organizer</h1>
    <form @submit.prevent="saveOrganizer">
      <h3>What is Your Organization Address</h3>
      <label>Address</label>
      <input v-model="organizer.address" type="text" placeholder="Address" class="field" />

      <h3>What is your organization name?</h3>
      <label>Organization Name</label>
      <input
        v-model="organizer.orgName"
        type="text"
        placeholder="Organization Name"
        class="field"
      />

      <button class="button" type="submit">Submit</button>
    </form>

    <pre>{{ organizer }}</pre>
  </div>
</template>

<style>
.organizer-form {
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
