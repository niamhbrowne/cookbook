function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [

        { lat: 20.634442349556693, lng: -105.22830144967112 },
        { lat: 20.659322364804993, lng: -103.35944833752431 },
        { lat: 19.421118887740437, lng: -99.12096384011468 },
        { lat: 25.7149413326564, lng: -100.2982997259786 },
        { lat: 36.57196376338161, lng: -116.09780765158683 },
        { lat: 39.7695010230517, lng: -116.73598811109613 },
        { lat: 43.57172497435101, lng: -114.16656661492894 },
        { lat: 33.562105070193745, lng: -105.97135631734453 },
        { lat: 36.288549428577376, lng: -120.35913155587446 },
        { lat: 38.10436037094744, lng: -122.27154634646524 },
        { lat: 33.031751792691765, lng: -112.29596140393703 },
        { lat: 42.455185388643045, lng: -87.06666561007398 },
        { lat: 39.630200817760056, lng: -85.81782457113451 },
        { lat: 35.73664897988566, lng: -85.59744085838048 },
        { lat: 34.48791600566655, lng: 103.36873894840133 },
        { lat: 47.30534800947947, lng: 103.83064636718322 },
        { lat: 43.093071398930434, lng: 12.528935009907915 },
        { lat: 43.60437165122398, lng: 11.342411690752577 },
        { lat: 41.84512564877342, lng: 13.056278707310291 },
        { lat: 40.98830605660254, lng: 14.462528567049949 },
        { lat: 40.53896680391467, lng: 17.253055632470844 }

        
        
];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    });

});
var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}
