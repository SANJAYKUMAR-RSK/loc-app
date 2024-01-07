const loci = document.getElementById('loci');
const lat = document.getElementById('lat');
const long = document.getElementById('long');

let hasPermission = false;
let watchId;

const userLocation = {
  lat: 0,
  long: 0
};

function showPosition(position) {
  userLocation.lat = position.coords.latitude;
  userLocation.long = position.coords.longitude;
  lat.textContent = userLocation.lat;
  long.textContent = userLocation.long;
}

function handleError(error) {
  console.log("Error getting location:", error.message);
  // Handle permission denial or other errors appropriately
}

function requestPermission() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      hasPermission = true;
      showPosition(position);
      // Start watching for position changes
      watchId = navigator.geolocation.watchPosition(showPosition);
    },
    (error) => {
      handleError(error);
    }
  );
}

requestPermission(); // Initiate the permission request
