const map = L.map('map').setView([30.0, 31.0], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

fetch('data/camps.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(camp => {
      const icon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25]
      });

      const marker = L.marker([camp.lat, camp.lng], { icon }).addTo(map);
      let popupContent = `<strong>${camp.name}</strong><br/>`;
      popupContent += `<b>Duration:</b> ${camp.duration}<br/>`;
      popupContent += `<b>Corps:</b> ${camp.corps.join(', ')}<br/>`;
      if (camp.images && camp.images.length > 0) {
        popupContent += camp.images.map(img => `<br/><a href="${img}" target="_blank"><img src="${img}" width="100"/></a>`).join("");
      }
      marker.bindPopup(popupContent);
    });
  });