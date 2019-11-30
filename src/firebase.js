import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCNpOSVS_5q-kgje77pSOb9pfi7SzuWuqY",
    authDomain: "brandon-best-website.firebaseapp.com",
    databaseURL: "https://brandon-best-website.firebaseio.com",
    projectId: "brandon-best-website",
    storageBucket: "brandon-best-website.appspot.com",
    messagingSenderId: "425458463747",
    appId: "1:425458463747:web:668a9a46599cff32030a36",
    measurementId: "G-SWETX4R6YC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;