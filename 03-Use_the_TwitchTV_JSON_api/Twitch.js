/*
'Use the Twitchtv JSON API'
<h5>Quatrième exercice dans la série des 'Intermediate Development Projects' du programme freecodecamp.org.</h5>
<p>Après une introduction succincte aux fonctionnalités asynchrones de JavaScript (AJAX), il s'agit de composer une page présentant une liste de fournisseurs diffusant des informations sur une chaîne de télévision en ligne, Twitchtv : "la télévision des tressaillements (spasmes / saccades)" ? ? ? ?</p>
<p>Des informations relatives à cette activité sont fournis par une API.</p>
<p>'user stories' de l'exercice :
<ol>
  <li>Je peux constater si Free Code Camp diffuse des informations</li>
  <li>Je peux cliquer sur l'information d'activité et être directement dirigé vers la chaîne en question</li>
  <li>Si un utilisateur de 'Twitch' diffuse des informations, je peux voir s'afficher des détails sur le programme.</li>
</ol>
*/
$(document).ready(function() {
var diffuseurs = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];      	
/* fonction de recherche et d'affichage */
  for (i = 0 ; i< diffuseurs.length ; i++) {
     $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+ diffuseurs[i] +"?callback=?", function (data) {
 		var diffuseurNom = data._links.self.slice(37);
// 		console.log(diffuseurNom);
 		if (data.stream !== null) {
 			$("#resultatsAfficher").append("<tr><td><a href='" + data.stream.channel.url +"'><img class='logo rounded' src='img/profils/" + diffuseurNom + ".png' alt='logo' > " +data.stream.channel.display_name+ "</a> diffuse : <a class='diffuse' href='" +data.stream.channel.url+ "'>" + data.stream.channel.status +"</a></td></tr>");
		} else
 		{
			$("#resultatsAfficher").append("<tr><td><a href=https://www.twitch.tv/"+ diffuseurNom +"><img class='logo rounded' src='img/profils/" + diffuseurNom + ".png' alt='logo' > " +diffuseurNom+ "</a> est hors ligne</td></tr>");
		}
    })
  }
});