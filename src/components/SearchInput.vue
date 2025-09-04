<template>
    <div class="wrap">
        <div class="search-input">
            <mdui-icon name="search"></mdui-icon>
            <template v-if="disableInput === false">
                <input ref="input" class="input" type="text" :value="modelValue" @input="onInput" :placeholder="label" />
                <mdui-button-icon icon="clear" v-show="!!modelValue" @click="clearInput"></mdui-button-icon>
            </template>
            <template v-else-if="disableInput === true">
                <div class="text">{{ label }}</div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { useTemplateRef } from 'vue'

const props = defineProps({
    disableInput: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: '搜索'
    },
    modelValue: String
})

const emit = defineEmits([
    'update:modelValue',
    'clearInput'
])

const onInput = (e) => {
    emit('update:modelValue', e.target.value)
}

const clearInput = () => {
    emit('clearInput')
}

const input = useTemplateRef('input')

defineExpose({
    focus: () => {
        input.value?.focus()
    }
})
</script>

<style scoped>
.wrap {
    position: relative;
    width: 100vw;
    z-index: 1;
}

.search-input {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 9.2vw;
    padding: 2.2vw 2.7vw;
    margin: 1.2vw 15px;
    border-radius: 100px;
    font-size: 3.8vw;
    color: rgb(var(--mdui-color-on-surface-variant));
    background-color: rgb(var(--mdui-color-surface-container-highest));
    box-shadow: var(--mdui-elevation-level2);
}

.search-input .input {
    height: inherit;
    font-size: 3.8vw;
    flex-grow: 1;
    color: rgb(var(--mdui-color-on-surface-variant));
}

.search-input mdui-button-icon[icon=clear] {
    width: 8vw;
    height: 8vw;
    font-size: 5vw;
}

.search-input mdui-icon[name=search] {
    margin-right: 1vw;
    font-size: 5vw !important;
}

.search-input .text {
    position: relative;
    top: -1.2px;
}
</style>