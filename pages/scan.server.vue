<script setup lang="ts">
    import fs from 'node:fs/promises'
    import path from 'path'
    
    const route = useRoute()
    const rootPath = route?.query?.folder || '/tmp'
    
    function toPath (filename) {
        return `/api/image?imagePath=${path.resolve(rootPath, filename)}`
    }
    
    let files = []
    try {
        files = await fs.readdir(rootPath)
        files = files.filter(x => x.endsWith('.jpg')).map(toPath)
    } catch (error) {
        console.debug('Path did not exist', rootPath)
        files = []
    }
</script>

<!-- now lets see if we can get robot to scan a dir for files -->

<template>
    <form>
        <label for="folder">Source:</label>
        <input id="folder" name="folder" type="text" :value="rootPath" class="border-2 p-1" />
        <img v-for="i in files" :src="i" height="200" width="200" loading="lazy" />
    </form>
</template>