import { App } from 'vue';
import CustomForm from './Form.vue';
import CustomFormItem from './FormItem.vue';
import CustomInput from './Input.vue';

export default {
  install(app:App) {
    app.component(CustomForm.name, CustomForm);
    app.component(CustomFormItem.name, CustomFormItem);
    app.component(CustomInput.name, CustomInput);
  },
};
