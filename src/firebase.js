import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCAeJS39XGPjpTDzL_THNzp7CIGxpiQSw0",
    authDomain: "slack-clone-chalange.firebaseapp.com",
    projectId: "slack-clone-chalange",
    storageBucket: "slack-clone-chalange.appspot.com",
    messagingSenderId: "803941308012",
    appId: "1:803941308012:web:2d10b61a79eb4bcd006a49"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;


