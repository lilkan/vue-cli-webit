<template>
    <div :class="[
            'slider',
            classObject
        ]"
    >
        <div class="swiper-container slider__container" ref="slider">
            <div class="swiper-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="slider__controls">
            <div class="slider__pagination" ref="pagination"></div>
            <div class="slider__nav">
                <button class="slider__nav-btn slider__nav-btn--prev" ref="prev">
                    предыдущий
                </button>
                <button class="slider__nav-btn slider__nav-btn--next" ref="next">
                    следующий
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

export default {
    name: 'slider',
    props: {
        slidesPerView: String,
        spaceBetween: Number,
        theme: String,
        autoHeight: Boolean,
        simulateTouch: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            slider: undefined,
            isEnd: false
        }
    },
    mounted () {
        this.init()
    },
    computed: {
        classObject () {
            return {
                'slider--last-slide': this.isEnd
            }
        }
    },
    methods: {
        init () {
            let options = {
                observer: true,
                observeParents: true,
                autoHeight: this.autoHeight,
                simulateTouch: this.simulateTouch,
                navigation: {
                    prevEl: this.$refs.prev,
                    nextEl: this.$refs.next
                },
                on: {
                    slideChange: () => {
                        if (this.slider) {
                            this.isEnd = this.slider.isEnd
                        }
                    }
                }
            }

            if (this.slidesPerView) {
                options.slidesPerView = this.slidesPerView

                options.breakpoints = {
                    600: {
                        slidesPerView: 1
                    },
                    1359: {
                        slidesPerView: 2
                    }
                }
            }

            if (this.spaceBetween) {
                options.spaceBetween = this.spaceBetween
            }

            this.slider = new Swiper(this.$refs.slider, options)
        }
    }
}
</script>

<style lang="scss">
.slider {

    &__controls {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 32px;
    }
}
</style>
