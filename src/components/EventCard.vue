<script setup lang="ts">
import { type Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink class="text-[#2c3e50]" :to="{ name: 'event-detail-view', params: { id: event.id } }">
    <div
      class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp"
    >
      <h2>{{ event.title }}</h2>
      <span>by</span>
      <h5>{{ event.organizer.name }}</h5>
      <span>@{{ event.category }} @ {{ event.location }}</span>
    </div>
  </RouterLink>
</template>

<style scoped></style>
