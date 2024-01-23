function checkUser() {
    var email = document.getElementById('uname').value;
    var password = document.getElementById('psw').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
 
        window.location.href = "index.html"; // for example
    })
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage); // You can display the error message to your user here.
    });
}


function signUpUser() {
    var email = document.getElementById('uname').value;
    var password = document.getElementById('psw').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        
        window.location.href = "index.html"; // for example
    })
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage); // You can display the error message to your user here.
    });
}

