// Placeholder center — reemplazar con coordenadas GPS reales de la propiedad
// Zona estimada: entre Chascomús y Dolores, Ruta 2, Pcia. de Buenos Aires
const propiedadCenter = [-36.32, -57.80];

const map = L.map('map', {
  center: propiedadCenter,
  zoom: 13,
  scrollWheelZoom: false
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

// Pin principal con estilo custom
const pinIcon = L.divIcon({
  className: 'map-pin-container',
  html: '<div class="map-pin-dot"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -12]
});

L.marker(propiedadCenter, { icon: pinIcon })
  .addTo(map)
  .bindPopup('<strong>Azotea Chica</strong><br>Estancia 1865 · 47 ha<br><small>Ruta Nacional 2 · Pcia. de Buenos Aires</small>')
  .openPopup();

// Polígonos de los lotes — coordenadas PLACEHOLDER
// Reemplazar con coordenadas GPS reales de la mensura ESC 1:5000

const loteACoords = [
  [-36.318, -57.804],
  [-36.318, -57.796],
  [-36.324, -57.796],
  [-36.324, -57.804]
];

const loteBCoords = [
  [-36.324, -57.804],
  [-36.324, -57.796],
  [-36.330, -57.796],
  [-36.330, -57.804]
];

const loteCCoords = [
  [-36.310, -57.820],
  [-36.310, -57.796],
  [-36.330, -57.796],
  [-36.330, -57.820]
];

L.polygon(loteACoords, {
  color: '#B8902A',
  fillColor: '#B8902A',
  fillOpacity: 0.25,
  weight: 2
}).addTo(map).bindPopup(
  '<strong>Lote A — Casco</strong><br>8 Ha 00 A<br>Edificaciones, parquización, pileta'
);

L.polygon(loteBCoords, {
  color: '#2C4A2E',
  fillColor: '#2C4A2E',
  fillOpacity: 0.25,
  weight: 2
}).addTo(map).bindPopup(
  '<strong>Lote B — Ruta Prov. 2</strong><br>8 Ha 34 A<br>Frente a antigua Ruta Provincial'
);

L.polygon(loteCCoords, {
  color: '#8A6A3A',
  fillColor: '#8A6A3A',
  fillOpacity: 0.2,
  weight: 2
}).addTo(map).bindPopup(
  '<strong>Lote C — Campo</strong><br>31 Ha 48 A<br>Apto para siembra y ganadería'
);
