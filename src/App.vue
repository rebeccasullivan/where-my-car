<template>
  <div id="app">
    <span v-if="isLoading" id="marker" class="fas fa-times"></span>
    <ul>
      <li>{{ loc[0] }}</li>
      <li>{{ loc[1] }}</li>
    </ul>
    <img @click="saveLocation($event)" src="./assets/parking-lot.jpg">
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
    loc: locationRef
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
    saveLocation: function (location) {
      const coordinates = {
        leftCoord: location.layerX,
        topCoord: location.layerY
      }
      const marker = document.getElementById('marker')
      marker.style.left = coordinates.leftCoord
      marker.style.top = coordinates.topCoord
      console.log(marker.style.left)
      // console.log(coordinates)
      // console.log(marker)
      // this.loc.set(coordinates)
      return coordinates
    },
    getMarkerCoordinates: function () {
      const marker = document.getElementById('marker')
      marker.style.left = this.leftCoord
      marker.style.top = this.topCoord
      // console.log(marker)
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
