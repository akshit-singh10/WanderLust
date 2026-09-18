const map = new mapboxgl.Map({
    accessToken: maptoken,
    container: 'map', // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 5 // starting zoom
});

console.log(listing.geometry.coordinates);


const el = document.createElement('div');
el.innerHTML = '<i class="fa-solid fa-house"></i>';
el.style.color = '#fe424d'; // Airbnb-style red, or any color you want
el.style.fontSize = '28px';

const marker2 = new mapboxgl.Marker({ element: el })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${listing.location}</h3><p>Exact location will be provided after Booking.</p>`
        )
    )
    .addTo(map);
