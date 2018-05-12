import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDDA0WXyQ6BiN9K36Eswc-TSY387lPUkS4',
  authDomain: 'where-my-car-app.firebaseapp.com',
  databaseURL: 'https://where-my-car-app.firebaseio.com',
  projectId: 'where-my-car-app',
  storageBucket: '',
  messagingSenderId: '175319837102'
};
const app = firebase.initializeApp(config);

const db = app.database()
let locationRef;

locationRef = db.ref('location')

export default locationRef
