  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAkZKJ3U7XNtgOZK_jJ1Ny-JZSmOJ48CUI",
    authDomain: "todo-list-57afa.firebaseapp.com",
    databaseURL: "https://todo-list-57afa-default-rtdb.firebaseio.com",
    projectId: "todo-list-57afa",
    storageBucket: "todo-list-57afa.appspot.com",
    messagingSenderId: "310115755063",
    appId: "1:310115755063:web:b3187b1c2667d09a714bb2",
    measurementId: "G-94XYD1YNC2"
  };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getDatabase(app);

   