 const API_KEY="adde09590fc1c3ec4536476d5eb66d37"
// const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
// console.log(API_KEY);
// function renderWeatherInfo(data) {
//         let newPara = document.createElement('p');
//         newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
//         document.body.appendChild(newPara);
// }
// try{
//     as{
//         let city = "goa";

//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//         const data = await response.json();
    
//         console.log("Weather data:-> " , data);

//         renderWeatherInfo(data);

//       }

// ();

// // ek function mein sirf fetch ka kaam karna hai
// // ek function mein sirf data ko process karna hai aur UI mein dikhana hai
// function UI(data){
//     let newPara=document.createElement('p');
//     newPara.textContent=`${data?.main?.temp.toFixed(2)} C`;
//     document.body.appendChild(newPara);
// }
// try{
//     async function fetchWeather(){
//         let lat=15.3333;
//         let lon=74.0833;
//         const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`);
//         const data = await response.json();
//         UI(data); 
//     }
// }
// catch(error){
//     console.error("Error fetching weather data",error);
// }

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         console.log("Geolocation is not supported by this browser.");
//     }
//  }
// function showPosition(position) {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     console.log(`Latitude: ${lat}, Longitude: ${lon}`);
// }
// getLocation();

// function renderWeatherInfo(data) {
//         let newPara = document.createElement('p');
//         newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
//         document.body.appendChild(newPara);
// }

// async function fetchWeatherDetails() {

//     try {
//         let city = "goa";

//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//         const data = await response.json();
    
//         console.log("Weather data:-> " , data);

//         renderWeatherInfo(data);
//     }
//     catch(err) {
//         //handle the error here
//     }
//     //https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric

// }
// fetchWeatherDetails();

function UI(data){
    let newPara=document.createElement('p');
    newPara.textContent=`${data?.main?.temp.toFixed(2)} C`;

    document.body.appendChild(newPara);
}
async function fetchWeather(lat=15.3333,lon=74.0833){
    // let lat=15.3333;
    // let lon=74.0833;
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        UI(data); 
    }
    catch(error){
        console.error("Error fetching weather data",error);
    }
}
fetchWeather();

async function getLocation() {
    try{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    catch(error) {
        console.error("Error getting location", error);
    }
}
function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`Latitude: ${lat}, Longitude: ${lon}`);
    fetchWeather(lat, lon);
}
getLocation();
