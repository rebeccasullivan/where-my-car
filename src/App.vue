<template>
  <div id="app">
    <span id="marker" class="fas fa-times"></span>
    <img @click="saveLocation($event)" src="./assets/parking-lot.jpg">
  </div>
</template>

<script>
// import firebase from 'firebase'
import locationRef from '../firebase-config.js'

export default {
  name: 'app',
  firebase: {
    locationRef
  },
  created () {

  },
  data () {

  },
  methods: {
    saveLocation: function (location) {
      const offset = 5

      const coordinates = {
        leftCoord: location.layerX,
        topCoord: location.layerY
      }
      const marker = document.getElementById('marker')
      marker.style.left = `${coordinates.leftCoord - offset}px`
      marker.style.top = `${coordinates.topCoord - offset}px`

      locationRef.set(coordinates)
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
