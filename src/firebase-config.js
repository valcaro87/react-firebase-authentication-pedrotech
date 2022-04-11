import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-J6UbZdSwZpPn3hFKLe-1v6PB46B_hcc",
  authDomain: "fir-pedrotech-fd917.firebaseapp.com",
  projectId: "fir-pedrotech-fd917",
  storageBucket: "fir-pedrotech-fd917.appspot.com",
  messagingSenderId: "1019628206708",
  appId: "1:1019628206708:web:c22ad0afa6cea21309af21"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
