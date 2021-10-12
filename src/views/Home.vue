<template>
  <div>
    <div class="page-title">
      <h3>Главная</h3>
    </div>

    <div class="row">
      <div class="col l12">
        <slider>
            <slide
              v-for="(item, index) in slides"
              :key="index"
            >
              <img :src="item.normal_photo" :alt="item.name">
            </slide>
        </slider>
      </div>
    </div>
    <div class="row">
      <div
        class="col s12 m6 l4"
        v-for="item in news"
        :key="item.id"
      >
        <card
          theme="media"
          :image="item.normal_photo"
          :link="item.id"
        >
          <template v-slot:title>
            {{ item.name }}
          </template>
          <template v-slot:content>
              <span v-html="item.short_text"></span>
          </template>
          <template v-slot:bottom>
            {{item.public_date}}
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import { Slide, Slider } from '@/components/Slider'
import { Card } from '@/components/Card'

  export default {
    name: 'Home',
    data () {
      return {
        slides: [],
        news: [],
        fixDomen: 'https://shop.anyprinter.ru'
      }
    },
    components: {
        Slider,
        Slide,
        Card
    },
    mounted () {
      fetch('https://shop.anyprinter.ru/api/slider')
      .then(response => response.json())
      .then(data => this.slides = this.fixPhotos('normal_photo',data))

      fetch('https://shop.anyprinter.ru/api/news?limit=5')
      .then(response => response.json())
      .then(data => this.news = this.fixPhotos('normal_photo',data))
    },
    methods: {
        fixPhotos (fieldName, data) {
            data.map(i => i[fieldName] = `${this.fixDomen}${i[fieldName]}`)
            return data
        }
    }
  }
</script>