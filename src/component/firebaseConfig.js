import firebase from 'firebase/app' // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';
import Axios from 'axios'

// Initialize Firebase
let config = {
  apiKey: "AIzaSyAiWXS2fY6w95Dh0Y7NrTqolY0OX6d0PeQ",
  authDomain: "le2-service.firebaseapp.com",
  databaseURL: "https://le2-service.firebaseio.com",
  projectId: "le2-service",
  storageBucket: "le2-service.appspot.com",
  messagingSenderId: "155677930835",

}

firebase.initializeApp(config)

const db = firebase.firestore()

export { Axios, db }