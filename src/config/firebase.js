import {initializeApp} from "firebase/app";
import "firebase/database";

let firebaseConfig = {
    apiKey: "xxx",
    authDomain: "xxxxxxxxx.firebaseapp.com",
    databaseURL: "xxxxxx.firebaseio.com",
    projectId: "XXXXXXXX-firebase",
    storageBucket: "xxxxxxxx-firebase.com",
    messagingSenderId: "xxx",
    appId: "xxx",
};

export default initializeApp(firebaseConfig);
