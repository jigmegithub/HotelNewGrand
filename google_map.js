// Initialize and add the map
function initMap() {
  // The location of Uluru
  const hotelNewGrand = { lat: 27.469757471013178, lng: 89.63951046838194 };
  // The map, centered at Hotel New Grand
  const map = new google.maps.Map(document.querySelector(".hotel-map"), {
    zoom: 16.5,
    center: hotelNewGrand,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: hotelNewGrand,
    map: map,
  });
}
