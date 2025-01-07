function initGoogleAPI() {
    gapi.load('auth2', function () {
        gapi.auth2.init({
            client_id: '1068623121603-jk9g47mjqq4v689ugd9u83m0efpurgju.apps.googleusercontent.com'
        });
    });
}

window.onload = function () {
    initGoogleAPI();
};

function signInWithGoogle() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(function (googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('User signed in: ' + profile.getName());
        console.log('Email: ' + profile.getEmail());
    });
}

function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const signUpForm = document.querySelector(".sign-up-form");
const signInForm = document.querySelector(".sign-in-form");
const usernameInputSignUp = signUpForm.querySelector('input[type="text"]');
const emailInput = signUpForm.querySelector('input[type="email"]');
const passwordInputSignUp = signUpForm.querySelector('input[type="password"]');
const usernameInputSignIn = signInForm.querySelector('input[type="text"]');
const passwordInputSignIn = signInForm.querySelector('input[type="password"]');

signUpBtn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

signInBtn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

signUpForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let valid = true;

    if (usernameInputSignUp.value.trim() === "") {
        valid = false;
        alert("Username is required.");
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value)) {
        valid = false;
        alert("Please enter a valid email address.");
    }

    if (passwordInputSignUp.value.length < 6) {
        valid = false;
        alert("Password must be at least 6 characters long.");
    }

    if (valid) {
        alert("Sign Up successful!");
    }
});

signInForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let valid = true;

    if (usernameInputSignIn.value.trim() === "") {
        valid = false;
        alert("Username is required.");
    }

    if (passwordInputSignIn.value.length < 6) {
        valid = false;
        alert("Password must be at least 6 characters long.");
    }

    if (valid) {
        alert("Login successful!");
    }
});
