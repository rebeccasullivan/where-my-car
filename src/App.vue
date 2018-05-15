<template>
  <div id="app">
    <span id="marker" class="fas fa-hand-point-right"
      :style="{ left: leftCoord + 'px', top: topCoord + 'px' }">
    </span>
    <img @click="saveCoordinates($event)" src="./assets/parking-lot.jpg">
  </div>
</template>

<script>
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDeET-CS0Pci3KI7KGYmzNfLsGWrgb7Cbc',
  authDomain: 'where-my-car-f434e.firebaseapp.com',
  databaseURL: 'https://where-my-car-f434e.firebaseio.com',
  projectId: 'where-my-car-f434e',
  storageBucket: 'where-my-car-f434e.appspot.com',
  messagingSenderId: '528344319027'
}

const db = firebase.initializeApp(config).database()
const locationRef = db.ref('location')

export default {
  name: 'app',
  firebase: {
    location: {
      source: locationRef,
      asObject: true,
      readyCallback: function () {
        this.leftCoord = this.location.leftCoord
        this.topCoord = this.location.topCoord
      }
    }
  },
  data () {
    return {
      leftCoord: '',
      topCoord: ''
    }
  },
  methods: {
    saveCoordinates: function (clickEvent) {
      const coordinates = {
        leftCoord: clickEvent.layerX - 68,
        topCoord: clickEvent.layerY - 26
      }
      this.leftCoord = coordinates.leftCoord
      this.topCoord = coordinates.topCoord
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
  font-size: 70px;
  color: #00ffff;
  position: absolute;
}
img {
  width: 100%;
}
</style>
