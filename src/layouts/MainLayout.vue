<template>
<div class="app-main-layout">
  <navbar
    @toggleSidebar='isOpen = !isOpen'
  />
  <sidebar
    :isOpen = isOpen
  />
  <main class="app-content" :class="{full: !isOpen}">
    <div class="app-page">
        <router-view/>
    </div>
  </main>
</div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'
export default {
    name: 'main',
    data() {
      return {
        isOpen: true
      }
    },
    components: {
    Sidebar,
    Navbar
    }
}
</script>