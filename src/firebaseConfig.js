import * as firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyA9RVHkbhhxeC2_ZtF-NrbUBQm6cxDZnHE',
  authDomain: 'canton-testing-2019.firebaseapp.com',
  databaseURL: 'https://canton-testing-2019.firebaseio.com',
  projectId: 'canton-testing-2019',
  storageBucket: 'canton-testing-2019.appspot.com',
  messagingSenderId: '593899835906'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()

// firebase collections
const usersCollection = db.collection('users')
const clientsCollection = db.collection('clients')
const equipmentCollection = db.collection('equipment')

export {
  db,
  usersCollection,
  clientsCollection,
  equipmentCollection
}
