$(document).ready(function (){
	
	//G�n�ration des boutons principaux
	$("#menu_liste li").button();
	
	$("div.tab:last").css("border","none");
	//Parcours scolaire : G�n�ration des tabs
	/*$("#tabs").tabs({
				fx : {opacity : "toggle"},
			})
	*/
	//CV : G�n�ration de l'accord�on
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