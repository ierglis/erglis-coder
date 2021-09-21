import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = ({

    apiKey: "AIzaSyBEi16RmQfQg-3w8Ih4dAD8E7bJ321Kx-4",
    authDomain: "kelder-coder.firebaseapp.com",
    projectId: "kelder-coder",
    storageBucket: "kelder-coder.appspot.com",
    messagingSenderId: "1012310567025",
    appId: "1:1012310567025:web:270e839b6a0e195d7f13d0"

})

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}