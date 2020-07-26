import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAxOh8HXtFOX0JT366iq7hueVaMs9FUfbo",
  authDomain: "kings-db-7b5de.firebaseapp.com",
  databaseURL: "https://kings-db-7b5de.firebaseio.com",
  projectId: "kings-db-7b5de",
  storageBucket: "kings-db-7b5de.appspot.com",
  messagingSenderId: "573498939375",
  appId: "1:573498939375:web:44d0644d2b1ba74e4e881a",
  measurementId: "G-JYP4LK14R8"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

//adding object to the firestore

export const addCollectionAndDocuments =async (collectionKey , collectionData) => {
  const CollectionRef = firestore.collection(collectionKey);
  const batch =firestore.batch();
  collectionData.forEach(obj => {
    const newDocRef = CollectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
}

export const convertCollectionSnapshotToMap= (collection) => {
  const transformedCollection = collection.docs.map(doc => {
    const {title, items } =doc.data();
    return {
      routeName : encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    } 
  })
  return transformedCollection.reduce((accumulator,collection) => {
    accumulator[collection.title.toLowerCase()] =collection;
    return accumulator;
  },{})
  
}

export const getCurrentUser = () => {
  return new Promise((resolve,reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    },reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
