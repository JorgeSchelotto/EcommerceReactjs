import * as firebase from 'firebase/app';



const app = firebase.initializeApp({
    apiKey: "AIzaSyCRhwmsOtiQDvDQcY6ZH2lpRvHBFCugkW4",
    authDomain: "extremosur-8ce94.firebaseapp.com",
    databaseURL: "https://extremosur-8ce94.firebaseio.com",
    projectId: "extremosur-8ce94",
    storageBucket: "extremosur-8ce94.appspot.com",
    messagingSenderId: "564439171163",
    appId: "1:564439171163:web:165929010a201a979f7f7e",
    measurementId: "G-QZVLKZZTVB"
  });


  export function getFirebase() {
      return app;
  }

  export function getFirestone() {
      return firebase.firestone(app)
  }