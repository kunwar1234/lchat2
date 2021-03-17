  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCcbdO0HCtAHkA3uy5pW2yusmaQz6oKWeU",
    authDomain: "kwitter-d9140.firebaseapp.com",
    databaseURL: "https://kwitter-d9140-default-rtdb.firebaseio.com",
    projectId: "kwitter-d9140",
    storageBucket: "kwitter-d9140.appspot.com",
    messagingSenderId: "993805712588",
    appId: "1:993805712588:web:0c6556bb924d1495e55669",
    measurementId: "G-P5V88RGWHZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  function getData() {
    firebase.database.ref("/").on('value',function(snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childsnapshot) { childKey = childsnapshot.key;
      Room_names = childKey;
      console.log("room_names = " + Room_names  );
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      });
    });
  }
  getData();

  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("Room_name", name);
    window.location = "kwitter_page.html";
  }
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
  }