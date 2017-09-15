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
var apiURL = "https://wind-bow.glitch.me/twitch-api/user/";
var diffuseurs = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
var diffuseursInfos = [];
        	
/* fonction de recherche et d'affichage */
for (i = 0 ; i< diffuseurs.length ; i++) {
//	var diffuseurNom = diffuseurs[i];
     $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+ diffuseurs[i] +"?callback=?", function (data) {
     //	diffuseursInfos.push([data.logo, data.display_name, data.name, data._id, data.channel.status]);
 //		function DiffuseursInfos(name, online) {
 	//		this.name = name;
 	//		this.online = online;
 	//	}
 		var diffuseurNom = data._links.self.slice(37);
 //		var diffuseur = new DiffuseursInfos(diffuseurNom, data.stream);
 	//	diffuseursInfos.push(diffuseur); 

 		console.log(diffuseurNom);
// 		var diffuseurNom = data._links.self.slice(37);
 		if (data.stream !== null) {
 			$("#resultatsAfficher").append("<tr class='enLigne'><td><a href='" + data.stream.channel.url +"'><img class='logo rounded' src='img/profiles/" + diffuseurNom + ".png' alt='channel logo' >" +data.stream.channel.display_name+ "</a></td><td> diffuse :<br><a class='name' href='" +data.stream.channel.url+ "'>" + data.stream.channel.status +"</a></td></tr>");
		} else
 		{
			$("#resultatsAfficher").append("<tr class='horsLigne'><td><a href=https://www.twitch.tv/"+ diffuseurNom +"><img class='logo rounded' src='img/profiles/" + diffuseurNom + ".png' alt='channel logo' >" +diffuseurNom+ "</a></td><td>hors ligne</td></tr>");
		}

    })
 }
console.log(diffuseursInfos.length);
     });
 //    console.log(diffuseursInfos.length);
   //       console.log(diffuseursInfos);
  
/*https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-profile_image-34707f847a73d934-300x300.png
    ifhttps://www.twitch.tv/noobs2ninjas (data.stream === null) {
 $.getJSON("https://wind-bow.gomix.me/twitch-api/users/"+ diffuseurs[i] +"?callback=?", function (data) {
     	$("#resultatsAfficher").append("<tr class='offline'><td><a href='" + data.url +"'><img class='logo' src='" + data.logo + "' alt='channel logo' ></a></td><td><a class='name' href='"+data.url + "'>" +data.display_name+ "</a></td><td>Hors ligne</td></tr>");
     })
     } else
     {
     	 $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+ diffuseurs[i] +"?callback=?", function (data) {
     	$("#resultatsAfficher").append("<tr class='offline'><td><a href='" + data.url +"'><img class='logo' src='" + data.logo + "' alt='channel logo' ></a></td><td><a class='name' href='"+data.url + "'>" +data.display_name+ "</a></td><td><a class='name' href='" +data.url+ "'>" + data.channel.status +"</a></td></tr>");
     })
     }
*/

  //      .done(function(response) {


   /*     //  console.log(response);
 for (j = 0 ; j< diffuseurs.length ; j++) {    
     $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+ diffuseursInfos[j][1] +"?callback=?", function (data) {
     	if (data.stream === null) {
     	$("#resultatsAfficher").append('<li><img src="' + diffuseursInfos[j][1] + '" class="logoJoueurs rounded"></img>' + diffuseursInfos[j][1] + '</li>');
     } else 
     {
     	$("#resultatsAfficher").append('<li><img src="' + diffuseursInfos[j][1] + '" class="logoJoueurs rounded"></img>' + diffuseursInfos[j][1] + '<a href="' + data.stream.channel.url + '">' + data.stream.channel.status +'</li>');
     }
 })

 };*/
	//	})
      //          console.log(response);
    //             if (response.stream === null) {
      //   $("#resultatsAfficher").append('<li><img src="' + response.logo + '" class="logoJoueurs rounded"></img>' + response.name + 'utilisateur hors ligne</li>');

 		//	} else
 		//	{
 		//		$("#resultatsAfficher").append('<li><img src="' + response.logo + '" class="logoJoueurs rounded"></img>' + response.name + '<a href="' + response.stream.channel.url + '">' + response.stream.channel.status +'</li>');

 		//	}
            
//            $('<td>').text(item.content),
//            $('<td>').text(item.UID)
       //.appendTo('#resultatsAfficher');
        


/*          if (response.stream === null) {
          $("#resultatsAfficher").append("<li>" + response.name + " : " + response._id + "</li>");
 			} else
 			{
 				$("#resultatsAfficher").append("<li>" + response.name + " : " + response._id + "</li>");
 			}
*/
      /* Calcul température en °F / °C */
        //  console.log(response);

