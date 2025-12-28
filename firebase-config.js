// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaSjlZOPDGTDhlfjOnmmMW6QAmi3ru0cQ",
    authDomain: "plu-scheduler.firebaseapp.com",
    projectId: "plu-scheduler",
    storageBucket: "plu-scheduler.firebasestorage.app",
    messagingSenderId: "786168405720",
    appId: "1:786168405720:web:3aa9e4b8a47f4fa56cc1ad"
};

// Allowed email domain (PLU)
// TODO: Change back to "plu.edu" for production
const ALLOWED_DOMAIN = null; // null = allow any domain for testing

// Export for use in app
window.firebaseConfig = firebaseConfig;
window.ALLOWED_DOMAIN = ALLOWED_DOMAIN;
