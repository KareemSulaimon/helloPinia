<template>
    <div>
        <button @click="counterStore.increment">+</button>
       Count Value: {{count}}
          <button  @click="counterStore.decrement">-</button>

          <br>
          counter move to {{counterLength}} digit length
    </div>
</template>
    
     <script setup>
import {useCounterStore} from  '@/stores/counter';
import {storeToRefs} from  'pinia'; 
const counterStore =  useCounterStore()
const {count, counterLength } = storeToRefs(counterStore)

   
// const counterLength  = computed(() => store.count.toString().length)
    // const counterLength = store.count.toString().length
     </script>
     
    