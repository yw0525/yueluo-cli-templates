<template>
  <div
    class="custom-form-item"
  >
    <label
      v-if="label"
    >{{ label }}</label>
    <slot />
    <p
      v-if="error"
      class="error"
    >
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import Schema from 'async-validator';
import { onMounted, ref, inject } from 'vue';
import { FormItem, key } from './typings';
import { emitter } from '../../emitter';

interface Props {
  label?: string
  prop?: string
}

const validate = () => {
  if (formData?.rules === undefined) {
    return Promise.resolve({ result: true });
  }
  const rules = formData.rules[props.prop];
  const value = formData.model[props.prop];
  const schema = new Schema({ [props.prop]: rules });
  return schema.validate({ [props.prop]: value }, (errors) => {
    if (errors) {
      error.value = errors[0].message || '校验错误';
    } else {
      error.value = '';
    }
  });
};

const props = withDefaults(defineProps<Props>(), { label: '', prop: '' });
const error = ref('');
const formData = inject(key);
const o: FormItem = {
  validate,
};

defineExpose(o);
onMounted(() => {
  if (props.prop) {
    emitter.on('validate', () => {
      validate();
    });
    emitter.emit('addFormItem', o);
  }
});
</script>

<script lang="ts">
export default {
  name: 'CustomFormItem',
};
</script>

<style lang="scss" scoped>
@import '../styles/mixin';

@include b(form-item) {
  margin-bottom: 22px;
  label{
    line-height:1.2;
    margin-bottom:5px;
    display: inline-block;
  }
  & .custom-form-item {
    margin-bottom: 0;
  }
}
.error{
  color:red;
}
</style>
