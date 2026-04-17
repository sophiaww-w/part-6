const globe = Globe()
(document.getElementById('globe'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
  .backgroundColor('#070a12');

// animated red points
globe
  .pointsData(orgData)
  .pointLat(d => d.lat)
  .pointLng(d => d.lng)
  .pointColor(() => "#ff3b3b")
  .pointRadius(0.6)
  .pointAltitude(0.02)
  .onPointClick(d => {
    window.location.href = `org.html?id=${d.id}`;
  });
