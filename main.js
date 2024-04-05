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

onValue(ref(db,"Current_Mode:"),(snapshot)=>{
    let data = snapshot.val();
    document.getElementById("cm").innerHTML= data;
})

onValue(ref(db,"Relay1"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("r1").innerHTML= data;
})

onValue(ref(db,"Relay2"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("r2").innerHTML= data;
})

onValue(ref(db,"Relay3"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("r3").innerHTML= data;
})
onValue(ref(db,"Relay_Alternator:"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("ra").innerHTML= "relay alternator "+data;
})
onValue(ref(db,"Relay_Battery:"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("rb").innerHTML= "relay battery "+data;
})
onValue(ref(db,"Relay_Inverter:"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("ri").innerHTML= "relay inverter "+data;
})
onValue(ref(db,"Relay_Mode:"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("rm").innerHTML= +data;
})
onValue(ref(db,"Status_Mode:000"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("sm000").innerHTML= data;
})
onValue(ref(db,"Status_Mode:001"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("sm001").innerHTML= data;
})
onValue(ref(db,"Status_Mode:010"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("sm010").innerHTML= data;
})
onValue(ref(db,"Status_Mode:011"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("sm011").innerHTML= data;
})
onValue(ref(db,"Status_Mode:100"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("sm100").innerHTML= data;
})

onValue(ref(db,"Status_Mode:101"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("sm101").innerHTML= data;
})

onValue(ref(db,"Status_Mode:110"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("sm110").innerHTML= data;
})

onValue(ref(db,"Status_Mode:111"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("sm111").innerHTML= data;
})

onValue(ref(db,"Voltage_Sensor:"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("vs").innerHTML= data;
})
onValue(ref(db,"wifi-status"),(snapshot)=>{
    let data = snapshot.val();
    console.log(data);
    document.getElementById("wifi").innerHTML= data;
})



    $(document).ready(function() {
        $("#logButton").click(function() {
            var selectedOption = $("#options").val();
            if (selectedOption === "option1") {
                window.open('https://maps.app.goo.gl/xrEJjDJVq6Q2YtLd7', '_blank');
            } else if (selectedOption === "option2") {
                window.open('https://www.google.com/maps/dir/Current+Location/11.265609720672957, 77.59511806527308', '_blank');
            } else if (selectedOption === "option3") {
                window.open('https://www.google.com/maps/dir/Current+Location/11.244754761760385, 77.57797507642324', '_blank');
            }else if (selectedOption === "option4") {
                window.open('https://www.google.com/maps/dir/Current+Location/11.266355784528148, 77.58970023993389', '_blank');
            }
            else if (selectedOption === "option5") {
                window.open('https://www.google.com/maps/dir/Current+Location/11.27158918988406, 77.57261139329988', '_blank');
            }
        });
    });

    $(document).ready(function(){
        var map = L.map('map', {
            center: [0, 0], // Initial map center
            zoom: 15, // Initial zoom level
            zoomControl: true // Enable zoom controls
        });
        // Add the OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        
        
        // Define the main location coordinates and create a marker
        var mainLocation = L.marker([11.27424741970588, 77.60811097992051]).addTo(map);
        mainLocation.bindPopup("<b>Main Location</b>").openPopup();
    
        // Define static locations with coordinates and create markers
        var staticLocations = [
            { name: "Location 1", coordinates: [11.302545726302762, 77.60083508466376] },
            { name: "Location 2", coordinates: [11.295524627555608, 77.58267044475112] },
            { name: "Location 3", coordinates: [11.3417371179852, 77.67132080280179] },
            { name: "Location 4", coordinates: [11.266355784528148, 77.58970023993389] },
            { name: "Location 5", coordinates: [11.3417371179852, 77.67132080280179] }
        ];
    
        staticLocations.forEach(location => {
            var marker = L.marker(location.coordinates).addTo(map);
            marker.bindPopup(`<b>${location.name}</b><br>Coordinates: ${location.coordinates}`).on('mouseover', function() {
                this.openPopup();
            }).on('mouseout', function() {
                this.closePopup();
            });
        });
    });
