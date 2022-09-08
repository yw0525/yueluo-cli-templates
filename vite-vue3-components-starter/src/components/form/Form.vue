<template>
  <div class="custom-form">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PropType, provide, ref } from 'vue';
import { Rules } from 'async-validator';
import { emitter } from '../../emitter';
import { FormItem, key } from './typings';

const props = defineProps({
  model: { type: Object, required: true },
  rules: { type: Object as PropType<Rules> },
});

provide(key, {
  model: props.model,
  rules: props.rules,
});

const items = ref<FormItem[]>([]);

emitter.on('addFormItem', (item) => {
  items.value.push(item);
});

function validate(cb: (isValid: boolean) => void) {
  const tasks = items.value.map((item) => item.validate());
  Promise.all(tasks)
    .then(() => { cb(true); })
    .catch(() => { cb(false); });
}

defineExpose({
  validate,
});
</script>

<script lang="ts">
export default {
  name: 'CustomForm',
};
</script>

<style lang="scss" scoped>
@import '../styles/mixin';
@include b(form) {
  margin-top:20px;
  box-sizing: border-box;
  flex-shrink: 0;
  width:300px;
}
</style>
