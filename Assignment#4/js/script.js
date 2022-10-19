/*
    Assignment #4
    {Sravan reddy Soma}
    W0766138
    2022/10/19
*/

$(function () {
    // your code here
    //////////////////////////////////////////////////
     let x = document.getElementById("locationhere");

  let previousLatitude = localStorage.getItem("lat");
  let previousLongitude = localStorage.getItem("long");

  if (previousLatitude && previousLongitude) {
    x.innerHTML +=
    "Coordinates From Last Visit:"+
      "<br>Previous Latitude: " +
      previousLatitude +
      "<br>Previous Longitude: " +
      previousLongitude +
      "<br><br> WELCOME BACK";
  } else {
    x.innerHTML += "Welcome";
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    
    x.innerHTML +=
    "<br><br>Current Coordinates:"+
      "<br>Current Latitude: " +
      latitude +
      "<br>Current Longitude: " +
      longitude;
    
    
    localStorage.setItem("lat", position.coords.latitude);
    localStorage.setItem("long", position.coords.longitude);

    if (previousLatitude && previousLongitude) {
      // calculating distance between previous and current location
      const distance = calcDistanceBetweenPoints(
        previousLatitude,
        previousLongitude,
        latitude,
        longitude
      );
      let distanceInKms = distance/1000;
      x.innerHTML +=
        "<br><br>Distance Travelled Since The Last Visit To The Page " + distanceInKms + " Kms";
    }
  }




///////////////////////////////////////////////////////////
    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


