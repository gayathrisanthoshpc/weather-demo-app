const db = {
  kochi: { t:31, w:"Humid", i:"☁" },
  chennai: { t:34, w:"Sunny", i:"☀" },
  delhi: { t:28, w:"Hazy", i:"🌫" },
  mumbai: { t:30, w:"Cloudy", i:"⛅" },
  bangalore: { t:26, w:"Cool", i:"🌥" }
};

function getWeather(){
  let city = document.getElementById("city").value.toLowerCase().trim();
  let key = Object.keys(db).find(k => k.includes(city));

  let temp, weather, icon;

  if(key){
    temp = db[key].t;
    weather = db[key].w;
    icon = db[key].i;
    city = key;
  } else {
    temp = 25 + Math.floor(Math.random()*10);
    weather = "Partly Cloudy";
    icon = "🌤";
  }

  const wind = 5 + Math.floor(Math.random()*12);
  const humidity = 40 + Math.floor(Math.random()*40);

  const card = document.getElementById("card");
  card.classList.remove("hidden");

  card.innerHTML = `
    <h2>${icon} ${city.toUpperCase()}</h2>
    <p>🌡 Temperature: ${temp} °C</p>
    <p>🌥 Condition: ${weather}</p>
    <p>💨 Wind: ${wind} km/h</p>
    <p>💧 Humidity: ${humidity}%</p>
    <small>Demo Data Mode</small>
  `;
}

document.getElementById("city").addEventListener("keydown", e=>{
  if(e.key === "Enter") getWeather();
});
