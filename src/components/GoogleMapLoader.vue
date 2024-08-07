<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: 40.992915391880366, lng: 29.153225655310038 }
</script>

<template>
  <div class="relative overflow-hidden rounded-3xl" style="width: 100%; height: 100%;">
    <GoogleMap
      api-key="Google API key"
      :center="center"
      :zoom="15"
      style="width: 100%; height: 100%;"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>
