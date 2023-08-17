var myCenter=new google.maps.LatLng(-20.3465746, -40.3193663);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:18,
  scrollwheel: false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"<b>UMADES</b><br/>Rua Pastor João Pedro da Silva nº47<br/>Ataíde - Vila Velha - ES - Brasil<br/>CEP: 29119-024<br/>Tel.: 27 997 361 314"
  });

infowindow.open(map,marker);
marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);