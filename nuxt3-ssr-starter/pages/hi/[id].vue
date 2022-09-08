<template>
  <div class="page-index">
    <el-space direction="vertical" size="large">
      <el-space>
        <h3>Hi,</h3>
        <div>{{ name }}!</div>
      </el-space>

      <template v-if="user.otherNames.length">
        <div>
          <span>Also as known as:</span>
          <ul>
            <li v-for="otherName in user.otherNames" :key="otherName">
              <router-link :to="`/hi/${otherName}`" replace>
                {{ otherName }}
              </router-link>
            </li>
          </ul>
        </div>
      </template>

      <Counter />

      <el-space>
        <NuxtLink to="/"> Back </NuxtLink>
      </el-space>
    </el-space>
  </div>
</template>

<script setup lang="ts">
import { ElSpace } from 'element-plus/dist/index.full.js';
import { useUserStore } from '~/stores/user';
import Counter from '~~/components/client/Counter.vue';

definePageMeta({
  layout: false
});

const route = useRoute();
const user = useUserStore();
const name = route.params.id;

watchEffect(() => {
  user.setNewName(route.params.id as string);
});
</script>

<style lang="scss" scoped>
.page-index {
  padding-top: 60px;
  text-align: center;
}
</style>
