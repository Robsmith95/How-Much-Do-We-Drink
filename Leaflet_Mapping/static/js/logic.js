// Creating map object
// tile layer
var lightmap = L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 10,
    id: 'light-v10',
    accessToken: API_KEY,
  },
);

// Layers
var layers = {
  High_Alcohol_Consumption: new L.layergroup(),
  Medium_Alcohol_Consumption: new L.layergroup(),
  Low_Alcohol_Consumption: new L.layergroup(),
};

// Creating Map Object with layers
var myMap = L.map("map-id", {
  center: [21.5, -77.8],
  zoom: 2,
  layers: [
    layers.High_Alcohol_Consumption,
    layers.Medium_Alcohol_Consumption,
    layers.Low_Alcohol_Consumption,
  ],
});

// Lightmap addition for tile layer
lightmap.addTo(myMap)

// Overlay object for Legend
var overlays = {
  'High Alcohol Consumption': layers.High_Alcohol_Consumption,
  'Medium Alcohol Consumption': layers.Medium_Alcohol_Consumption,
  'Low Alcohol Consumption': layers.Low_Alcohol_Consumption,
};

// Layer Control
L.control.layers(null, overlays).addTo(myMap);

// Legend creation
var info = L.control({
  position: 'bottomright',
});
info.onAdd = function () {
  var div = L.DomUtil.create('div', 'legend');
  return div;
};
info.addTo(myMap);

var icons = {
  High_Alcohol_Consumption: L.ExtraMarkers.icon({
    icon: 'ion-minus-circled',
    inconColor: 'white',
    markerColor: 'red',
    shape: 'circle',
  }),
  Medium_Alcohol_Consumption: L.ExtraMarkers.icon({
    icon: 'ion-minus-circled',
    inconColor: 'white',
    iconMarker: 'blue',
    shape: 'circle',
  }),
  Low_Alcohol_Consumption: L.ExtraMarkers.icon({
    icon: 'ion-minus-circled',
    inconColor: 'white',
    markerColor: 'yellow',
    shape: 'circle',
  }),
};
console.log(icons);


// read JSON file
d3.json('js/CAR_coordinates.geoJSON', function (AlcCon) {
  var Alcohol_Count = {
  High_Alcohol_Consumption: 0,
  Medium_Alcohol_Consumption: 0,
  Low_Alcohol_Consumption: 0,
  };


console.log(url);

});







// d3.json(url, function(response) {
// console.log(response);
//   // Create a new marker cluster group
//   var markers = L.markerClusterGroup();
//   response.forEach(element => {
//     var coordinates = element.coordinates;

//     // Check for location property
//     if (coordinates.length == 2) {
//       // Add a new marker to the cluster group and bind a pop-up
//       markers.addLayer(L.marker([coordinates[0], coordinates[1]])
//       .bindPopup("<h1>" + element.file_id + "</h1> <hr> <h3>Date: " + element.Date + "</h3>" + "</h1> <hr> <h3>Time: " + element.Time + "</h3>"
//           + "</h1> <hr> <h3>Taken with a " + element.madeBy + " " + element.model + "</h3>"));
//     } 

//   });
//   markers.addTo(myMap);

// });