/*
'Wikipedia viewer'
<h5>Troisième exercice dans la série des 'Intermediate Development Projects' du programme freecodecamp.org.</h5>
<p>Après une introduction succincte aux fonctionnalités asynchrones de JavaScript (AJAX), il s'agit de composer 
une page présentant soit une page aléatoire de l'encyclopédie Wikipedia, soit une liste d'articles correspondant 
à une recherche validée dans un formulaire.</p>
<p>Les recherches seront effectuées sur la version française de l'encyclopédie au moyen de l'api Wikimedia.</p>
*/

var apiURL = "https://fr.wikipedia.org/w/api.php?callback=?";

$(document).ready(function() {
/* validation d'une recherche par un retour chariot */
    $("input").keyup(function(event) {
      if (event.keyCode == 13) {
        $("#boutonRechercher").click();
      }
    });
/* fonction de recherche et d'affichage */
    $('#boutonRechercher').click(function() {
      $("#resultatsAfficher").empty(); // effacer les résultats d'une recherche précédente
        $.getJSON(apiURL, {
          action: 'query',
          format: 'json',
          inprop: "url",
          formatversion: 2,
          generator: 'search',
          gsrsearch: $("input").val(),
          gsrwhat: "text",
          prop: 'extracts|info',
          exsentences: 3,
          exintro: "",
          explaintext: "",        
          exlimit: 20,
        })
        .done(function(response) {
          console.log(response);
          response.query.pages.forEach(function(resp) {
            $('#resultatsAfficher').append(
              "<a href='" + resp.fullurl + "' target= '_blank'><div id='result' class='results'><h3>" + resp.title + "</h3></a><p = class='extract'>" + resp.extract + "</p></div>");
          })
        });
    }); // search

});


