/*
'Show the Local Weather'
<h5>Second exercice dans la série des 'Intermediate Development Projects' du programme freecodecamp.org.</h5>
<p>Après une introduction succincte aux fonctionnalités asynchrones de JavaScript (AJAX), il s'agit de composer une page présentant au visiteur un aperçu de la météo dans la région identifiée par les informations de localisation de son navigateur.</p>
<p>Une option doit permettre d'afficher la température extérieure estimée en degrés Celsius ou Fahrenheit.</p>

1 - je peux consulter la météo d'où je suis
2 - je peux voir une icône illustrant ces conditions
3 - je peux basculer l'affichage des températures de °C à °F par un contrôle

*/
$(document).ready(function() {
var apiURL = "https://fcc-weather-api.glitch.me/api/current?";
/* fonction de recherche et d'affichage */
    $('#geoLocation').click(function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        $.getJSON(apiURL, {
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        })
        .done(function(response) {
       //   console.log(response);
          $("#resultatsAfficher").html("Vous vous trouvez à proximité de " + response.name);
      // la longueur de la liste 'weather' varie, la référence de l'icône est indiquée dans le dernier élément (0,1, 2 ou 3)
      var refIcone = response.weather.length - 1;
      //console.log(refIcone);
      if (refIcone === 0) {
        $("#icone").html('<img src=' + response.weather[0].icon + ' class="img-responsive" alt="icone météo"></img>');
      } else
      {
        $("#icone").html('<img src="http://openweathermap.org/img/w/' + response.weather[refIcone].icon + '.png" class="img-responsive" alt="icone météo"></img>');
      }
      /* Calcul température en °F / °C */
        //  console.log(response);
          var tempF = response.main.temp * (9/5) + 32;
          tempF = Math.round(tempF) + "°F";
          var tempC = Math.round(response.main.temp) + "°C";
        //  console.log(tempF);
          $("#temperature").html("La température extérieure est estimée à : " + tempC + '<br><button class="btn btn-primary" id="modifTemp"type="submit">°C /°F</button>');
          $("#fahrenheit").html("La température extérieure est estimée à : " + tempF + '<br><button class="btn btn-primary" id="modifTempF"type="submit">°C /°F</button>');
          $("#modifTemp").click(function() {
            $("p").toggle();
          });
          $("#modifTempF").click(function() {
            $("p").toggle();
          });
        });
      });
    });
});