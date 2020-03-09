<template>
  <div class="hello">
    <h1>hello world!</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Worker extends Vue {
  @Prop() private msg!: string;
}
</script>
