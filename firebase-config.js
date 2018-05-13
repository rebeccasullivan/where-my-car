import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDeET-CS0Pci3KI7KGYmzNfLsGWrgb7Cbc",
  authDomain: "where-my-car-f434e.firebaseapp.com",
  databaseURL: "https://where-my-car-f434e.firebaseio.com",
  projectId: "where-my-car-f434e",
  storageBucket: "where-my-car-f434e.appspot.com",
  messagingSenderId: "528344319027"
};
const app = firebase.initializeApp(config);

const db = app.database()
let locationRef;

locationRef = db.ref('location')

export default locationRef
