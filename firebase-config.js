// Firebase configuration
// Replace these values with your Firebase project config from:
// Firebase Console > Project Settings > Your apps > Config

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Allowed email domain (PLU)
const ALLOWED_DOMAIN = "plu.edu";

// Export for use in app
window.firebaseConfig = firebaseConfig;
window.ALLOWED_DOMAIN = ALLOWED_DOMAIN;
