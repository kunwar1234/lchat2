  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBx3BwXm5KEUkPCJ_nDXRFttbxpCRQ8tu4",
    authDomain: "practice-4ee49.firebaseapp.com",
    databaseURL: "https://practice-4ee49-default-rtdb.firebaseio.com",
    projectId: "practice-4ee49",
    storageBucket: "practice-4ee49.appspot.com",
    messagingSenderId: "510047660295",
    appId: "1:510047660295:web:11be028160ad262213bda2",
    measurementId: "G-Z3136913G0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose: "adding user"});
  }