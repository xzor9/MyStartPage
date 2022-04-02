//Make all links open in new tab
var links= document.getElementsByTagName('a');
for (var i=0; i<links.length; i++){
   links[i].setAttribute('target', '_blank');
}

// Output time
function updateClock(){
   let today = new Date();

   // Format minutes to show leading 0
   const tempMinutes = today.getMinutes()
   const minutes = (tempMinutes < 10) ? `0${tempMinutes}` : tempMinutes

   // Format seconds to show leading 0
   const tempSeconds = today.getSeconds()
   const seconds = (tempSeconds < 10) ? `0${tempSeconds}` : tempSeconds

   var time = today.getHours() + ":" + minutes + ":" + seconds;
    
   document.getElementById('time').innerHTML=time;
   setTimeout(updateClock, 1000);
}
updateClock();

// Output date
let today = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];

let date = day+' '+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById('date').innerHTML=date;


// Weather with Openweathermap API
var key = config.OpenweathermapKey
var link = "https://api.openweathermap.org/data/2.5/weather?q=Montreal&units=metric&apikey=" + key
console.log(key)
console.log(link)
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
 var obj = JSON.parse(this.response);
 if (request.status >= 200 && request.status < 400) {
    console.log(obj)
    var temp = obj.main.temp;
    document.getElementById('weather').innerHTML=temp;  //display current temperature

    var iconCode = obj.weather[0].icon;
    var iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`

    document.getElementById('weatherIcon').innerHTML=`<img src="${iconUrl}">` //insert icon logo
 }
 else{
  console.log("Error with the city");
 }
}
request.send();

//Search bar

document.querySelector('#ddg').addEventListener('click', searchDdg)
document.querySelector('#google').addEventListener('click', searchGoogle)
document.querySelector('#reddit').addEventListener('click', searchReddit)

function searchDdg()
{
   const query = document.querySelector('#search').value
   url ='https://duckduckgo.com/?q=' + query;
   window.open(url,'_blank');
}

function searchGoogle()
{
   const query = document.querySelector('#search').value
   url ='http://www.google.com/search?q=' + query;
   window.open(url,'_blank');
}

function searchReddit()
{
   const query = document.querySelector('#search').value
   url ='https://www.google.com/search?q=site%3Areddit.com+' + query;
   window.open(url,'_blank');
}