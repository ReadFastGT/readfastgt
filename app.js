


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";

const firebaseConfig = {
    // ... (tu configuración de Firebase)
    apiKey: "AIzaSyAJk7XmD6S7BDGmhoyiwphq5xImaaYwPj4",
    authDomain: "readfastgt-c9056.firebaseapp.com",
    projectId: "readfastgt-c9056",
    storageBucket: "readfastgt-c9056.appspot.com",
    messagingSenderId: "564867420580",
    appId: "1:564867420580:web:bed92cf2efb7de81537131",
    measurementId: "G-2P964LXWMS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
// ... (El resto del código sigue igual)

document.getElementById('loginBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href = "reader.html";
        })
        .catch((error) => {
            document.getElementById('errorMessage').textContent = error.message;
            alert('no estas registrado');
        });
});

document.getElementById('registerBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Registro exitoso!');
            window.location.href = "reader.html";

        })
        .catch((error) => {
            document.getElementById('errorMessage').textContent = error.message;
            alert('No se puede registrar');
        });
});
