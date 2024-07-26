<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event } from '@/types'
import { useRouter } from 'vue-router'

//use Message flash store

const props = defineProps<{
  event: Event
  id: String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const router = useRouter()
// const store = useMessageStore()

const edit = () => {
  // store.updateMessage(props.event.title + ' has been updated')
  const message = `${props.event.title} has been updated`

  //move to the details page
  router.push({ name: 'event-detail-view', params: { id: props.event.id }, query: { message } })
}
</script>

<template>
  <p>Edit event</p>
  <button @click="edit">Edit</button>
</template>
