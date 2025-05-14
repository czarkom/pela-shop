<!-- components/BedSetConfigurator.vue -->
<template>
  <div class="w-128 space-y-10 flex flex-col justify-center">
    <!-- Pillow slider -->
    <Swiper
        :slides-per-view="'auto'"
        space-between="16"
        class="w-full"
        :navigation="true"
        :modules="[Navigation]"
    >
      <SwiperSlide
          v-for="(image, index) in pillowImages"
          :key="'pillow-' + index"
      >
        <div class="flex justify-center">
          <img :src="image" alt="Pillow" class="rounded-xl object-cover h-64" />
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Duvet slider -->
    <Swiper
        :slides-per-view="'auto'"
        space-between="16"
        class="w-full"
        :navigation="true"
        :modules="[Navigation]"
    >
      <SwiperSlide
          v-for="(image, index) in duvetImages"
          :key="'duvet-' + index"
          class="w-48 shrink-0"
      >
        <div class="flex justify-center">
          <img :src="image" alt="Duvet" class="rounded-xl object-cover h-64" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

const pillowImages: string[] = [
    '/src/assets/pillows/pink.png',
    '/src/assets/pillows/soft_blue.png'
]

const duvetImages: string[] = [
  '/src/assets/duvets/butter.png',
  '/src/assets/duvets/dirty_pink.png'
]
</script>
<style>
.swiper-button-next,
.swiper-button-prev {
  color: black;
}
</style>
