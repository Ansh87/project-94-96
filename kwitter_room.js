const firebaseConfig = {
      apiKey: "AIzaSyBrO3r-KMAryWFf5c6yBqomER0Na_MvOL8",
      authDomain: "eeeeeeeee-b6014.firebaseapp.com",
      databaseURL: "https://eeeeeeeee-b6014-default-rtdb.firebaseio.com",
      projectId: "eeeeeeeee-b6014",
      storageBucket: "eeeeeeeee-b6014.appspot.com",
      messagingSenderId: "775318362923",
      appId: "1:775318362923:web:c9adbce11474fbf19b036e"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addRoom() {
room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({
purpose: "adding room name" , 
});
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";
}
function logOut() {
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location = "index.html";


}