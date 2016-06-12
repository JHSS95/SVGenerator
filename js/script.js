$(document).ready(function(){
	var resoX = innerWidth;
	var resoY = innerHeight;
	var logo = $("svg")[0];
	var abre = 0;

	logo.setAttributeNS(null, "viewBox", "0 0 "+resoX+" "+resoY+" ");

	$(".fecha").click(function(){
		if(abre == 0){
			$(".pratica").click();
			abre = 1;
		}
		else if(abre == 1){
			$(".dica").click();
			abre = 0;
		}
	});

	$(".dica").click(function(){
		$(".aprenda").css({
			top: 0,
			left: 0,
			opacity: 1,
			width: "100%",
			height: "100vh",
			zIndex: 20
		});
		$(".hint").css({
			zIndex: 200,
			opacity: 1
		});
		$(".fecha").css({
			top: "81%",
			transform: "rotate(0deg)"
		});
		abre = 0;
	});

	$(".pratica").click(function(){
		$(".aprenda").css({
			top: 0,
			left: 0,
			opacity: 1,
			width: "100%",
			height: "100vh",
			zIndex: 20
		});
		$(".hint").css({
			zIndex: 0,
			opacity: 0
		});
		$(".fecha").css({
			top: "93.5%",
			transform: "rotate(45deg)"
		});
		abre = 1;
	});

	$("menuitem:eq(0)").click(function(){
		$("header").css({
			left: "0%"
		});
		$(".aprenda").css({
			top: "70%",
			left: "27.5%",
			opacity: 0,
			width: "7.5%",
			height: "15vh",
			zIndex: 0
		});
	});

	$("menuitem:eq(1)").click(function(){
		$("header").css({
			left: "-100%"
		});
		$(".aprenda").css({
			top: "70%",
			left: "27.5%",
			opacity: 0,
			width: "7.5%",
			height: "15vh",
			zIndex: 0
		});
		abre = 0;
	});
});
