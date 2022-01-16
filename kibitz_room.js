var firebaseConfig = {
      apiKey: "AIzaSyCVLFnH4etwWCEi-NpjcWS-A_kftCv_pvg",
      authDomain: "kwitter-4c66f.firebaseapp.com",
      databaseURL: "https://kwitter-4c66f-default-rtdb.firebaseio.com",
      projectId: "kwitter-4c66f",
      storageBucket: "kwitter-4c66f.appspot.com",
      messagingSenderId: "241238750317",
      appId: "1:241238750317:web:672bb7b515f4f7a528fb64",
      measurementId: "G-WDPLJNM5TF"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
