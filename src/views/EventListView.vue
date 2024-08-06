<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventCategory from '@/components/EventCategory.vue'
import { type Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / props.pageSize)
  return page.value < totalPages
})
const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    required: true
  }
})

const page = computed(() => props.page)
onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(props.pageSize, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  })
})
</script>

<template>
  <!--new element-->

  <h1>Events For Good</h1>
  <div class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <EventCategory v-for="event in events" :key="event.id" :event="event"></EventCategory>

    <div class="flex w-[290px]">
      <RouterLink
        class="flex-1 text-[#2c3e50] text-left"
        id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1, pageSize: props.pageSize } }"
        rel="prev"
        v-if="page != 1"
      >
        &#60; Prev Page</RouterLink
      >

      <RouterLink
        class="flex-1 text-[#2c3e50] text-right"
        id="page-next"
        :to="{ name: 'event-list-view', query: { page: page + 1, pageSize: props.pageSize } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page &#62;
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
