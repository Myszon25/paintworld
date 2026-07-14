const map = L.map('map').setView(
[50.0413,21.9990],
14
);


L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
maxZoom:19
}
).addTo(map);


// testowy marker
L.marker([50.0413,21.9990])
.addTo(map)
.bindPopup(
"Kliknij i otwórz Street View AI"
);
