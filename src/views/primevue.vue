<template>
  <div>
    <h1>Prime View</h1>
    <Knob v-model="value" textColor="var(--text)" :min="0" :max="100" :step="1" :showValue="true" class="knob"/>
  </div>
</template>
<style>
  .knob {
    color: white;
  }
</style>
<script>
  export default {
    name: 'primevue',
    data() {
      return {
        value: 50
      }
    },
  }
</script>
