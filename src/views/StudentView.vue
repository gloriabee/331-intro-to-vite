<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import { type Student } from '@/types'
import { ref, onMounted } from 'vue'
import StudentService from '@/services/StudentService'
const students = ref<Student[]>()
onMounted(() => {
  StudentService.getEvents()
    .then((response) => {
      students.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <div class="students">
    <h1>Students List</h1>
    <StudentCard v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>

<style scoped>
.students {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
