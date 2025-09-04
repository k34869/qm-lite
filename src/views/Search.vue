<template>
    <div class="warp-search">
        <SearchInput label="搜索你想找的音乐" ref="input" />
        <!-- <SearchHot /> -->
    </div>
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue';
import SearchInput from '../components/SearchInput.vue';
// import SearchHot from '../components/Search/SearchHot.vue';

defineOptions({
    name: 'Search'
})

const input = useTemplateRef('input')

onMounted(() => {
    input.value?.focus()
})
</script>

<style scoped>

</style>