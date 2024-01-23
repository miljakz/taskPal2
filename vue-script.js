<script>
    new Vue({
        el: '#app',
        data: {
            username: '',
            password: ''
        },
        methods: {
            async checkUser() {
                try {
                    const userCredential = await firebase.auth().signInWithEmailAndPassword(this.username, this.password);
                    console.log('User logged in:', userCredential.user);
                    // Handle successful login
                } catch (error) {
                    console.error('Login error:', error.message);
                    // Handle login error
                }
            },
            async signUpUser() {
                try {
                    const userCredential = await firebase.auth().createUserWithEmailAndPassword(this.username, this.password);
                    console.log('User signed up:', userCredential.user);
                    // Handle successful signup
                } catch (error) {
                    console.error('Signup error:', error.message);
                    // Handle signup error
                }
            }
        }
    });
</script>
