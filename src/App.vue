<template>
  <div id="app">
    <span v-if="isLoading" id="marker" class="fas fa-times"></span>
    <ul>
      <li>{{ location[0] }}</li>
      <li>{{ location[1] }}</li>
    </ul>
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
const app = firebase.initializeApp(config)

const db = app.database()
const locationRef = db.ref('location')

export default {
  name: 'app',
  firebase: {
    location: locationRef
  },
  mounted () {
    this.isLoading = true
  },
  data () {
    return {
      isLoading: false,
      leftCoord: '',
      topCoord: ''
    }
  },
  methods: {
    updateMarker: function () {
      const left = this.location.leftCoordinate
      const top = this.location.topCoordinate
      const marker = document.getElementById('marker')
      marker.style.left = left
      marker.style.top = top
      // console.log(marker.style.left)
      // console.log(coordinates)
      // console.log(marker)
      // this.loc.set(coordinates)
    },
    saveCoordinates: function (clickEvent) {
      const coordinates = {
        leftCoordinate: clickEvent.layerX,
        topCoordinate: clickEvent.layerY
      }
      this.location.set(coordinates)
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
