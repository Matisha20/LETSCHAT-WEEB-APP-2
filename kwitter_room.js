
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBZ9VD5QqNx_co6no970kxgUA36aJzxM-M",
      authDomain: "let-schat-web-app-1.firebaseapp.com",
      databaseURL: "https://let-schat-web-app-1-default-rtdb.firebaseio.com",
      projectId: "let-schat-web-app-1",
      storageBucket: "let-schat-web-app-1.appspot.com",
      messagingSenderId: "534572704919",
      appId: "1:534572704919:web:08e0a2d59e8a083b35b5d2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";

          firebase.database.ref("/").child(room_name).update({
            purpose: " adding room name"
          });
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr></hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}