<template>
  <custom-button type="primary">
    按钮
  </custom-button>
  <custom-button type="success">
    按钮
  </custom-button>
  <custom-button>按钮</custom-button>
  <custom-button size="small">
    按钮
  </custom-button>
  <hr>

  <custom-form
    ref="myForm"
    :model="model"
    :rules="rules"
  >
    <custom-form-item
      label="用户名："
      prop="username"
    >
      <custom-input v-model="model.username" />
    </custom-form-item>
    <custom-form-item
      label="密码："
      prop="password"
    >
      <custom-input
        v-model="model.password"
        type="password"
      />
    </custom-form-item>
    <br>
    <custom-form-item>
      <custom-button
        type="primary"
        @click="login"
      >
        登 录
      </custom-button>
    </custom-form-item>
  </custom-form>

  <custom-container>
    <custom-header>Header</custom-header>
    <custom-main>Main</custom-main>
    <custom-footer>Footer</custom-footer>
  </custom-container>
  <hr>

  <custom-container>
    <custom-header>Header</custom-header>
    <custom-container>
      <custom-aside width="200px">Aside</custom-aside>
      <custom-main>Main</custom-main>
    </custom-container>
  </custom-container>
  <hr>

  <custom-container>
    <custom-aside width="200px">Aside</custom-aside>
    <custom-container>
      <custom-header>Header</custom-header>
      <custom-main>Main</custom-main>
      <custom-footer>Footer</custom-footer>
    </custom-container>
  </custom-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { FormType } from './components/form/typings';

const model = reactive({
  username: '',
  password: '',
});
const rules = reactive({
  username: [
    {
      required: true,
      message: '请输入用户名！',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码！',
    },
  ],
});

// 获取表单实例
const myForm = ref<FormType>();

const login = () => {
  myForm.value?.validate((isValid) => {
    if (isValid) {
      console.log(model);
    } else {
      alert('请正确填写表单！');
    }
  });
};
</script>

<style>
body {
  width: 1000px;
  margin: 10px auto;
}

.custom-header,
.custom-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.custom-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.custom-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body>.custom-container {
  margin-bottom: 40px;
}

.custom-container:nth-child(5) .custom-aside,
.custom-container:nth-child(6) .custom-aside {
  line-height: 260px;
}

.custom-container:nth-child(7) .custom-aside {
  line-height: 320px;
}
</style>
