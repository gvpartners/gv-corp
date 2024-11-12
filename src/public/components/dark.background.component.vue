<script>
export default {
  name: 'DarkBackground',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
}
</script>

<template>
  <div class="black-background" v-if="show"/>
</template>

<style scoped>
.black-background{
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
</style>