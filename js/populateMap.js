function mapContent(){
    var api_key = 'WSlc7qNb1CESQA8NszNX41nuZLJnk6S3';
    var latAndLong = {lat: 42.962589, lng: -85.658792}; 
    var zoomLevel = 5;
    var yourAddress = '422 Fulton St E, Grand Rapids, MI 49503';

    var map = tt.map({
        container: 'map',
        key: api_key,
        center: latAndLong,
        zoom: zoomLevel
    });

    var marker = new tt.Marker().setLngLat(latAndLong).addTo(map);
     
     // FOR CUSTOM MARKER
    //var customMarker = document.createElement('div');
    //customMarker.id = 'marker';
    //var marker = new tt.Marker({element: customMarker}).setLngLat(latAndLong).addTo(map);

    var popupOffsets = {
      top: [0, 0],
      bottom: [0, -70],
      'bottom-right': [0, -70],
      'bottom-left': [0, -70],
      left: [25, -35],
      right: [-25, -35]
    }

    //var popup = new tt.Popup({offset: popupOffsets}).setHTML(yourAddress);
    marker.setPopup(popup).togglePopup();
}