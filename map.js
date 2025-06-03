mapboxgl.accessToken = 'pk.eyJ1IjoiYnBzLXJzbCIsImEiOiJjbWJjdzNoZDkxN25yMmlwbTZ4dGlxeDd6In0.hIz4-9zwRgbWi44Ek58i3g';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/bps-rsl/cmbeeexng002d01r37via8wk7',
    center: [31.2357, 30.0444], // Cairo coordinates
    zoom: 6.5
});

map.addControl(new mapboxgl.NavigationControl());
