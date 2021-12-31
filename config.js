import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCcFTgMvHGUH8SejJSakR04nL-gKl0R2t8",
  authDomain: "newsletter-5be50.firebaseapp.com",
  databaseURL: "https://newsletter-5be50-default-rtdb.firebaseio.com",
  projectId: "newsletter-5be50",
  storageBucket: "newsletter-5be50.appspot.com",
  messagingSenderId: "596165632027",
  appId: "1:596165632027:web:daf19af9980fdf3e48d8be"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.database();