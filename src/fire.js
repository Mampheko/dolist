import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB6qUaofx-5gMvAI-rz-QcuW3SOvtX1zE8",
    authDomain: "dolist-84fc1.firebaseapp.com",
    projectId: "dolist-84fc1",
    storageBucket: "dolist-84fc1.appspot.com",
    messagingSenderId: "1019777969746",
    appId: "1:1019777969746:web:1b09f21dde8490a8abf98b"
  };
  
  const app = initializeApp(firebaseConfig);

  export default app;