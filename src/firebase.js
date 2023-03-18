import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA50H5u_AouLMWRdlrbakooozQKwhfBYY4",
  authDomain: "auth-yt-f60ce.firebaseapp.com",
  projectId: "auth-yt-f60ce",
  storageBucket: "auth-yt-f60ce.appspot.com",
  messagingSenderId: "1035877129178",
  appId: "1:1035877129178:web:ff03848da41d328c08fee3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
