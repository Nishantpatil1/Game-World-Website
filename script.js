 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
 import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBmJnF7C3xwl91AkxpumnTx4u6MgE3maCg",
   authDomain: "auth-e6b27.firebaseapp.com",
   databaseURL: "https://auth-e6b27-default-rtdb.firebaseio.com",
   projectId: "auth-e6b27",
   storageBucket: "auth-e6b27.appspot.com",
   messagingSenderId: "550089382652",
   appId: "1:550089382652:web:afff1447205a3e235fd579"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);
 const auth = getAuth();

 sighup.addEventListener('click', (e) => {
   var email = document.getElementById('email').value;
   var name = document.getElementById('name').value;
   var password = document.getElementById('password').value;

   createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;

       set(ref(database, 'users/' + user.uid), {
         name: name,
         email: email

       })
       alert("User Created!!");
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       alert(errorMessage);
       // ..
     });
 });

 loggin.addEventListener('click', (e) => {
   var email = document.getElementById('emaill').value;
   var password = document.getElementById('passwordd').value;

   signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {

       // Signed in 
       const user = userCredential.user;

       const dt = new Date();
       update(ref(database, 'users/' + user.uid), {
         last_login: dt,
       })
       alert("User Logged In!!");
       window.location.href = "dashboard.html";
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       alert(errorMessage);
     });

 });
