$(function() {
	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}

	var conceptArray = [{product_name:"Ensemble", image_url:"ensemble.png", valueprop_text: "Understand your most important customers.", details_txt:"", link_url: "ensemble.html"}, {product_name:"Legato", image_url:"legato.png", valueprop_text: "Strengthen the relationships that matter.", details_txt:"", link_url: "legato.html"},{product_name:"Tablature", image_url:"tablature.png", valueprop_text: "Surface the business data and customer stories that drive better decisions.", details_txt:"", link_url: "tablature.html"},{product_name:"Piccolo", image_url:"piccolo.png", valueprop_text: "Reach new customers through social media.", details_txt:"", link_url: "piccolo.html"},{product_name:"Contactually", image_url:"contactually.png", valueprop_text: "Follow up with the right people at the right time.", details_txt:"", link_url: "/competitor.html?product=https://www.contactually.com/"},{product_name:"Handle", image_url:"handle.png", valueprop_text: "Manage your inboxes and to-do lists all in one place.", details_txt:"", link_url: "/competitor.html?product=https://www.handle.com/"},{product_name:"ActiveCell", image_url:"activecell.png", valueprop_text: "Prioritize the metrics most important to your business.", details_txt:"", link_url: "/competitor.html?product=http://www.activecell.com/"},{product_name:"InfusionSoft", image_url:"infusionsoft.png", valueprop_text: "One-click email marketing campaigns.", details_txt:"", link_url: "/competitor.html?product=http://www.infusionsoft.com/"},{product_name:"Newsle", image_url:"newsle.png", valueprop_text: "Never miss an article about someone who matters to you.", details_txt:"", link_url: "/competitor.html?product=http://www.newsle.com/"},{product_name:"Streak", image_url:"streak.png", valueprop_text: "See all of your deals inside Gmail.", details_txt:"", link_url: "/competitor.html?product=http://www.streak.com/"},{product_name:"Refresh", image_url:"refresh.png", valueprop_text: "Get an instant dossier for your next conversation.", details_txt:"", link_url: "/competitor.html?product=http://www.refresh.io/"}];

	var shuffledConcepts = shuffleArray(conceptArray);

	for (var k=0; k<3; k++){
		var product_name = shuffledConcepts[k].product_name;
		var image_url = shuffledConcepts[k].image_url;
		var valueprop_text = shuffledConcepts[k].valueprop_text;
		var link_url = shuffledConcepts[k].link_url;

		//WRITE OUT TO HTML HERE
		console.log(product_name);
	};
return null;
});