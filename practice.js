const firebaseConfig = {
    apiKey: "AIzaSyAZ0jF_VgGRNo18iq16mD5aRqpT22QAgec",
    authDomain: "kwitter-14c7b.firebaseapp.com",
    databaseURL: "https://kwitter-14c7b-default-rtdb.firebaseio.com",
    projectId: "kwitter-14c7b",
    storageBucket: "kwitter-14c7b.appspot.com",
    messagingSenderId: "562150437481",
    appId: "1:562150437481:web:af9a03a26b33027dfd68f8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name=document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}