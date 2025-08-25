<template>
    <div class="warp-search">
        <mdui-icon name="search"></mdui-icon>
        <template v-if="input === true">
            <input ref="input" class="text" type="text" :value="props.label">
        </template>
        <template v-else-if="input === false">
            <div class="text">{{ label }}</div>
        </template>
    </div>
</template>

<script setup>
import { useTemplateRef, onMounted } from 'vue';

const props = defineProps({
    input: {
        type: Boolean,
        default: true
    },
    label: {
        type: String,
        default: '搜索'
    }
})

defineExpose({
    focus: () => {
        $input.value?.focus()
    }
})

const $input = useTemplateRef('input')

onMounted(() => {
    if ($input.value) {
        $input.value.onfocus = (event) => {
            if (event.target.value === props.label) event.target.value = ''
        }
        $input.value.onblur = (event) => {
            if (event.target.value === '') event.target.value = props.label
        }
    }
})
</script>

<style scoped>
.warp-search {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 9.2vw;
    box-shadow: var(--mdui-elevation-level2);
    background-color: rgb(var(--mdui-color-surface-container-highest));
    padding: 2.2vw 2.7vw;
    font-size: 3.8vw;
    border-radius: 100px;
    margin-bottom: 3.8vw;
    color: rgb(var(--mdui-color-on-surface-variant));
}

input[type=text] {
    font-size: 3.8vw;
    flex-grow: 1;
    color: rgb(var(--mdui-color-on-surface-variant));
}

mdui-icon[name=search] {
    position: relative;
    top: 1.3px;
    font-size: 5vw !important;
    margin-right: 1vw;
}
</style>