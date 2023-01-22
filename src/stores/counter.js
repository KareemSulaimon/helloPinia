import { defineStore } from 'pinia'
import {ref, computed} from 'vue'
import { useAuthStore } from './auth';


export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  const counterLength = computed(() => {
    count.toString().length
  })
 
  function increment()  {
   {if(!isAuthenticated()) return;
    this.count++}
  }
  function decrement()  {
  if(!isAuthenticated()) return;
  this.count--
  }
  function isAuthenticated() {
    const authStore = useAuthStore();
    return  authStore.isAuthenticated;
  }
  
  return {counterLength,increment,decrement,isAuthenticated  }
})