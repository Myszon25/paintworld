Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMjkyMWNhZS00YjcxLTRlZjAtYTJlMS1iYjliNjIzZjhhZDQiLCJpZCI6NDU2NDM4LCJzdWIiOiJteXN6b24iLCJpc3MiOiJodHRwczovL2FwaS5jZXNpdW0uY29tIiwiYXVkIjoibXlzem9uX2RlZmF1bHQiLCJpYXQiOjE3ODQwNTA3OTZ9.lzeY6OMxBqQzAl2XGlZpnz4ISkClyR0uPnbi8ActwEM";

const viewer = new Cesium.Viewer("cesiumContainer", {
    terrain: Cesium.Terrain.fromWorldTerrain()
});


viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(
        21.0122,
        52.2297,
        500
    )
});
