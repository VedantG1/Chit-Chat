var name = localStorage.getItem("name");
document.getElementById("name").innerHTML = name + "!";
var firebaseConfig = {
    apiKey: "AIzaSyBCQhpBcuvpnFfeP4yKzBcY1PRyfdITvZc",
    authDomain: "chat-web-app-6e271.firebaseapp.com",
    databaseURL: "https://chat-web-app-6e271-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-6e271",
    storageBucket: "chat-web-app-6e271.appspot.com",
    messagingSenderId: "1045358518587",
    appId: "1:1045358518587:web:6a8ff498c8d3acaa8b571e"
  };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function add(){
      room = document.getElementById("roomSearch").value;

      firebase.database().ref("/").child(room).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room", room)
      window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      room = childKey
      console.log("Room Name - " + room)
      row = "<div class='roomName' id="+room+" onclick='redirect(this.id)'>#"+ room + "</div><hr>"
      document.getElementById("output").innerHTML += row
      });});}
getData();

function redirect(name){
      console.log(name)
      localStorage.setItem("room", name)
      window.location = "kwitter_page.html"
}

function logout(){
      window.location = "index.html"
      localStorage.removeItem("name")
      localStorage.removeItem("room")
}