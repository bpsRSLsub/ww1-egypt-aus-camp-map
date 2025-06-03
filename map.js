mapboxgl.accessToken = 'pk.eyJ1IjoiYnBzLXJzbCIsImEiOiJjbWJjdzNoZDkxN25yMmlwbTZ4dGlxeDd6In0.hIz4-9zwRgbWi44Ek58i3g';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/bps-rsl/cmbeeexng002d01r37via8wk7',
  center: [32.6, 30.0],
  zoom: 6
});

map.addControl(new mapboxgl.NavigationControl());
