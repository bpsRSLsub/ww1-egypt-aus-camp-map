
mapboxgl.accessToken = 'pk.eyJ1IjoiYnBzLXJzbCIsImEiOiJjbWJjdzNoZDkxN25yMmlwbTZ4dGlxeDd6In0.hIz4-9zwRgbWi44Ek58i3g';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/bps-rsl/cmbeeexng002d01r37via8wk7',
    center: [31.2357, 30.0444], // Cairo coordinates
    zoom: 6
});

map.on('load', () => {
    fetch('data/camps.json')
        .then(response => response.json())
        .then(data => {
            data.features.forEach(camp => {
                const coords = camp.geometry.coordinates;
                const props = camp.properties;

                const iconUrl = props.corps_icon ? `images/${props.corps_icon}` : 'images/tent-icon.png';
                const el = document.createElement('div');
                el.className = 'marker';
                el.style.backgroundImage = `url(${iconUrl})`;
                el.style.width = '32px';
                el.style.height = '32px';
                el.style.backgroundSize = 'cover';

                const gallery = props.images && props.images.length > 0 ? `
                    <div class="gallery">
                        ${props.images.map(img => `<img src="images/${img}" class="popup-img" onclick="expandImage(this.src)">`).join('')}
                    </div>` : '';

                const popupHtml = `
                    <h3>${props.name}</h3>
                    <p><strong>Corps:</strong> ${props.corps}<br>
                    <strong>Active:</strong> ${props.dates}</p>
                    ${gallery}
                `;

                new mapboxgl.Marker(el)
                    .setLngLat(coords)
                    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(popupHtml))
                    .addTo(map);
            });
        });
});

window.expandImage = function(src) {
    const imgWindow = window.open('', '_blank');
    imgWindow.document.write(`<img src="${src}" style="width:100%">`);
};
