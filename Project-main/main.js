  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  import { getDatabase, ref, set, onValue, get, child, push, update } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCEO3NEq5QLIwaIITq9KeI2Mkl_bIbAU5o",
    authDomain: "mine-83eee.firebaseapp.com",
    databaseURL: "https://mine-83eee-default-rtdb.firebaseio.com",
    projectId: "mine-83eee",
    storageBucket: "mine-83eee.appspot.com",
    messagingSenderId: "972937023255",
    appId: "1:972937023255:web:51a75cbdabc2cae7c53152",
    measurementId: "G-XPY0RM218J"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const db = getDatabase(app);

onValue(ref(db,"Current_Mode"),(snapshot)=>{
    let data = snapshot.val();
  console.log(data);
})

onValue(ref(db,"Relay1"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})

onValue(ref(db,"Relay2"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})

onValue(ref(db,"Relay3"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})
onValue(ref(db,"Relay_Alternator:"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})
onValue(ref(db,"Relay_Battery:"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})
onValue(ref(db,"Relay_Inverter:"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})
onValue(ref(db,"Relay_Mode:"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})
onValue(ref(db,"Status_Mode:000"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})
onValue(ref(db,"Status_Mode:001"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})
onValue(ref(db,"Status_Mode:010"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})
onValue(ref(db,"Status_Mode:011"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})
onValue(ref(db,"Status_Mode:100"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})

onValue(ref(db,"Status_Mode:101"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})

onValue(ref(db,"Status_Mode:110"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})

onValue(ref(db,"Status_Mode:111"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})

onValue(ref(db,"Voltage_Sensor:"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
})

