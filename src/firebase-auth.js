// firebaseAuth.js

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP-8IoWSYxNhvNAHq18yOe5S1B6nZKJQ4",
  authDomain: "task-e1b5f.firebaseapp.com",
  projectId: "task-e1b5f",
  storageBucket: "task-e1b5f.appspot.com",
  messagingSenderId: "877382835559",
  appId: "1:877382835559:web:b315dbc787c26643d323c2",
  measurementId: "G-PZGJGBVYD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to check user
function checkUser() {
    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;
    signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            // User logged in
            console.log('User logged in:', userCredential.user);
            window.location.href = 'index.html';
        })
        .catch((error) => {
            // User does not exist or password is incorrect
            console.error('Login error:', error.message);
            alert('Login failed!');
        });
}

// Function to sign up user
function signUpUser() {
    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;
    createUserWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            // User signed up
            console.log('User signed up:', userCredential.user);
            alert('User signed up successfully!');
            window.location.href = 'index.html';
        })
        .catch((error) => {
            // Error occurred during sign up
            console.error('Sign up error:', error.message);
            alert('Sign up failed!');
        });
}
