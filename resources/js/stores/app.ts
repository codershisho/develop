import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
  const sample = ref(0);
  return {
    sample,
  };
});
