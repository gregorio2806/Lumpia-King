// Lumpia King location (your coordinates)
var lumpiaLocation = [14.65678, 121.03456];

// Initialize map
var map = L.map("map").setView(lumpiaLocation, 16);

// Add FREE OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

// Custom marker icon
var lumpiaIcon = L.icon({
  iconUrl: "image/lumpia.png", // your lumpia image
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 50], // center bottom anchor
  popupAnchor: [0, -50], // popup position
});

// Add marker
L.marker(lumpiaLocation, { icon: lumpiaIcon }).addTo(map).bindPopup("<b>Lumpia King</b><br>Best Lumpia in town!");
