// src/lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB3o8WdkaRchWYOHD68iNc5AgyfLFEbn6A",
  authDomain: "musaic-374f6.firebaseapp.com",
  projectId: "musaic-374f6",
  storageBucket: "musaic-374f6.appspot.com",
  messagingSenderId: "967954541083",
  appId: "1:967954541083:web:819f540d0531fd972566be",
  measurementId: "G-V2NBVXE7KP",
  databaseURL: "https://musaic-374f6-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
