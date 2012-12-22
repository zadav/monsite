$(document).ready(function (){
	
	//Génération des boutons principaux
	$("#menu_liste li").button();
	
	$("div.tab:last").css("border","none");
	//Parcours scolaire : Génération des tabs
	/*$("#tabs").tabs({
				fx : {opacity : "toggle"},
			})
	*/
	//CV : Génération de l'accordéon
	/*$("#accordion").accordion();*/
	
	$("#comp_link").click(function(event){
		$("#experiences").fadeOut(500,function(){
					$("#competences").fadeIn(500);
				
				});
		$("#comp_link").css("border","1px dashed grey");
		$("#exp_link").css("border","");
		event.preventDefault();
	});
	
	$("#exp_link").click(function(event){
		$("#competences").fadeOut(500,function(){
					$("#experiences").fadeIn(500);
				
				});
		$("#comp_link").css("border","");
		$("#exp_link").css("border","1px dashed grey");
		event.preventDefault();
	});
});