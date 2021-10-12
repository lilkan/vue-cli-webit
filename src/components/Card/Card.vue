<template>
    <router-link
        class="card"
        :to="{ name: 'detail', params:{ id: link }}"
    >
        <div class="card__body">
            <div
                :style="styleHelperImage()"
                v-if="theme === 'media'"
                class="card__image"
            >
            </div>
            <div class="card__wrapper">
                <span
                    class="card__title"
                    v-if="this.$slots['title']"
                >
                    <slot name="title" />
                </span>

                <div
                    v-if="this.$slots['content']"
                    class="card__content"
                >
                    <slot name="content"></slot>
                </div>
                <div
                    v-if="this.$slots['bottom']"
                    class="card__bottom"
                >
                    <slot name="bottom"></slot>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'card',
    props: {
        theme: String,
        image: String,
        link: Number
    },
    data () {
        return {
        }
    },
    methods: {
        styleHelperImage () {
            console.log('efwefwe');
            let style = ''

            if (this.image) {
                style = `background-image: url('${this.image}');`
            }

            return style
        }
    }
}
</script>

<style lang="scss" src="./index.scss"></style>
