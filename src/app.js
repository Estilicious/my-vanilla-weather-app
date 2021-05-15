function displayTemperature (response){
    console.log(response.data);
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
}

let apiKey="6ee93f63f08e0073ad97e7e8155d775c";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);