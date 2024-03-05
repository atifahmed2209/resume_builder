import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyALLqSRBmAK91cjCI-VRK0VjjpIjjVgJ2k",
    authDomain: "resume-87f8b.firebaseapp.com",
    projectId: "resume-87f8b",
    storageBucket: "resume-87f8b.appspot.com",
    messagingSenderId: "377312133043",
    appId: "1:377312133043:web:dc32dcca586ab79a05d5c6"
  };
  
  const app = initializeApp(firebaseConfig);

  const db=getDatabase(app);

  


  document.getElementById("submit").addEvebntListener('click',function(e)
  {
    set(ref(db, 'user/' + document.getElementById("username").value),
    {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        PhoneNumber: document.getElementById("phone").value,
    });
    alert(" Login successful  !");
  })