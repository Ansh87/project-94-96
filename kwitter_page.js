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
var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");
function send() {
var msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name: user_name,
message: msg , 
like: 0 
});

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(this.id)'";
span_with_tag = "<span class='glyphicon glyphicon-thumb-up'>Likes:" + like + "</span> </button> <hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id) {
button_id = message_id;
likes = document.getElementById(button_id).value;
update_likes = Number(likes) + 1;
console.log(update_likes);
firebase.database().ref(room_name).child(message_id).update({
like: update_likes
});
}
function logOut() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}