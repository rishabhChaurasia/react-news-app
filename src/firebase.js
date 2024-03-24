import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "news-rapid.firebaseapp.com",
  projectId: "news-rapid",
  storageBucket: "news-rapid.appspot.com",
  messagingSenderId: "106888770024",
  appId: "1:106888770024:web:189a51c488c8337e61f45d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };
