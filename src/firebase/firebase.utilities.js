import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAxOh8HXtFOX0JT366iq7hueVaMs9FUfbo",
    authDomain: "kings-db-7b5de.firebaseapp.com",
    databaseURL: "https://kings-db-7b5de.firebaseio.com",
    projectId: "kings-db-7b5de",
    storageBucket: "kings-db-7b5de.appspot.com",
    messagingSenderId: "573498939375",
    appId: "1:573498939375:web:44d0644d2b1ba74e4e881a",
    measurementId: "G-JYP4LK14R8"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestone = firebase.firestore();


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return ;

    const userRef = firestone.doc(`user/${userAuth.uid}`);
    const snapshot =userRef.get();
    if(!snapshot.exists){                 //exists is an attribute in object which tells whether the object has value (true) or not (false)
        const { displayName , email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error);
        }
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;