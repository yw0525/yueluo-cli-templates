import { getCurrentInstance, ComponentInternalInstance } from 'vue';

export function useGlobalConfig() {
  const instance:ComponentInternalInstance|null = getCurrentInstance();
  if (!instance) {
    throw new Error('useGlobalConfig must be in setup function');
  }
  return instance?.appContext.config.globalProperties.$GLOBAL_CONFIG || {};
}

export default {};
