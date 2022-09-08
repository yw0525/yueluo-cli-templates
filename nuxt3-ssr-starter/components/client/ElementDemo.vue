<template>
  <el-space direction="vertical" size="large">
    <el-space>
      <el-dropdown class="m-4" type="primary">
        <el-button type="primary">
          Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-space>

    <el-space>
      <el-button class="m-4" @click="hello">Hello</el-button>
      <el-button class="m-4" type="primary" @click="hello">Hello</el-button>
    </el-space>

    <client-only>
      <el-space>
        <el-config-provider :locale="zhCn">
          <el-date-picker v-model="timeValue" type="date" placeholder="请选择日期"></el-date-picker>
        </el-config-provider>
      </el-space>
    </client-only>
  </el-space>
</template>

<script setup lang="ts">
import {
  ElIcon,
  ElButton,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElConfigProvider,
  ElDatePicker,
  ElMessage,
  ElSpace
} from 'element-plus/dist/index.full.js';
import zhCn from 'element-plus/dist/locale/zh-cn.js';

const timeValue = ref('');
const hello = () => ElMessage.info('hello world');
</script>
