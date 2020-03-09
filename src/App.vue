<template>
  <div id="app">
    <div id="nav">
      <hello-world></hello-world>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/worker/src/main.vue'

@Component({
  components: {
    HelloWorld
  }
})
export default class Common extends Vue {

}
</script>

<style lang="scss">

</style>
