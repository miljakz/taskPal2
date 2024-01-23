function checkUser() {
    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;
    firebase.auth().signInWithEmailAndPassword(username, password)
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

function signUpUser() {
    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;
    firebase.auth().createUserWithEmailAndPassword(username, password)
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
