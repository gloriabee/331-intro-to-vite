<script setup lang="ts">
import {ref} from 'vue'
import Event from '@/types/Event'
defineProps<{
    event: Event
}>()
</script>

<template>
    <div class="details">
            <span>Category Name: {{event.category}}</span> <br>
            <span>Organizer: {{event.organizer}}</span>
    </div>
</template>

<style scoped>
    .details{
        padding: 20px;
        text-align: right;
        font-size: 16px;
        border: 1px solid #39495c;
        margin-bottom: 18px;
    }

</style>