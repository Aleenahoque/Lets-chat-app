
var firebaseConfig = {
      apiKey: "AIzaSyBGKtfb5nLN1z6naXflme8ffGg4XFPc38s",
      authDomain: "kwitter-app-dbb85.firebaseapp.com",
      databaseURL: "https://kwitter-app-dbb85-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-dbb85",
      storageBucket: "kwitter-app-dbb85.appspot.com",
      messagingSenderId: "95300251813",
      appId: "1:95300251813:web:4ffb70fb9f99c31988dd4c"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name +"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({   
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);

window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}