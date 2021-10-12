<template>
    <nav class="navbar orange lighten-1">
        <div class="nav-wrapper">
            <div class="navbar-left">
                <a href="#" @click.prevent="$emit('toggleSidebar')">
                    <i class="material-icons black-text">dehaze</i>
                </a>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
    .dropdown-content {
        top: 100% !important;
    }
</style>