/*
'Show the Local Weather'
<h5>Second exercice dans la série des 'Intermediate Development Projects' du programme freecodecamp.org.</h5>
<p>Après une introduction succincte aux fonctionnalités asynchrones de JavaScript (AJAX), il s'agit de composer 
une page présentant soit une page aléatoire de l'encyclopédie Wikipedia, soit une liste d'articles correspondant 
à une recherche validée dans un formulaire.</p>
<p>Les recherches seront effectuées sur la version française de l'encyclopédie au moyen de l'api Wikimedia.</p>

1 - je peux consulter la météo d'où je suis
2 - je peux voir une icône illustrant ces conditions
3 - je peux basculer l'affichage des températures de °C à °F par un contrôle

*/

var apiURL = "https://fcc-weather-api.glitch.me/api/current?";

$(document).ready(function() {
/* validation d'une recherche par un retour chariot *
    $("input").keyup(function(event) {
      if (event.keyCode == 13) {
        $("#boutonRechercher").click();
      }
    });*/





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
      console.log(refIcone); 
          $("#icone").html('<img src="http://openweathermap.org/img/w/' + response.weather[refIcone].icon + '.png" alt="icone météo"></img>');

      /* Calcul température en °F / °C */
          console.log(response);
          var tempF = response.main.temp * (9/5) + 32;
          tempF = Math.round(tempF) + "°F";
          var tempC = Math.round(response.main.temp) + "°C";
          console.log(tempF);

          $("#temperature").html("La température extérieure est éstimée à : " + tempC + ", soit : " + tempF);
          $("#farhenheit").html(tempF);


//  soit : " + (response.main.temp * (9/5) + 32) + " °F"
        });
         // effacer les résultats d'une recherche précédente
          //      do_something(position.coords.latitude, position.coords.longitude);
      });


    //  $("#resultatsAfficher").empty(); // effacer les résultats d'une recherche précédente

    }); // search

});


