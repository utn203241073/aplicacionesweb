const API_KEY_MAPAS = "AIzaSyARJ8lDlhVR4orZ78OU28170TKCFQTyJyY"
let map;
let utnLab;
let marcador;

var script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY_MAPAS}&callback=initMap`;
script.async = true;

window.initMap = function () {
    utnLab = {lat: 19.4040032, lng: -98.9880654};
    map = new google.maps.Map(document.getElementById("divMapaGoogle"), {
        center: utnLab,
        zoom: 19.54,
    });
    marcador = new google.maps.Marker({
        position: utnLab,
        map: map,
    });
};

document.head.appendChild(script);