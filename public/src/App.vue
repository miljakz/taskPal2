<template>
  <div id="app">
    <button @click="checkUser">Login</button>
    <button @click="signUpUser">Sign Up</button>
  </div>
</template>

<script>
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  methods: {
    checkUser() {
      const username = this.username;
      const password = this.password;
      signInWithEmailAndPassword(this.$auth, username, password)
        .then((userCredential) => {
          console.log('User logged in:', userCredential.user);
          this.$router.push('/home');
        })
        .catch((error) => {
          console.error('Login error:', error.message);
          alert('Login failed!');
        });
    },
    signUpUser() {
      const username = this.username;
      const password = this.password;
      createUserWithEmailAndPassword(this.$auth, username, password)
        .then((userCredential) => {
          console.log('User signed up:', userCredential.user);
          alert('User signed up successfully!');
          this.$router.push('/home');
        })
        .catch((error) => {
          console.error('Sign up error:', error.message);
          alert('Sign up failed!');
        });
    }
  }
}
</script>
