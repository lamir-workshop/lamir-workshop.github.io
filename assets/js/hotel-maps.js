document.querySelectorAll('.hotel-map').forEach(function (container) {
  var select = container.querySelector('.hotel-map-select');
  var frame = container.querySelector('iframe');
  var link = container.querySelector('.hotel-map-link');

  select.addEventListener('change', function () {
    var hotel = select.value;
    var query = encodeURIComponent(hotel + ', Belo Horizonte, Brazil');
    frame.src = 'https://www.google.com/maps?q=' + query + '&output=embed';
    frame.title = 'Google Maps: ' + hotel;
    link.href = 'https://www.google.com/maps/search/?api=1&query=' + query;
    link.textContent = 'Open ' + hotel + ' in Google Maps';
  });
});
