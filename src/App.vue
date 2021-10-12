<template>
  <div id="app">
    <component :is='layout'/>
  </div>
</template>

<script>
import empty from '@/layouts/EmptyLayout'
import mainLayout from '@/layouts/MainLayout'

export default {
  computed: {
    layout() {
      return this.$route.meta.layout
    }
  },
  components: {
    empty,
    mainLayout
  }
}
</script>
<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
