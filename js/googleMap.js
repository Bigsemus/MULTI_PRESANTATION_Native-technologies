const success = ({coords: {latitude, longitude}}) => {
    let lat = latitude;
    let lng = longitude;
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDcnCwlCvNk_Rti1ii99lw3HbhDHs2p1iM&callback=initMap';
    script.async = true;
    window.initMap = function() {
        let options = {
            center: {lat: lat, lng: lng},
            zoom: 15,
        };
        let map = new google.maps.Map(document.getElementById('contact__map'), options);
        let marker = new google.maps.Marker({
            position: options.center,
            map: map,
            title: 'Your location',
        });
        const locationButton = document.createElement('button');
        locationButton.textContent = 'Pan to Current Location';
        locationButton.classList.add('custom-map-control-button');
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
        locationButton.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };
                        infoWindow.setPosition(pos);
                        infoWindow.setContent('Your location.');
                        infoWindow.open(map);
                        map.setCenter(pos);
                    },
                    () => {
                        handleLocationError(true, infoWindow, map.getCenter());
                    },
                );
            } else {
                handleLocationError(false, infoWindow, map.getCenter());
            }
        });
    };
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
            browserHasGeolocation
                ? 'Error: The Geolocation service failed.'
                : 'Error: Your browser doesn\'t support geolocation.',
        );
        infoWindow.open(map);
    };
    document.head.appendChild(script);
};

const defaulte = () => {
        let lat = 48.46289;
    let lng = 35.05462;
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDcnCwlCvNk_Rti1ii99lw3HbhDHs2p1iM&callback=initMap';
    script.async = true;
    window.initMap = function() {
        let options = {
            center: {lat: lat, lng: lng},
            zoom: 15,
        };
        let map = new google.maps.Map(document.getElementById('contact__map'), options);
        let marker = new google.maps.Marker({
            position: options.center,
            map: map,
            title: 'Your location',
        });
    }
    document.head.appendChild(script);
}

export const mapApp = () => {
    navigator.geolocation.getCurrentPosition(success, defaulte);
}
