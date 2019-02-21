const section = document.querySelector('section');
const template = document.querySelector('#myTemp').content;


const link = "https://spreadsheets.google.com/feeds/list/19QrejBkQpdKSyKoq332bT1e08lauAzffIzo-p5pYTzk/od6/public/values?alt=json";


function loadJSON(link) {
    fetch(link).then(e=>e.json()).then(data=>data.feed.entry.forEach(displayDrzewka));
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function displayDrzewka(data) {
  const clone = template.cloneNode('true');
    clone.querySelector("h1").textContent = data.gsx$name.$t;
     clone.querySelector(".latin").textContent = data.gsx$latin.$t;
     clone.querySelector(".origin").textContent = data.gsx$origin.$t;
   const img



    section.appendChild(clone);
}
loadJSON(link);




