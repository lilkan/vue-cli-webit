<template>
    <div>
        <div class="page-title">
            <h1>{{news.h1}}</h1>
        </div>
        <span class="detail__data">{{news.public_date}}</span>
        <div class="row">
            <div
                class="col m12 l4"
            >
                <slider>
                    <slide
                        v-for="(item, index) in news.photos"
                        :key="index"
                    >
                        <img :src="item.normal_photo" :alt="item.name">
                    </slide>
                </slider>
            </div>
            <div class="col m12 l8">
                <span v-html="news.full_text"></span>
            </div>
        </div>
    </div>
</template>
<script>
import { Slide, Slider } from '@/components/Slider'
export default {
    name: 'Detail',
    components: {
        Slider,
        Slide
    },
    data () {
        return {
            news: [],
            fixDomen: 'https://shop.anyprinter.ru'
        }
    },
    mounted () {
        let id = this.$route.params.id
        fetch(`https://shop.anyprinter.ru/api/news/${id}`)
        .then(response => response.json())
        .then(data => this.news = this.fixPhotos('normal_photo', data))
    },
    methods: {
        fixPhotos (fieldName, data) {
            data.photos.map(i => i[fieldName] = `${this.fixDomen}${i[fieldName]}`)
            return data
        }
    }
}
</script>
<style lang="scss">
.detail {
    &__data {
        margin-bottom: 20px;
        display: block
    }
}
</style>