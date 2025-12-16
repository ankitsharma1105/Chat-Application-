// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBJUGeht14HlnQcFgevFaxkepaLj6fFXdQ",
  authDomain: "chat-application-gs-f3985.firebaseapp.com",
  projectId: "chat-application-gs-f3985",
  storageBucket: "chat-application-gs-f3985.firebasestorage.app",
  messagingSenderId: "170688710280",
  appId: "1:170688710280:web:d33fb5699887f720f3c13d",
  measurementId: "G-TZY4RSJJ5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey , There i am using chat app",
      lastSeen: Date.now()
    })
    await setDoc(doc(db, "chats", user.uid), {
      chatData: []
    })
  } catch (error) {
    console.error(error)
  }
}