<script setup>
import { onMounted, ref } from 'vue'

const mapContainer = ref(null);

onMounted(() => {
  if (!window.ymaps) {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=0c5687f3-8cfe-484a-ac15-8d21770b0993&lang=ru_RU';
    script.onload = () => initMap();
    document.head.appendChild(script);
  } else {
    initMap();
  }
});

const initMap = () => {
  window.ymaps.ready(() => {
    const map = new window.ymaps.Map(mapContainer.value, {
      center: [55.751574, 37.573856], // Москва
      zoom: 10
    });
  });
};

</script>

<template>
  <div class="map-container">
    <div ref="mapContainer" class="map"></div>
  </div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}

.map {
  width: 100%;
  height: 600px;
}
</style>
