<script setup lang="ts">
    const { data } = await useFetch('/api/files')
</script>

<template>
    <h1>Hello World :robot:</h1>
    <pre v-if="data">
        {{  data.path }}
    </pre>
</template>