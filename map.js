
const map = L.map('map').setView([30.05, 31.25], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

const camps = [
  {
    name: "Mena Camp",
    coords: [29.9944, 31.1342],
    duration: "Dec 1914 – Apr 1915",
    corps: "1st Australian Division",
    notes: "Located near the Pyramids; used for early training after arrival in Egypt."
  },
  {
    name: "Heliopolis Camp",
    coords: [30.1106, 31.3134],
    duration: "Dec 1914 – Apr 1915",
    corps: "Light Horse Brigades",
    notes: "Near the Heliopolis Palace Hotel; used by mounted troops."
  },
  {
    name: "Maadi Camp",
    coords: [29.9600, 31.2611],
    duration: "Late 1914 – Apr 1915",
    corps: "Training Base for Reinforcements",
    notes: "Situated south of Cairo; known for discipline and structured training."
  },
  {
    name: "Zeitoun Camp",
    coords: [30.0900, 31.3000],
    duration: "1915",
    corps: "Additional training & transit base",
    notes: "Used for newly arriving units and staging before deployment."
  }
];

camps.forEach(camp => {
  L.marker(camp.coords)
    .addTo(map)
    .bindPopup(`<strong>${camp.name}</strong><br>
                Duration: ${camp.duration}<br>
                Corps: ${camp.corps}<br>
                ${camp.notes}`);
});
