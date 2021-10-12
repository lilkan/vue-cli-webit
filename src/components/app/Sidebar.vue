<template>
    <ul class="sidenav app-sidenav" :class="{open: isOpen}">
        <router-link
            v-for="(link, index) in links"
            v-if="link.meta.menu === 'side'"
            :key='index'
            :to="link.path"
            :exact='link.meta.exact'
            v-slot="{ href, navigate, isActive }"
            custom
        >
            <li :class="{ 'active': isActive }">
                <a :href="href" @click="navigate" class="waves-effect waves-orange pointer">
                {{ link.meta.title }}
                </a>
            </li>
        </router-link>
    </ul>
</template>
<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            // links: [
            //     {
            //         title:'Счет',
            //         url: '/',
            //         exact: true
            //     },
            //     {
            //         title:'История',
            //         url: '/history'
            //     },
            //     {
            //         title:'Планирование',
            //         url: '/planning'
            //     },
            //     {
            //         title:'Новая запись',
            //         url: '/record'
            //     },
            //     {
            //         title:'Категории',
            //         url: '/categories'
            //     }
            // ]
        }
    },
    computed: {
        links () {
            return this.$router.options.routes
        }
    }
}
</script>