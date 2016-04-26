Template.map.onRendered(function () {
    Meteor.call('getMap', function(err, res) {
        let map,
            myLatlng = new google.maps.LatLng(44.99588262, -121.45385742);

        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: myLatlng
        });

        map.data.addGeoJson(res);
    });
});