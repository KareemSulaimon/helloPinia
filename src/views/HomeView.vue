<script setup>
import Counter from  '@/components/Counter.vue'
import {storeToRefs}  from 'pinia'
import {useAuthStore} from '@/stores/auth';
const AuthStore = useAuthStore()
// const {isAuthenticated, fullname} = storeToRefs(AuthStore )


</script>

<template>
  <main>
    <div v-if="AuthStore.isAuthenticated">user name is: {{AuthStore.fullname}} 
    </div>
<Counter />
 </main>
</template>
 