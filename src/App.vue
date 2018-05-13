<template>
  <div id="app">
    <span id="marker" class="fas fa-times"></span>
    <img @click="saveLocation($event)" src="./assets/parking-lot.jpg">
  </div>
</template>

<script>
import firebase from 'firebase'
import locationRef from '../firebase-config.js'

export default {
  name: 'app',
  firebase: {
    loc: locationRef
  },
  data () {
    return {
      leftCoord: '',
      topCoord: ''
    }
  },
  methods: {
    saveLocation: function (location) {
      const coordinates = {
        leftCoord: location.layerX,
        topCoord: location.layerY
      }
      console.log(coordinates)
      // this.loc.set(coordinates)
      return coordinates
    },
    setMarker: function () {
      marker = document.getElementById('marker')
      marker.style.left = this.leftCoord
      marker.style.top = this.topCoord
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
  color: pink;
  position: absolute;
}
img {
  width: 100%;
}
</style>
