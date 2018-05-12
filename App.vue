<template>
  <div id="app">
    <span id="marker" class="fas fa-times"></span>
    <img @click="saveLocation($event)" src="./assets/parking-lot.jpg">
  </div>
</template>

<script>
import locationRef from '../firebase-config.js'

export default {
  name: 'app',
  mounted () {
    console.log(locationRef)
  },
  methods: {
    saveLocation: function (location) {
      const offset = 5
      const x = location.layerX
      const y = location.layerY

      const marker = document.getElementById('marker')
      marker.style.left = `${x - offset}px`
      marker.style.top = `${y - offset}px`
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#marker {
  color: red;
  position: absolute;
}
img {
  width: 100%;
}
</style>
