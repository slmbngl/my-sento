<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: 40.992915391880366, lng: 29.153225655310038 }
</script>
// 40.992915391880366, 29.153225655310038
<template>
  <GoogleMap
  api-key="Google API key"
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>