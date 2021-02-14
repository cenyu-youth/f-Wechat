<template>
  <div style="width:100%;height:100%;background-color: #ee0a24">lt</div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: "lt",



  setup(){

    const router = useRouter();

    const goState = (o) => {
      router.push(o)
    }

    return {
      goState
    }

  }
}
</script>

<style scoped>

</style>
