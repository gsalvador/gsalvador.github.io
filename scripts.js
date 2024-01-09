/*Map Drawing*/
const x = document.getElementById("demo");
let cLat = 0;
let cLon = 0;

// Centert map and set zoom
const mapOptions = {
    center: [29.72442,-95.39063],
    zoom: 10
}

// Markers pinpoint and popup text
const markers = [
[-95.64577,29.78861,'Satasuma Agency<br><a href=\"https://www.google.com/search?q=rcj+auto+detail+%2B+satasuma+road+%2B+houston+tx&sca_esv=591940846&sxsrf=AM9HkKmJ90umz-6l-Br1qU-gUtQmG_AhTA%3A1702928905841&ei=CaKAZebfMq2zqtsPkbm42AQ&ved=0ahUKEwimiIrE4JmDAxWtmWoFHZEcDksQ4dUDCBA&uact=5&oq=rcj+auto+detail+%2B+satasuma+road+%2B+houston+tx&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgDIixyY2ogYXV0byBkZXRhaWwgKyBzYXRhc3VtYSByb2FkICsgaG91c3RvbiB0eEiJeVCNDViXdXAEeAGQAQCYAasCoAHqCaoBAzItNbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgcQIxiwAhgn4gMEGAAgQYgGAZAGAg&sclient=gws-wiz-serp#\">Google Reviews</a>'],
[-95.59791,29.74131, 'Shadowbriar Agency'],
[-95.07787,29.53261,'League City Agency<br><a href=\"https://www.gstatic.com/images/icons/material/system/1x/directions_gm_blue_18dp.png">How to arrive</a>']
];

// Creating a map object
const map = new L.map('map', mapOptions);

// Creating a Layer object
const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);

// Add markers
markers.forEach(m => {
  const lon = m[0];
  const lat = m[1];
  const text = m[2];

  const markerLocation = new L.LatLng(lat,lon);
  const marker = new L.Marker(markerLocation);

  // Add marker layer to the map
  map.addLayer(marker);

  // Add popup layer text
  marker.bindPopup(text);
});

// Add location control to the map
L.control.locate().addTo(map); 

/* En Map Drawing*/

/* Slides */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
/* End of Slides*/

/* Cards Dialogs*/
let dialog;

function showDialog(element){
  dialog = document.getElementById(element); 
  dialog.style.top = "500px";
  console.log("Show Dialog");
  dialog.showModal();
}

function hideDialog(){
  dialog.close();
}
/* End Cards Dialogs*/