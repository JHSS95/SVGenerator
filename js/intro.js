$(document).ready(function(){
	var link = "http://www.w3.org/2000/svg";
	var intro = $("svg")[1];
	var ferramenta;
	var x;
	var y;
	var codigo;
	var controle = 0;
	var explica;
	var oculta = 0;
	var ocultapreen = 0;
	var points;
	var pointscon;
	var sub = "L";
	var quant = 0;
	var dum;
	var done;
	var dot = 0;
	var dtwo;
	var dtre;
	var dqua
	var qua;
	var auxone;
	var auxtwo;
	var menu = 0;
	var menut = 0;
	var auxmovex;
	var auxmovey;
	var germove = 0;
	var guardax = 0;
	var guarday = 0;
	var lineri = " ";
	var id = " ";
	var iden = 0;
	var auxtext = 0;
	var modifi = 0;
	var path = 0;
	var pathid = 0;
	var zoom = 1;
	var scrollX = 0;
	var scrollY = 0;
	var cord = [];
	var aux = 0;
	var conta = 0;
	var repo = "";
	var vetfont = "";
	var auxfont = 0;
	var over = "";
	var fazer = 0;
	var guia = 0;

//Menu de contexto para o path
	$("svg").contextmenu(function(e){
		if(ferramenta == "path"){
			$(".context").css({
				left: e.clientX,
				top: e.clientY,
				opacity: "1",
				zIndex: 400
			});
		}
		return false;
	});
	$(document).click(function(){
		$(".context").css({
			opacity: "0",
			zIndex: 0
		});
	});
//

//Ocultar menu texto
	$(".textpro").click(function(){
		if(auxtext == 0){
			$(".prot").css({
				zIndex: 0,
				opacity: 0
			});
			auxtext++;
		}
		else{
			$(".prot").css({
				zIndex: 100,
				opacity: 1
			});
			auxtext--;
		}
	})
//

//Limpar tela
	$(".limpar").click(function(){
		if($("#dese").html()){
			$(".limpatela").css({
				zIndex: 200,
				opacity: 1
			});
		}
	});
	$(".limpatelasim").click(function(){
		$(".linecont").remove();
		$(".limpatela").css({
			zIndex: 0,
			opacity: 0
		});
	});
	$(".limpatelano").click(function(){
		$(".limpatela").css({
			zIndex: 0,
			opacity: 0
		});
	});
//

//Salvar
	$(".salvar").click(function(){
		if($("#dese").html()){
			$(".salvaimg").css({
				zIndex: 200,
				opacity: 1
			});
		}
	});
	$(".salvaimgsim").click(function(){
		$(".salvaimg").css({
			opacity: 0,
			zIndex: 0
		});
		$(".salvasvg").css({
			opacity: 1,
			zIndex: 200
		});
		codigo = "<svg preserveAspectRatio='xMinYMin meet' viewBox='0 0 " + x + " " + y + "'>" + $("#dese").html() + "</svg>";
		$(".resultsvg").text(codigo);
		$(".salvasvgbt").wrap("<a></a>");
		$("a").attr("href","data:image/svg+xml;,\n" + codigo + "").attr("download","imagem.svg");
	});
	$(".salvaimgno").click(function(){
		$(".salvaimg").css({
			opacity: 0,
			zIndex: 0
		});
		$(".salvasvg").css({
			opacity: 1,
			zIndex: 200
		});
		codigo = "<svg width='" + x + "' height='" + y + "' viewBox='0 0 " + x + " " + y + "'>" + $("#dese").html() + "</svg>";
		$(".resultsvg").text(codigo);
		$(".salvasvgbt").wrap("<a></a>");
		$("a").attr("href","data:image/svg+xml;,\n" + codigo + "").attr("download","imagem.svg");
	});
	$(".salvasvgbt").click(function(){
		$(".salvasvg").css({
			opacity: 0,
			zIndex: 0
		});
	});

//

//Menu formas
	$(".formas").click(function(){
		if(menu == 0){
			$(".formas").css({
				boxShadow: "0 0 25px 25px #A73E3D inset"
			});
			$(".formastext").css({
				color: "white"
			});
			$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 100,
				opacity: 1
			});
			menu++;
			$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0
			});
			menut = 0;
			$(".transform").css({
				boxShadow: "0 0 00px 00px #A73E3D inset"
			});
			$(".transformtext").css({
				color: "black"
			});
		}
		else if(menu == 1){
			$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0
			});
			menu--;
			$(".formas").css({
				boxShadow: "0 0 00px 00px #A73E3D inset"
			});
			$(".formastext").css({
				color: "black"
			});
		}
	});

	$(".transform").click(function(){
		if(menut == 0){
			$(".transform").css({
				boxShadow: "0 0 25px 25px #A73E3D inset"
			});
			$(".transformtext").css({
				color: "white"
			});
			$(".move, .rotate, .skew, .redmi").css({
				zIndex: 100,
				opacity: 1
			});
			menut++;
			$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0
			});
			menu = 0;
			$(".formas").css({
				boxShadow: "0 0 00px 00px #A73E3D inset"
			});
			$(".formastext").css({
				color: "black"
			});
		}
		else if(menut == 1){
			$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0
			});
			menut--;
			$(".transform").css({
				boxShadow: "0 0 00px 00px #A73E3D inset"
			});
			$(".transformtext").css({
				color: "black"
			});
		}
	});
//

//Selecionar sub-ferramenta path
	$(".retaline").click(function(){
		sub = "L";
	});
	$(".curvaline").click(function(){
		sub = "Q";
	});
//

//Impedir os caractere especiais
	$(".grup").keypress(function(e){
		if((e.which == 33 || e.which == 64 || e.which == 36 || e.which == 35 || e.which == 37 || e.which == 168 || e.which == 38 || e.which == 42 || e.which == 40 || e.which == 41 || e.which == 95 || e.which == 45 || e.which == 43 || e.which == 61 || e.which == 167 || e.which == 178 || e.which == 185 || e.which == 179 || e.which == 163 || e.which == 162 || e.which == 172 || e.which == 47 || e.which == 63 || e.which == 176 || e.which == 180 || e.which == 96 || e.which == 91 || e.which == 123 || e.which == 170 || e.which == 126 || e.which == 94 || e.which == 93 || e.which == 125 || e.which == 186 || e.which == 44 || e.which == 60 || e.which == 46 || e.which == 62 || e.which == 59 || e.which == 58 || e.which == 92 || e.which == 124 || e.which == 231 || e.which == 32)){
			return false;
		}
	});
//

//Efeitos nos campos de resolução
	$(".newfontlink").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
	$(".instru").html("Cole neste campo seu link do Google fonts, assim sua nova fonte será automáticamente adcionada à barra 'Tipo da fonte', não se esqueça de colar o o código da sua fonte no cabeçalho '<head>' da sua página HTML.");
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
		var teste = "";
		var testex = "";
		var testem = "";
		var linkfont = $(this).val();
		$("head").append(linkfont);
		var regex = /^<link href\=\'http:\/\/fonts.googleapis.com\/css\?family\=/;
		var regez = /\' rel\=\'stylesheet\' type\=\'text\/css\'>$/;
		var regem = /\+/g;
		teste = linkfont.replace(regex,"");
		testex = teste.replace(regez,"");
		testem = testex.replace(regem," ");
		var option = $("<option>").text(testem).val("'" + testem + "', cursive");
		$(".fontfamily").append(option);
	});
	$(".fontsize").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
	}).numericInput({
		allowFloat: false
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
	});
	$(".fontfamily").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
	});
	$(".spacesize").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
	}).numericInput({
		allowFloat: false
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
	});
	$(".textoaqui").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
	});

	$(".incx").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".incmx").css({
			left: "28.5%",
			color: "#A73E3D"
		});
	}).numericInput({
		allowFloat: true,
		allowNegative: true
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
		$(".incmx").css({
			left: "30%",
			color: "#D15645"
		});
	});
	$(".incy").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".incmy").css({
			left: "41%",
			color: "#A73E3D"
		});
	}).numericInput({
		allowFloat: true,
		allowNegative: true
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
		$(".incmy").css({
			left: "42.5%",
			color: "#D15645"
		});
	});

	$(".graus").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".grausm").css({
			left: "28.5%",
			color: "#A73E3D"
		});
	}).numericInput({
		allowFloat: true,
		allowNegative: true
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
		$(".grausm").css({
			left: "30%",
			color: "#D15645"
		});
	});

	$(".grup").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".grum").css({
			left: "28.5%",
			color: "#A73E3D"
		});
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
		$(".grum").css({
			left: "30%",
			color: "#D15645"
		});
	});

	$(".zp").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".zm").css({
			left: "28.5%",
			color: "#A73E3D"
		});
	}).numericInput({
		allowFloat: true
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
		$(".zm").css({
			left: "30%",
			color: "#D15645"
		});
	});

	$(".movex").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".textmx").css({
			left: "28.5%",
			color: "#A73E3D"
		});
	}).numericInput({
		allowFloat: true,
		allowNegative: true
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
		$(".textmx").css({
			left: "30%",
			color: "#D15645"
		});
	});
	$(".movey").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".textmy").css({
			left: "41%",
			color: "#A73E3D"
		});
	}).numericInput({
		allowFloat: true,
		allowNegative: true
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
		$(".textmy").css({
			left: "42.5%",
			color: "#D15645"
		});
	});

	$(".escalax").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".escalamx").css({
			left: "28.5%",
			color: "#A73E3D"
		});
	}).numericInput({
		allowFloat: true,
		allowNegative: true
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
		$(".escalamx").css({
			left: "30%",
			color: "#D15645"
		});
	});
	$(".escalay").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".escalamy").css({
			left: "41%",
			color: "#A73E3D"
		});
	}).numericInput({
		allowFloat: true,
		allowNegative: true
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
		$(".escalamy").css({
			left: "42.5%",
			color: "#D15645"
		});
	});

	$(".x").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".styx").css({
			marginLeft: 0,
			color: "#A73E3D"
		});
	}).numericInput({
		allowFloat: true
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
		$(".styx").css({
			marginLeft: "5%",
			color: "#D15645"
		});
		});
	$(".inpx").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".barx").css({
			marginLeft: "0.5%",
			color: "#A73E3D"
		});
	}).numericInput({
		allowFloat: true
	}).focusout(function(){
			$(this).css({
			borderBottom: "2px solid #D15645"
		});
		$(".barx").css({
			marginLeft: "1.5%",
			color: "#D15645"
		});
		});
	$(".y").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".styy").css({
			marginLeft: 0,
			color: "#A73E3D"
		});
	}).numericInput({
		allowFloat: true
	}).focusout(function(){
			$(this).css({
				borderBottom: "2px solid #D15645"
			});
			$(".styy").css({
				marginLeft: "5%",
				color: "#D15645"
			});
		});
	$(".inpy").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".bary").css({
			marginLeft: "0.5%",
			color: "#A73E3D"
		});
	}).numericInput({
		allowFloat: true
	}).focusout(function(){
			$(this).css({
				borderBottom: "2px solid #D15645"
			});
			$(".bary").css({
				marginLeft: "1.5%",
				color: "#D15645"
			});
		});
//

//Efeitos e dicas nas ferramentas da barra superior
	$(".traceval").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".instru").html("Quanto maior o valor da propriedade 'Tamanho Tracejado', maior será a largura do pontilhado na linha. Caso a propriedade esteja com o valor 0 (zero) significa que a linha será continua.");
	}).numericInput({
		allowFloat: true
	}).focusout(function(){
			$(this).css({
				borderBottom: "2px solid #D15645"
			});
		});
	$(".linewidthval").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".instru").html("Essa propriedade determinará a largura da linha. Se o valor não for alterado o padrão de tamanho será 1 (um).");
	}).numericInput({
		allowFloat: true
	}).focusout(function(){
			$(this).css({
				borderBottom: "2px solid #D15645"
			});
		});
	$(".lineopacval").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".instru").html("Essa ferramenta atribui transparência à linha, sendo, 100 (cem) a linha completamente visível e 0 (zero) para a linha completamente invisível.");
	}).numericInput({
		allowFloat: true
	}).focusout(function(){
			$(this).css({
				borderBottom: "2px solid #D15645"
			});
		});
	$(".lineendval").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".instru").html("Essa propriedade possibilitará a alteração do início e do final da linha, lembrando que se nenhuma opção for escolhida o final da linha será o padrão.");
	}).focusout(function(){
			$(this).css({
				borderBottom: "2px solid #D15645"
			});
		});
	$(".linecornerval").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".instru").html("Caso a linha faça mudanças de direção, seus cantos receberão essa propriedade e caso nenhuma opção for selecionada os cantos seguirão o padrão normal.");
	}).focusout(function(){
			$(this).css({
				borderBottom: "2px solid #D15645"
			});
		});
	$(".preenopacval").focusin(function(){
		$(this).css({
			borderBottom: "4px solid #A73E3D"
		});
		$(".instru").html("Essa ferramenta atribui transparência ao preenchimento, sendo, 100 (cem) a linha completamente visível e 0 (zero) para o preenchimento completamente invisível.");
	}).numericInput({
		allowFloat: true
	}).focusout(function(){
			$(this).css({
				borderBottom: "2px solid #D15645"
			});
		});
//

//Resoluções sendo aplicadas no svg
	$(".aplica").click(function(){
		$(".reso").css({
			opacity: 0,
			zIndex: 0
		});
		x = $(".x").val();
		y = $(".y").val();
		intro.setAttributeNS(null, "viewBox", "0 0 "+ x +" "+ y +" ");
		$("#dese").css({
			width: x,
			height: y,
			background: "white",
			boxShadow: "0 0 10px 1px black"
		});
		$(".muda, .inpx, .inpy, .barx, .bary").css({
			zIndex: 40,
			opacity:1
		});
	});
		$(".muda").click(function(){
		$(".reso").css({
			opacity: 0,
			zIndex: 0
		});
		x = $(".inpx").val();
		y = $(".inpy").val();
		intro.setAttributeNS(null, "viewBox", "0 0 "+ x +" "+ y +" ");
		$("#dese").css({
			width: x,
			height: y,
			background: "white",
			boxShadow: "0 0 10px 1px black"
		});
	});
//

//Mostrar ferramentas na barra superior de acordo com o botão clicado na barra lateral e mostrar dicas da barra lateral
	$(".line, .linecai, .linesym, .linetext").click(function(){
		ferramenta = "line";
		$(".line").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".linetext").css({
			color: "white"
		});
		$(".recti, .circle, .ellipse, .polyline, .polygon, .path, .group, .text, .clippath, .remover, .modificar, .zoom, .orga").css({
			boxShadow: "0 0 0px 0px #A73E3D inset"
		});
		$(".recttext, .circletext, .ellipsetext, .polylinetext, .polygontext, .pathtext, .grouptext, .texttext, .clippathtext, .removertext, .modificartext, .zoomtext, .orgatext").css({
			color: "black"
		});
		$(".previa, .corborda").css({
			zIndex: 40,
			opacity: 1
		});
		$(".previapreen, .corpreen").css({
			zIndex: 0,
			opacity: 0
		});
		$(".trace, .traceval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineend, .lineendval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0
			});
			menu = 0;
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".movetext, .rotatetext, .skewtext, .redmitext").css({
			color: "black"
		});
			menut = 0;
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 200,
			opacity: 1
		});
		$(".instru").html("Clique na tela de desenho pra determinar o incio da linha. Após este clique a linha receberá uma prévia do ponto final de acordo com a posição do mouse. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
	});

	$(".recti, .rectcai, .rectsym, .recttext").click(function(){
		ferramenta = "rect";
		$(".recti").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".recttext").css({
			color: "white"
		});
		$(".line, .circle, .ellipse, .polyline, .polygon, .path, .group, .text, .clippath, .remover, .modificar, .zoom, .orga").css({
			boxShadow: "0 0 0px 0px #A73E3D inset"
		});
		$(".linetext, .circletext, .ellipsetext, .polylinetext, .polygontext, .pathtext, .grouptext, .texttext, .clippathtext, .removertext, .modificartext, .zoomtext, .orgatext").css({
			color: "black"
		});
		$(".previa, .corborda").css({
			zIndex: 40,
			opacity: 1
		});
		$(".previapreen, .corpreen").css({
			zIndex: 40,
			opacity: 1
		});
		$(".trace, .traceval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineend, .lineendval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0
			});
			menu = 0;
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".movetext, .rotatetext, .skewtext, .redmitext").css({
			color: "black"
		});
			menut = 0;
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .criagru, .grup").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 200,
			opacity: 1
		});
		$(".instru").html("Clique na tela de desenho pra determinar o incio do retângulo. Após este clique a forma receberá uma prévia da forma final de acordo com a posição do mouse da esquerda para a direita e de cima para baixo. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
	});

	$(".circle, .circlecai, .circlesym, .circletext").click(function(){
		ferramenta = "circle";
		$(".circle").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".circletext").css({
			color: "white"
		});
		$(".line, .recti, .ellipse, .polyline, .polygon, .path, .group, .text, .clippath, .remover, .modificar, .zoom, .orga").css({
			boxShadow: "0 0 0px 0px #A73E3D inset"
		});
		$(".linetext, .recttext, .ellipsetext, .polylinetext, .polygontext, .pathtext, .grouptext, .texttext, .clippathtext, .removertext, .modificartext, .zoomtext, .orgatext").css({
			color: "black"
		});
		$(".previa, .corborda").css({
			zIndex: 40,
			opacity: 1
		});
		$(".previapreen, .corpreen").css({
			zIndex: 40,
			opacity: 1
		});
		$(".trace, .traceval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineend, .lineendval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0
			});
			menu = 0;
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".movetext, .rotatetext, .skewtext, .redmitext").css({
			color: "black"
		});
			menut = 0;
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 200,
			opacity: 1
		});
		$(".instru").html("Clique na tela de desenho pra determinar o incio do circulo. Após este clique a forma receberá uma prévia da forma final de acordo com a posição do mouse da esquerda para a direita e de cima para baixo. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
	});

	$(".ellipse, .ellipsecai, .ellipsesym, .ellipsetext").click(function(){
		ferramenta = "ellipse";
		$(".ellipse").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".ellipsetext").css({
			color: "white"
		});
		$(".line, .recti, .circle, .polyline, .polygon, .path, .group, .text, .clippath, .remover, .modificar, .zoom, .orga").css({
			boxShadow: "0 0 0px 0px #A73E3D inset"
		});
		$(".linetext, .recttext, .circletext, .polylinetext, .polygontext, .pathtext, .grouptext, .texttext, .clippathtext, .removertext, .modificartext, .zoomtext, .orgatext").css({
			color: "black"
		});
		$(".previa, .corborda").css({
			zIndex: 40,
			opacity: 1
		});
		$(".previapreen, .corpreen").css({
			zIndex: 40,
			opacity: 1
		});
		$(".trace, .traceval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineend, .lineendval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0
			});
			menu = 0;
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".movetext, .rotatetext, .skewtext, .redmitext").css({
			color: "black"
		});
			menut = 0;
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 200,
			opacity: 1
		});
		$(".instru").html("Clique na tela de desenho pra determinar o incio da elipse. Após este clique a forma receberá uma prévia da forma final de acordo com a posição do mouse da esquerda para a direita e de cima para baixo. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
	});

	$(".polyline, .polylinecai, .polylinesym, .polylinetext").click(function(){
		ferramenta = "polyline";
		$(".polyline").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".polylinetext").css({
			color: "white"
		});
		$(".line, .recti, .circle, .ellipse, .polygon, .path, .group, .text, .clippath, .remover, .modificar, .zoom, .orga").css({
			boxShadow: "0 0 0px 0px #A73E3D inset"
		});
		$(".linetext, .recttext, .circletext, .ellipsetext, .polygontext, .pathtext, .grouptext, .texttext, .clippathtext, .removertext, .modificartext, .zoomtext, .orgatext").css({
			color: "black"
		});
		$(".previa, .corborda").css({
			zIndex: 40,
			opacity: 1
		});
		$(".previapreen, .corpreen").css({
			zIndex: 40,
			opacity: 1
		});
		$(".trace, .traceval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineend, .lineendval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0
			});
			menu = 0;
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".movetext, .rotatetext, .skewtext, .redmitext").css({
			color: "black"
		});
			menut = 0;
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 200,
			opacity: 1
		});
		$(".instru").html("Clique na tela de desenho pra determinar o incio da linha. Após este clique a linha receberá uma prévia do  proximo ponto de acordo com a posição do mouse, a cada clique uma nova parte da linha será criada. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
	});

	$(".polygon, .polygoncai, .polygonsym, .polygontext").click(function(){
		ferramenta = "polygon";
		$(".polygon").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".polygontext").css({
			color: "white"
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .path, .group, .text, .clippath, .remover, .modificar, .zoom, .orga").css({
			boxShadow: "0 0 0px 0px #A73E3D inset"
		});
		$(".linetext, .recttext, .circletext, .ellipsetext, .polylinetext, .pathtext, .grouptext, .texttext, .clippathtext, .removertext, .modificartext, .zoomtext, .orgatext").css({
			color: "black"
		});
		$(".previa, .corborda").css({
			zIndex: 40,
			opacity: 1
		});
		$(".previapreen, .corpreen").css({
			zIndex: 40,
			opacity: 1
		});
		$(".trace, .traceval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineend, .lineendval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0
			});
			menu = 0;
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".movetext, .rotatetext, .skewtext, .redmitext").css({
			color: "black"
		});
			menut = 0;
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 200,
			opacity: 1
		});
		$(".instru").html("Clique na tela de desenho pra determinar o incio do poligono. Após este clique a linha receberá uma prévia do  proximo ponto de acordo com a posição do mouse, a cada clique uma nova face será criada no poligono. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
	});

	$(".path, .pathcai, .pathsym, .pathtext").click(function(){
		ferramenta = "path";
		$(".path").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".pathtext").css({
			color: "white"
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .group, .text, .clippath, .remover, .modificar, .zoom, .orga").css({
			boxShadow: "0 0 0px 0px #A73E3D inset"
		});
		$(".linetext, .recttext, .circletext, .ellipsetext, .polylinetext, .polygontext, .grouptext, .texttext, .clippathtext, .removertext, .modificartext, .zoomtext, .orgatext").css({
			color: "black"
		});
		$(".previa, .corborda").css({
			zIndex: 40,
			opacity: 1
		});
		$(".previapreen, .corpreen").css({
			zIndex: 40,
			opacity: 1
		});
		$(".trace, .traceval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineend, .lineendval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0
			});
			menu = 0;
		$(".move, .rotate, .skew, .redmi").css({
			zIndex: 0,
			opacity: 0,
			boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".movetext, .rotatetext, .skewtext, .redmitext").css({
			color: "black"
		});
			menut = 0;
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 200,
			opacity: 1
		});
		$(".instru").html("Clique na tela de desenho pra determinar o incio do caminho. Após este clique a linha receberá uma prévia do  proximo ponto de acordo com a posição do mouse, a cada clique uma nova face será criada no caminho. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
	});

	$(".move, .movecai, .movesym, .movetext").click(function(){
		ferramenta = "move";
		$(".move").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".movetext").css({
			color: "white"
		});
		$(".rotate, .redmi, .skew, .group, .text, .clippath, .remover, .modificar, .zoom, .orga").css({
			boxShadow: "0 0 0px 0px #A73E3D inset"
		});
		$(".rotatetext, .redmitext, .skewtext, .grouptext, .texttext, .clippathtext, .removertext, .modificartext, .zoomtext, .orgatext").css({
			color: "black"
		});
		$(".previa, .corborda").css({
			zIndex: 0,
			opacity: 0
		});
		$(".previapreen, .corpreen").css({
			zIndex: 0,
			opacity: 0
		});
		$(".trace, .traceval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineend, .lineendval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".linetext, .recttext, .circletext, .ellipsetext, .polylinetext, .polygontext, .pathtext").css({
				color: "black"
			});
			menu = 0;
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0
			});
			menut = 0;
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 100,
			opacity: 1
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".instru").html("Coloque as coordenadas X e Y que seu objeto será movido na barra superior, lembrando que o ponto inicial será considerado sempre o ponto superior esquerdo do elemento independente de quantas vezes ele seja movido. Para aplicar você deve clicar no elemento desejado.");
	});

	$(".rotate, .rotatecai, .rotatesym, .rotatetext").click(function(){
		ferramenta = "rotate";
		$(".rotate").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".rotatetext").css({
			color: "white"
		});
		$(".move, .redmi, .skew, .group, .text, .clippath, .remover, .modificar, .zoom, .orga").css({
			boxShadow: "0 0 0px 0px #A73E3D inset"
		});
		$(".movetext, .redmitext, .skewtext, .grouptext, .texttext, .clippathtext, .removertext, .modificartext, .zoomtext, .orgatext").css({
			color: "black"
		});
		$(".previa, .corborda").css({
			zIndex: 0,
			opacity: 0
		});
		$(".previapreen, .corpreen").css({
			zIndex: 0,
			opacity: 0
		});
		$(".trace, .traceval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineend, .lineendval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".linetext, .recttext, .circletext, .ellipsetext, .polylinetext, .polygontext, .pathtext").css({
				color: "black"
			});
			menu = 0;
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0
			});
			menut = 0;
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 100,
			opacity: 1
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".instru").html("Coloque quantos graus que seu objeto será rotacionado na barra superior, lembrando que o ponto inicial será considerado sempre centro do elemento independente de quantas vezes ele seja rotacionado. Para aplicar você deve clicar no elemento desejado.");
	});

	$(".redmi, .redmicai, .redmisym, .redmitext").click(function(){
		ferramenta = "redmi";
		$(".redmi").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".redmitext").css({
			color: "white"
		});
		$(".move, .rotate, .skew, .group, .text, .clippath, .remover, .modificar, .zoom, .orga").css({
			boxShadow: "0 0 0px 0px #A73E3D inset"
		});
		$(".movetext, .rotatetext, .skewtext, .grouptext, .texttext, .clippathtext, .removertext, .modificartext, .zoomtext, .orgatext").css({
			color: "black"
		});
		$(".previa, .corborda").css({
			zIndex: 0,
			opacity: 0
		});
		$(".previapreen, .corpreen").css({
			zIndex: 0,
			opacity: 0
		});
		$(".trace, .traceval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineend, .lineendval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".linetext, .recttext, .circletext, .ellipsetext, .polylinetext, .polygontext, .pathtext").css({
				color: "black"
			});
			menu = 0;
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0
			});
			menut = 0;
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 100,
			opacity: 1
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".instru").html("Coloque as quantas vezes o objeto será redimensionado em X e Y na barra superior. Valores maior que 1 (um) aumentam o elemento e menores que 1 (um) diminuem o elemento. Para aplicar você deve clicar no elemento desejado.");
	});

	$(".skew, .skewcai, .skewsym, .skewtext").click(function(){
		ferramenta = "skew";
		$(".skew").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".skewtext").css({
			color: "white"
		});
		$(".move, .rotate, .redmi, .group, .text, .clippath, .remover, .modificar, .zoom, .orga").css({
			boxShadow: "0 0 0px 0px #A73E3D inset"
		});
		$(".movetext, .rotatetext, .redmitext, .grouptext, .texttext, .clippathtext, .removertext, .modificartext, .zoomtext, .orgatext").css({
			color: "black"
		});
		$(".previa, .corborda").css({
			zIndex: 0,
			opacity: 0
		});
		$(".previapreen, .corpreen").css({
			zIndex: 0,
			opacity: 0
		});
		$(".trace, .traceval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineend, .lineendval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".linetext, .recttext, .circletext, .ellipsetext, .polylinetext, .polygontext, .pathtext").css({
				color: "black"
			});
			menu = 0;
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0
			});
			menut = 0;
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 100,
			opacity: 1
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".instru").html("Coloque o valor que o objeto será inclidado em X e Y na barra superior. Para aplicar você deve clicar no elemento desejado.");
	});

	$(".group, .groupcai, .groupsym, .grouptext").click(function(){
		ferramenta = "group";
		$(".group").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".grouptext").css({
			color: "white"
		});
		$(".previa, .corborda").css({
			zIndex: 0,
			opacity: 0
		});
		$(".previapreen, .corpreen").css({
			zIndex: 0,
			opacity: 0
		});
		$(".trace, .traceval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineend, .lineendval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0,
			boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".linetext, .recttext, .circletext, .ellipsetext, .polylinetext, .polygontext, .pathtext").css({
				color: "black"
			});
			menu = 0;
			$(".formas, .text, .clippath, .remover, .modificar, .zoom, .orga").css({
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
			$(".formastext, .texttext, .clippathtext, .removertext, .modificartext, .zoomtext, .orgatext").css({
				color: "black",
			});
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".movetext, .rotatetext, .skewtext, .redmitext").css({
				color: "black"
			});
			menut = 0;
			$(".transform").css({
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
			$(".transformtext").css({
				color: "black",
			});
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 100,
			opacity: 1
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".instru").html("Coloque um nome no grupo, não pode conter caracteres especiais, espaços e acentos, depois clique criar pra confirmar o grupo. Não é possível criar dois (2) grupos com o mesmo nome. Para colocar elementos dentro do grupo basta clicar sobre eles.");
	});

	$(".text, .textcai, .textsym, .texttext").click(function(){
		ferramenta = "text";
		$(".text").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".texttext").css({
			color: "white"
		});
		$(".previa, .corborda").css({
			zIndex: 40,
			opacity: 1
		});
		$(".previapreen, .corpreen").css({
			zIndex: 40,
			opacity: 1
		});
		$(".trace, .traceval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineend, .lineendval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0,
			boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".linetext, .recttext, .circletext, .ellipsetext, .polylinetext, .polygontext, .pathtext").css({
				color: "black"
			});
			menu = 0;
			$(".formas, .group, .clippath, .remover, .modificar, .zoom, .orga").css({
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
			$(".formastext, .grouptext, .clippathtext, .removertext, .modificartext, .zoomtext, .orgatext").css({
				color: "black",
			});
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".movetext, .rotatetext, .skewtext, .redmitext").css({
				color: "black"
			});
			menut = 0;
			$(".transform").css({
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
			$(".transformtext").css({
				color: "black",
			});
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 100,
			opacity: 1
		});
		$(".prot").css({
			zIndex: 100,
			opacity: 1
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 200,
			opacity: 1
		});
		$(".instru").html("Clique na tela de desenho pra determinar o incio do texto. Após este clique o texto poderá ser alterado, lembrando que você pode escrever o texto no campo 'Insira o texto antes mesmo de clicar na tela de desenho, mas ele só será exibido ao clicar na tela e ainda pode ser modificado. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
	});

	$(".clippath, .clippath, .clippath, .clippath").click(function(){
		ferramenta = "clippath";
		$(".clippath").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".clippathtext").css({
			color: "white"
		});
		$(".previa, .corborda").css({
			zIndex: 0,
			opacity: 0
		});
		$(".previapreen, .corpreen").css({
			zIndex: 0,
			opacity: 0
		});
		$(".trace, .traceval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineend, .lineendval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0,
			boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".linetext, .recttext, .circletext, .ellipsetext, .polylinetext, .polygontext, .pathtext").css({
				color: "black"
			});
			menu = 0;
			$(".formas, .group, .text, .remover, .modificar, .zoom, .orga").css({
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
			$(".formastext, .grouptext, .texttext, .removertext, .modificartext, .zoomtext, .orgatext").css({
				color: "black",
			});
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".movetext, .rotatetext, .skewtext, .redmitext").css({
				color: "black"
			});
			menut = 0;
			$(".transform").css({
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
			$(".transformtext").css({
				color: "black",
			});
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".instru").html("Clique sobre os elementos que serão o preenchimento, para finalizar a seleção tecle enter.");
	});

	$(".remover, .removertext").click(function(){
		ferramenta = "remover";
		$(".remover").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".removertext").css({
			color: "white"
		});
		$(".previa, .corborda").css({
			zIndex: 0,
			opacity: 0
		});
		$(".previapreen, .corpreen").css({
			zIndex: 0,
			opacity: 0
		});
		$(".trace, .traceval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineend, .lineendval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0,
			boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".linetext, .recttext, .circletext, .ellipsetext, .polylinetext, .polygontext, .pathtext").css({
				color: "black"
			});
			menu = 0;
			$(".formas, .group, .text, .clippath, .modificar, .zoom, .orga").css({
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
			$(".formastext, .grouptext, .texttext, .clippathtexte, .modificartext, .zoomtext, .orgatext").css({
				color: "black",
			});
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".movetext, .rotatetext, .skewtext, .redmitext").css({
				color: "black"
			});
			menut = 0;
			$(".transform").css({
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
			$(".transformtext").css({
				color: "black",
			});
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".instru").html("Para remover um determinado elemento já criado basta você clicar sobre ele, independente da ordem que ele foi criado.");
	});

	$(".modificar, .modificartext").click(function(){
		ferramenta = "modificar";
		$(".modificar").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".modificartext").css({
			color: "white"
		});
		$(".previa, .corborda").css({
			zIndex: 40,
			opacity: 1
		});
		$(".previapreen, .corpreen").css({
			zIndex: 40,
			opacity: 1
		});
		$(".trace, .traceval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".lineend, .lineendval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 40,
			opacity: 1
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0,
			boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".linetext, .recttext, .circletext, .ellipsetext, .polylinetext, .polygontext, .pathtext").css({
				color: "black"
			});
			menu = 0;
			$(".formas, .group, .text, .clippath, .remover, .zoom, .orga").css({
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
			$(".formastext, .grouptext, .texttext, .clippathtext, .removertext, .zoomtext, .orgatext").css({
				color: "black",
			});
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".movetext, .rotatetext, .skewtext, .redmitext").css({
				color: "black"
			});
			menut = 0;
			$(".transform").css({
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
			$(".transformtext").css({
				color: "black",
			});
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 100,
			opacity: 1
		});
		$(".prot").css({
			zIndex: 100,
			opacity: 1
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 100,
			opacity: 1
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".instru").html("Para modificar um elemento já criado basta fazer as modificações no menu superior e depois clicar no elemento que receberá essas modificações.");
	});
	$(".zoom, .zoomtext").click(function(){
		ferramenta = "zoom";
		$(".zoom").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".zoomtext").css({
			color: "white"
		});
		$(".previa, .corborda").css({
			zIndex: 0,
			opacity: 0
		});
		$(".previapreen, .corpreen").css({
			zIndex: 0,
			opacity: 0
		});
		$(".trace, .traceval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 00,
			opacity: 0
		});
		$(".lineend, .lineendval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0,
			boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".linetext, .recttext, .circletext, .ellipsetext, .polylinetext, .polygontext, .pathtext").css({
				color: "black"
			});
			menu = 0;
			$(".formas, .group, .text, .clippath, .remover, .modificar, .orga").css({
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
			$(".formastext, .grouptext, .texttext, .clippathtext, .removertext, .modificartext, .orgatext").css({
				color: "black",
			});
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".movetext, .rotatetext, .skewtext, .redmitext").css({
				color: "black"
			});
			menut = 0;
			$(".transform").css({
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
			$(".transformtext").css({
				color: "black",
			});
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 100,
			opacity: 1
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 0,
			opacity: 0
		});
		$(".guia, .guiabt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".instru").html("Para aumentar o zoom basta colocar valores maiores que cem (100) e para diminuir valores menores que cem (100).");
	});
	$(".orga, .orgatext").click(function(){
		ferramenta = "organizar";
		$(".orga").css({
			boxShadow: "0 0 25px 25px #A73E3D inset"
		});
		$(".orgatext").css({
			color: "white"
		});
		$(".previa, .corborda").css({
			zIndex: 0,
			opacity: 0
		});
		$(".previapreen, .corpreen").css({
			zIndex: 0,
			opacity: 0
		});
		$(".trace, .traceval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linewidth, .linewidthval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".lineopac, .lineopacval").css({
			zIndex: 00,
			opacity: 0
		});
		$(".lineend, .lineendval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".linecorner, .linecornerval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".preenopac, .preenopacval").css({
			zIndex: 0,
			opacity: 0
		});
		$(".line, .recti, .circle, .ellipse, .polyline, .polygon, .path").css({
				zIndex: 0,
				opacity: 0,
			boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".linetext, .recttext, .circletext, .ellipsetext, .polylinetext, .polygontext, .pathtext").css({
				color: "black"
			});
			menu = 0;
			$(".formas, .group, .text, .clippath, .remover, .modificar, .zoom").css({
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
			$(".formastext, .grouptext, .texttext, .clippathtext, .removertext, .modificartext, .zoomtext").css({
				color: "black",
			});
		$(".move, .rotate, .skew, .redmi").css({
				zIndex: 0,
				opacity: 0,
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
		$(".movetext, .rotatetext, .skewtext, .redmitext").css({
				color: "black"
			});
			menut = 0;
			$(".transform").css({
				boxShadow: "0 0 0px 0px #A73E3D inset"
			});
			$(".transformtext").css({
				color: "black",
			});
		$(".coord, .textmx, .movex, .textmy, .movey").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordes, .escalamx, .escalax, .escalamy, .escalay").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordg, .grausm, .graus").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordinc, .incmx, .incx, .incmy, .incy").css({
			zIndex: 0,
			opacity: 0
		});
		$(".coordgru, .grum, .grup, .criagru").css({
			zIndex: 0,
			opacity: 0
		});
		$(".textpro").css({
			zIndex: 0,
			opacity: 0
		});
		$(".prot").css({
			zIndex: 0,
			opacity: 0
		});
		$(".zp, .zm, .zbt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".conta, .contagota").css({
			zIndex: 0,
			opacity: 0
		});
		$(".formorga").css({
			zIndex: 200,
			opacity: 1
		});
		$(".guia, .guiabt").css({
			zIndex: 0,
			opacity: 0
		});
		$(".instru").html("Marque a opção 'Enviar para cima' e clique no elemento para manda-lo à primeira posição e marque a opção 'Enviar para baixo' e clique no elemento para manda-lo à ultima opção.");
	});
//

//Mostrar prévias das mixagens de cor, criar cores e mostrar dicas sobre elas.
	$(".previa").click(function(){
		if(oculta == 0 && (ferramenta == "line" || ferramenta == "rect" || ferramenta == "circle" || ferramenta == "ellipse" || ferramenta == "polyline" || ferramenta == "polygon" || ferramenta == "path" || ferramenta == "modificar" || ferramenta == "text")){
			$(".preen").css({
				opacity: 1,
				zIndex: 40
			});
			oculta = 1;
			$(".instru").html("Esta propriedade alterará a cor da linha. O primeiro slider adiciona vermelho à cor, o segundo adiciona verde e o terceiro adiciona o azul formando a cor completa, se o campo transparente for clicado a cor será ignorada e borda da caixa ficará vermelha pra sinalizar que a transparência está ativa. Caso essa propriedade não seja alterada a cor será preta.");
		}
		else if(oculta == 1){
			$(".preen").css({
				opacity: 0,
				zIndex: 0
			});
			oculta = 0;
		}
	});
	$("#dese, .previapreen, .check, .line, .recti, .circle, .ellipse, .polyline, .polygon, .path, .move, .rotate, .skew, .redmi, .group, .text, .clippath, .remover, .modificar, .traceval, .lineopacval, .linewidthval, .lineendval, .linecornerval, .preenopacval, .hint").click(function(){
		$(".preen").css({
				opacity: 0,
				zIndex: 0
			});
			oculta = 0;
	});

	$("#dese, .previa, .checkpreen, .line, .recti, .circle, .ellipse, .polyline, .polygon, .path, .move, .rotate, .skew, .redmi, .group, .text, .clippath, .remover, .modificar, .traceval, .lineopacval, .linewidthval, .lineendval, .linecornerval, .preenopacval, .hint").click(function(){
		$(".preenpreen").css({
				opacity: 0,
				zIndex: 0
			});
			ocultapreen = 0;
	});

	$(".check").click(function(){
		if($(".check:checked").length == 1){
			$(".previa").css({
				border: "4px solid red"
			});
		}
		else{
			$(".previa").css({
				border: "2px solid white"
			});
		}
	});

	$(".checkpreen").click(function(){
		if($(".checkpreen:checked").length == 1){
			$(".previapreen").css({
				border: "4px solid red"
			});
		}
		else{
			$(".previapreen").css({
				border: "2px solid white"
			});
		}
	});

	$("#red, #blue, #green").mousemove(function(){
		$(".previa").css({
			background: "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")"
		});
	});

	$(".previapreen").click(function(){
		if(ocultapreen == 0 && (ferramenta == "line" || ferramenta == "rect" || ferramenta == "circle" || ferramenta == "ellipse" || ferramenta == "polyline" || ferramenta == "polygon" || ferramenta == "path" || ferramenta == "modificar" || ferramenta == "text")){
			$(".preenpreen").css({
				opacity: 1,
				zIndex: 40
			});
			ocultapreen = 1;
			$(".instru").html("Esta propriedade alterara a cor do preenchimento. O primeiro slider adciona vermelho à cor, o segundo adciona verde e o terceiro adciona o azul formando a cor completa, se o campo transparente for clicado a cor será ignorada e borda da caixa ficará vermelha pra sinalizar que a transparência está ativa .Caso essa propreidade não seja alterada a cor será preta.");
		}
		else if(ocultapreen == 1){
			$(".preenpreen").css({
				opacity: 0,
				zIndex: 0
			});
			ocultapreen = 0;
		}
	});

	$("#redpreen, #bluepreen, #greenpreen").mousemove(function(){
		$(".previapreen").css({
			background: "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")"
		});
	});
//

//Criando elementos svg por 2 cliques
	$("#dese").click(function(e){
		if(ferramenta == "line"){
			if(controle == 0){
				if($(".check:checked").length == 1){
					var stroke = "transparent";
				}
				else{
					var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
				}
				explica = document.createElementNS(link, "line");
				var linewidth = $(".linewidthval").val();
				var x1 = ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
				var y1 = ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
				explica.setAttributeNS(null, "x1", x1);
				explica.setAttributeNS(null, "y1", y1);
				explica.setAttributeNS(null, "stroke", stroke);
				explica.setAttributeNS(null, "stroke-width", linewidth);
				var x2 = x1;
				var y2 = y1;
				explica.setAttributeNS(null, "x2", x2);
				explica.setAttributeNS(null, "y2", y2);
				explica.setAttribute("class", "linecont");
				intro.appendChild(explica);
				controle++;
				var trans = " ";
				var rota = " ";
				var escal = " ";
				var inc = " ";
				explica.onmouseover = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "0.6"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "0.6",
							fill: "gray"
						});
					}
				}
				explica.onmouseout = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "1"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "1",
							fill: over
						});
					}
				}
				explica.onclick = function(){
					this.style.opacity = "0.2";
					var vair = this;
					clique(vair);
					if(ferramenta == "move"){
						var movex = $(".movex").val() || 0;
						var movey = $(".movey").val() || 0;
						trans = "translate(";
						trans += movex;
						trans += ",";
						trans += movey;
						trans += ")";
						trans += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "redmi"){
						var escalax = $(".escalax").val() || 1;
						var escalay = $(".escalay").val() || 1;
						escal = "scale(";
						escal += escalax;
						escal += ",";
						escal += escalay;
						escal += ")";
						escal += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "rotate"){
						var rotx = +this.getAttributeNS(null, "x1") + ((+this.getAttributeNS(null, "x2") - +(this.getAttributeNS(null, "x1"))) / 2);
						var roty = +this.getAttributeNS(null, "y1") + ((+this.getAttributeNS(null, "y2") - +(this.getAttributeNS(null, "y1"))) / 2);
						var rot = $(".graus").val() || 0;
						rota = "rotate(";
						rota += rot;
						rota += " ";
						rota += rotx;
						rota += ",";
						rota += roty;
						rota += ")";
						rota += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "skew"){
						var incx = $(".incx").val() || 0;
						var incy = $(".incy").val() || 0;
						inc = "skewX(";
						inc += incx;
						inc += ")";
						inc += " ";
						inc += "skewY(";
						inc += incy;
						inc += ")";
						inc += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					 }
					else if(ferramenta == "clippath"){
						if(path == 0 && $(this).data("cont") != 1){
							this.setAttributeNS(null, "clip-path", "url(#clip" + pathid + ")");
							$(this).data("cont", 1);
						}
						else if(path == 1){
							var clip = document.createElementNS(link, "clipPath");
							clip.setAttribute("id", "clip" + pathid);
							clip.setAttribute("class", "linecont");
							intro.appendChild(clip);
							document.getElementById("clip" + pathid + "").appendChild(this);
							path = 0;
							pathid++;
							$(".instru").html("Clique sobre os elementos que serão o preenchimento, para finalizar a seleção tecle enter.");
						}
					}
					else if(ferramenta == "remover"){
						this.remove();
					}
					else if(ferramenta == "group"){
						document.getElementById(""+ id +"").appendChild(this);
					}
					else if(ferramenta == "conta"){
						var capstroke = this.getAttributeNS(null, "stroke");
						if(capstroke != "transparent"){
							$(".previa").css({
								background: capstroke
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var cores = capstroke.split(",");
							var redstroke = cores[0].replace(regexred, "");
							var greenstroke = cores[1];
							var bluestroke = cores[2].replace(regexblue, "");
							$("#red").val(redstroke);
							$("#green").val(greenstroke);
							$("#blue").val(bluestroke);
							conta--;
							ferramenta = "modificar";
						}
					}
					else if(ferramenta == "modificar" && conta == 0){
						if($(".check:checked").length == 1){
							var stroke = "transparent";
						}
						else{
							var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
						}
						var linewidth = $(".linewidthval").val();
						this.setAttributeNS(null, "stroke", stroke);
						this.setAttributeNS(null, "stroke-width", linewidth);
						if($(".traceval").val() > 0){
							var trace = $(".traceval").val();
							this.setAttributeNS(null, "stroke-dasharray", trace);
						}
						if($(".lineopacval").val() <= 100){
							var lineopac = $(".lineopacval").val() / 100;
							this.setAttributeNS(null, "stroke-opacity", lineopac);
						}
						if($(".lineendval").val() != "nenhum"){
							var lineend = $(".lineendval").val();
							this.setAttributeNS(null, "stroke-linecap", lineend);
						}
					}
					else if(ferramenta == "organizar"){
						if($(".enviacima:checked").length == 1){
							$(this).appendTo(intro);
						}
						else if($(".enviabaixo:checked").length == 1){
							$(this).prependTo(intro);
						}
					}
				}
				if($(".traceval").val() > 0){
					var trace = $(".traceval").val();
					explica.setAttributeNS(null, "stroke-dasharray", trace);
				}
				if($(".lineopacval").val() <= 100){
					var lineopac = $(".lineopacval").val() / 100;
					explica.setAttributeNS(null, "stroke-opacity", lineopac);
				}
				if($(".lineendval").val() != "nenhum"){
					var lineend = $(".lineendval").val();
					explica.setAttributeNS(null, "stroke-linecap", lineend);
				}
				$(".instru").html("Clique novamente na tela de desenho para definir o ponto final e interromper a prévia. Caso você clique novamente será criada um nova linha.");
			}
			else if(controle == 1){
				var x2 = ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
				var y2 = ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
				explica.setAttributeNS(null, "x2", x2);
				explica.setAttributeNS(null, "y2", y2);
				controle--;
				$(".instru").html("Clique na tela de desenho pra determinar o incio da linha. Após este clique a linha receberá uma prévia do ponto final de acordo com a posição do mouse. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
			}
		}
		else if(ferramenta == "rect"){
			if(controle == 0){
				if($(".check:checked").length == 1){
					var stroke = "transparent";
				}
				else{
					var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
				}
				if($(".checkpreen:checked").length == 1){
					var preen = "transparent";
				}
				else{
					var preen = "rgb(" + $("#redpreen").val() + ", " + $("#greenpreen").val()+ ", " + $("#bluepreen").val() + ")";
				}
				explica = document.createElementNS(link, "rect");
				var linewidth = $(".linewidthval").val();
				var x = ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
				var auxx = x;
				var y = ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom)  + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
				var auxy = y;
				explica.setAttributeNS(null, "x", x);
				explica.setAttributeNS(null, "y", y);
				explica.setAttributeNS(null, "stroke", stroke);
				explica.setAttributeNS(null, "fill", preen);
				explica.setAttributeNS(null, "stroke-width", linewidth);
				var width = 0;
				var height = 0;
				explica.setAttributeNS(null, "width", width);
				explica.setAttributeNS(null, "height", height);
				explica.setAttribute("class", "linecont");
				intro.appendChild(explica);
				controle++;
				var trans = " ";
				var rota = " ";
				var escal = " ";
				var inc = " ";
				explica.onmouseover = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "0.6"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "0.6",
							fill: "gray"
						});
					}
				}
				explica.onmouseout = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "1"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "1",
							fill: over
						});
					}
				}
				explica.onclick = function(){
					this.style.opacity = "0.2";
					var vair = this;
					clique(vair);
					if(ferramenta == "move"){
						var movex = $(".movex").val() || 0;
						var movey = $(".movey").val() || 0;
						trans = "translate(";
						trans += movex;
						trans += ",";
						trans += movey;
						trans += ")";
						trans += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "rotate"){
						var rotx = (+(this.getAttributeNS(null, "width")) / 2) + +(this.getAttributeNS(null, "x"));
						var roty = (+(this.getAttributeNS(null, "height")) / 2) + +(this.getAttributeNS(null, "y"));
						var rot = $(".graus").val() || 0;
						rota = "rotate(";
						rota += rot;
						rota += " ";
						rota += rotx;
						rota += ",";
						rota += roty;
						rota += ")";
						rota += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "redmi"){
						var escalax = $(".escalax").val() || 1;
						var escalay = $(".escalay").val() || 1;
						escal = "scale(";
						escal += escalax;
						escal += ",";
						escal += escalay;
						escal += ")";
						escal += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "skew"){
						var incx = $(".incx").val() || 0;
						var incy = $(".incy").val() || 0;
						inc = "skewX(";
						inc += incx;
						inc += ")";
						inc += " ";
						inc += "skewY(";
						inc += incy;
						inc += ")";
						inc += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					 }
					else if(ferramenta == "clippath"){
						if(path == 0 && $(this).data("cont") != 1){
							this.setAttributeNS(null, "clip-path", "url(#clip" + pathid + ")");
							$(this).data("cont", 1);
						}
						else if(path == 1){
							var clip = document.createElementNS(link, "clipPath");
							clip.setAttribute("id", "clip" + pathid);
							clip.setAttribute("class", "linecont");
							intro.appendChild(clip);
							document.getElementById("clip" + pathid + "").appendChild(this);
							path = 0;
							pathid++;
							$(".instru").html("Clique sobre os elementos que serão o preenchimento, para finalizar a seleção tecle enter.");
						}
					}
					else if(ferramenta == "remover"){
						this.remove();
					}
					else if(ferramenta == "group"){
						document.getElementById(""+ id +"").appendChild(this);
					}
					else if(ferramenta == "conta"){
						var auxcor = 0;
						var capstroke = this.getAttributeNS(null, "stroke");
						var capfill = this.getAttributeNS(null, "fill");
						if(capstroke != "transparent"){
							$(".previa").css({
								background: capstroke
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var cores = capstroke.split(",");
							var redstroke = cores[0].replace(regexred, "");
							var greenstroke = cores[1];
							var bluestroke = cores[2].replace(regexblue, "");
							$("#red").val(redstroke);
							$("#green").val(greenstroke);
							$("#blue").val(bluestroke);
							auxcor++;
						}
						if(capfill != "transparent"){
							$(".previapreen").css({
								background: capfill
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var coresfill = capfill.split(",");
							var redfill = coresfill[0].replace(regexred, "");
							var greenfill = coresfill[1];
							var bluefill = coresfill[2].replace(regexblue, "");
							$("#redpreen").val(redfill);
							$("#greenpreen").val(greenfill);
							$("#bluepreen").val(bluefill);
							auxcor++;
						}
						if(auxcor > 0){
							conta--;
							ferramenta = "modificar";
						}
					}
					else if(ferramenta == "modificar" && conta == 0){
						if($(".check:checked").length == 1){
							var stroke = "transparent";
						}
						else{
							var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
						}
						if($(".checkpreen:checked").length == 1){
							var preen = "transparent";
						}
						else{
							var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
						}
						var linewidth = $(".linewidthval").val();
						this.setAttributeNS(null, "stroke", stroke);
						this.setAttributeNS(null, "fill", preen);
						this.setAttributeNS(null, "stroke-width", linewidth);
						if($(".traceval").val() > 0){
							var trace = $(".traceval").val();
							this.setAttributeNS(null, "stroke-dasharray", trace);
						}
						if($(".lineopacval").val() <= 100){
							var lineopac = $(".lineopacval").val() / 100;
							this.setAttributeNS(null, "stroke-opacity", lineopac);
						}
						if($(".preenopacval").val() <= 100){
							var fillopac = $(".preenopacval").val() / 100;
							this.setAttributeNS(null, "fill-opacity", fillopac);
						}
						if($(".lineendval").val() != "nenhum"){
							var lineend = $(".lineendval").val();
							this.setAttributeNS(null, "stroke-linecap", lineend);
						}
						if($(".linecornerval").val() != "nenhum"){
							var linecorner = $(".linecornerval").val();
							this.setAttributeNS(null, "stroke-linejoin", linecorner);
						}
					}
					else if(ferramenta == "organizar"){
						if($(".enviacima:checked").length == 1){
							$(this).appendTo(intro);
						}
						else if($(".enviabaixo:checked").length == 1){
							$(this).prependTo(intro);
						}
					}
				}
				if($(".traceval").val() > 0){
					var trace = $(".traceval").val();
					explica.setAttributeNS(null, "stroke-dasharray", trace);
				}
				if($(".lineopacval").val() <= 100){
					var lineopac = $(".lineopacval").val() / 100;
					explica.setAttributeNS(null, "stroke-opacity", lineopac);
				}
				if($(".preenopacval").val() <= 100){
					var fillopac = $(".preenopacval").val() / 100;
					explica.setAttributeNS(null, "fill-opacity", fillopac);
				}
				if($(".lineendval").val() != "nenhum"){
					var lineend = $(".lineendval").val();
					explica.setAttributeNS(null, "stroke-linecap", lineend);
				}
				if($(".linecornerval").val() != "nenhum"){
					var linecorner = $(".linecornerval").val();
					explica.setAttributeNS(null, "stroke-linejoin", linecorner);
				}
				$(".instru").html("Clique novamente na tela de desenho para definir o ponto final e interromper a prévia. Caso você clique novamente será criada um novo retângulo.");
			}
			else if(controle == 1){
				var width = (((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)))) - (explica.getAttributeNS(null, "x"));
				var height = (((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)))) - (explica.getAttributeNS(null, "y"));
				explica.setAttributeNS(null, "width", width);
				explica.setAttributeNS(null, "height", height);
				controle--;
				$(".instru").html("Clique na tela de desenho pra determinar o incio do retângulo. Após este clique a forma receberá uma prévia da forma final de acordo com a posição do mouse da esquerda para a direita e de cima para baixo. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");

			}
		}
		else if(ferramenta == "circle"){
			if(controle == 0){
				if($(".check:checked").length == 1){
					var stroke = "transparent";
				}
				else{
					var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
				}
				if($(".checkpreen:checked").length == 1){
					var preen = "transparent";
				}
				else{
					var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
				}
				explica = document.createElementNS(link, "circle");
				var linewidth = $(".linewidthval").val();
				var cx = ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
				var cy = ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
				explica.setAttributeNS(null, "cx", cx);
				explica.setAttributeNS(null, "cy", cy);
				explica.setAttributeNS(null, "stroke", stroke);
				explica.setAttributeNS(null, "fill", preen);
				explica.setAttributeNS(null, "stroke-width", linewidth);
				var r = 0;
				explica.setAttributeNS(null, "r", r);
				explica.setAttribute("class", "linecont");
				intro.appendChild(explica);
				controle++;
				var trans = " ";
				var rota = " ";
				var escal = " ";
				var inc = " ";
				explica.onmouseover = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "0.6"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "0.6",
							fill: "gray"
						});
					}
				}
				explica.onmouseout = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "1"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "1",
							fill: over
						});
					}
				}
				explica.onclick = function(){
					this.style.opacity = "0.2";
					var vair = this;
					clique(vair);
					if(ferramenta == "move"){
						var movex = $(".movex").val() || 0;
						var movey = $(".movey").val() || 0;
						trans = "translate(";
						trans += movex;
						trans += ",";
						trans += movey;
						trans += ")";
						trans += " ";
						this.setAttributeNS(null, "transform", trans + escal + inc);
					}
					else if(ferramenta == "redmi"){
						var escalax = $(".escalax").val() || 0;
						var escalay = $(".escalay").val() || 0;
						escal = "scale(";
						escal += escalax;
						escal += ",";
						escal += escalay;
						escal += ")";
						escal += " ";
						this.setAttributeNS(null, "transform", trans + escal + inc);
					}
					else if(ferramenta == "skew"){
						var incx = $(".incx").val() || 0;
						var incy = $(".incy").val() || 0;
						inc = "skewX(";
						inc += incx;
						inc += ")";
						inc += " ";
						inc += "skewY(";
						inc += incy;
						inc += ")";
						inc += " ";
						this.setAttributeNS(null, "transform", trans + escal + inc);
					 }
					else if(ferramenta == "clippath"){
						if(path == 0 && $(this).data("cont") != 1){
							this.setAttributeNS(null, "clip-path", "url(#clip" + pathid + ")");
							$(this).data("cont", 1);
						}
						else if(path == 1){
							var clip = document.createElementNS(link, "clipPath");
							clip.setAttribute("id", "clip" + pathid);
							clip.setAttribute("class", "linecont");
							intro.appendChild(clip);
							document.getElementById("clip" + pathid + "").appendChild(this);
							path = 0;
							pathid++;
							$(".instru").html("Clique sobre os elementos que serão o preenchimento, para finalizar a seleção tecle enter.");
						}
					}
					else if(ferramenta == "remover"){
						this.remove();
					}
					else if(ferramenta == "group"){
						document.getElementById(""+ id +"").appendChild(this);
					}
					else if(ferramenta == "conta"){
						var auxcor = 0;
						var capstroke = this.getAttributeNS(null, "stroke");
						var capfill = this.getAttributeNS(null, "fill");
						if(capstroke != "transparent"){
							$(".previa").css({
								background: capstroke
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var cores = capstroke.split(",");
							var redstroke = cores[0].replace(regexred, "");
							var greenstroke = cores[1];
							var bluestroke = cores[2].replace(regexblue, "");
							$("#red").val(redstroke);
							$("#green").val(greenstroke);
							$("#blue").val(bluestroke);
							auxcor++;
						}
						if(capfill != "transparent"){
							$(".previapreen").css({
								background: capfill
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var coresfill = capfill.split(",");
							var redfill = coresfill[0].replace(regexred, "");
							var greenfill = coresfill[1];
							var bluefill = coresfill[2].replace(regexblue, "");
							$("#redpreen").val(redfill);
							$("#greenpreen").val(greenfill);
							$("#bluepreen").val(bluefill);
							auxcor++;
						}
						if(auxcor > 0){
							conta--;
							ferramenta = "modificar";
						}
					}
					else if(ferramenta == "modificar" && conta == 0){
						if($(".check:checked").length == 1){
							var stroke = "transparent";
						}
						else{
							var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
						}
						if($(".checkpreen:checked").length == 1){
							var preen = "transparent";
						}
						else{
							var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
						}
						var linewidth = $(".linewidthval").val();
						this.setAttributeNS(null, "stroke", stroke);
						this.setAttributeNS(null, "fill", preen);
						this.setAttributeNS(null, "stroke-width", linewidth);
						if($(".traceval").val() > 0){
							var trace = $(".traceval").val();
							this.setAttributeNS(null, "stroke-dasharray", trace);
						}
						if($(".lineopacval").val() <= 100){
							var lineopac = $(".lineopacval").val() / 100;
							this.setAttributeNS(null, "stroke-opacity", lineopac);
						}
						if($(".preenopacval").val() <= 100){
							var fillopac = $(".preenopacval").val() / 100;
							this.setAttributeNS(null, "fill-opacity", fillopac);
						}
						if($(".lineendval").val() != "nenhum"){
							var lineend = $(".lineendval").val();
							this.setAttributeNS(null, "stroke-linecap", lineend);
						}
						if($(".linecornerval").val() != "nenhum"){
							var linecorner = $(".linecornerval").val();
							this.setAttributeNS(null, "stroke-linejoin", linecorner);
						}
					}
					else if(ferramenta == "organizar"){
						if($(".enviacima:checked").length == 1){
							$(this).appendTo(intro);
						}
						else if($(".enviabaixo:checked").length == 1){
							$(this).prependTo(intro);
						}
					}
				}
				if($(".traceval").val() > 0){
					var trace = $(".traceval").val();
					explica.setAttributeNS(null, "stroke-dasharray", trace);
				}
				if($(".lineopacval").val() <= 100){
					var lineopac = $(".lineopacval").val() / 100;
					explica.setAttributeNS(null, "stroke-opacity", lineopac);
				}
				if($(".preenopacval").val() <= 100){
					var fillopac = $(".preenopacval").val() / 100;
					explica.setAttributeNS(null, "fill-opacity", fillopac);
				}
				if($(".lineendval").val() != "nenhum"){
					var lineend = $(".lineendval").val();
					explica.setAttributeNS(null, "stroke-linecap", lineend);
				}
				if($(".linecornerval").val() != "nenhum"){
					var linecorner = $(".linecornerval").val();
					explica.setAttributeNS(null, "stroke-linejoin", linecorner);
				}
				$(".instru").html("Clique novamente na tela de desenho para definir o ponto final e interromper a prévia. Caso você clique novamente será criada um novo circulo.");
			}
			else if(controle == 1){
				var rx = (((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)))) - (explica.getAttributeNS(null, "cx"));
				var ry = (((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)))) - (explica.getAttributeNS(null, "cy"));
				if(rx > ry){
					var r = rx;
				}
				else{
					var r = ry;
				}
				explica.setAttributeNS(null, "r", r);
				controle--;
				$(".instru").html("Clique na tela de desenho pra determinar o incio do circulo. Após este clique a forma receberá uma prévia da forma final de acordo com a posição do mouse da esquerda para a direita e de cima para baixo. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
			}
		}
		else if(ferramenta == "ellipse"){
			if(controle == 0){
				if($(".check:checked").length == 1){
					var stroke = "transparent";
				}
				else{
					var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
				}
				if($(".checkpreen:checked").length == 1){
					var preen = "transparent";
				}
				else{
					var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
				}
				explica = document.createElementNS(link, "ellipse");
				var linewidth = $(".linewidthval").val();
				var cx = ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
				var cy = ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
				explica.setAttributeNS(null, "cx", cx);
				explica.setAttributeNS(null, "cy", cy);
				explica.setAttributeNS(null, "stroke", stroke);
				explica.setAttributeNS(null, "fill", preen);
				explica.setAttributeNS(null, "stroke-width", linewidth);
				var rx = 0;
				var ry = 0;
				explica.setAttributeNS(null, "rx", rx);
				explica.setAttributeNS(null, "ry", ry);
				explica.setAttribute("class", "linecont");
				intro.appendChild(explica);
				controle++;
				var trans = " ";
				var rota = " ";
				var escal = " ";
				var inc = " ";
				explica.onmouseover = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "0.6"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "0.6",
							fill: "gray"
						});
					}
				}
				explica.onmouseout = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "1"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "1",
							fill: over
						});
					}
				}
				explica.onclick = function(){
					this.style.opacity = "0.2";
					var vair = this;
					clique(vair);
					if(ferramenta == "move"){
						var movex = $(".movex").val() || 0;
						var movey = $(".movey").val() || 0;
						trans = "translate(";
						trans += movex;
						trans += ",";
						trans += movey;
						trans += ")";
						trans += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "redmi"){
						var escalax = $(".escalax").val() || 0;
						var escalay = $(".escalay").val() || 0;
						escal = "scale(";
						escal += escalax;
						escal += ",";
						escal += escalay;
						escal += ")";
						escal += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "rotate"){
						var rotx =  +(this.getAttributeNS(null, "cx"));
						var roty =  +(this.getAttributeNS(null, "cy"));
						var rot = $(".graus").val() || 0;
						rota = "rotate(";
						rota += rot;
						rota += " ";
						rota += rotx;
						rota += ",";
						rota += roty;
						rota += ")";
						rota += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "skew"){
						var incx = $(".incx").val() || 0;
						var incy = $(".incy").val() || 0;
						inc = "skewX(";
						inc += incx;
						inc += ")";
						inc += " ";
						inc += "skewY(";
						inc += incy;
						inc += ")";
						inc += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					 }
					else if(ferramenta == "clippath"){
						if(path == 0 && $(this).data("cont") != 1){
							this.setAttributeNS(null, "clip-path", "url(#clip" + pathid + ")");
							$(this).data("cont", 1);
						}
						else if(path == 1){
							var clip = document.createElementNS(link, "clipPath");
							clip.setAttribute("id", "clip" + pathid);
							clip.setAttribute("class", "linecont");
							intro.appendChild(clip);
							document.getElementById("clip" + pathid + "").appendChild(this);
							path = 0;
							pathid++;
							$(".instru").html("Clique sobre os elementos que serão o preenchimento, para finalizar a seleção tecle enter.");
						}
					}
					else if(ferramenta == "remover"){
						this.remove();
					}
					else if(ferramenta == "group"){
						document.getElementById(""+ id +"").appendChild(this);
					}
					else if(ferramenta == "conta"){
						var auxcor = 0;
						var capstroke = this.getAttributeNS(null, "stroke");
						var capfill = this.getAttributeNS(null, "fill");
						if(capstroke != "transparent"){
							$(".previa").css({
								background: capstroke
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var cores = capstroke.split(",");
							var redstroke = cores[0].replace(regexred, "");
							var greenstroke = cores[1];
							var bluestroke = cores[2].replace(regexblue, "");
							$("#red").val(redstroke);
							$("#green").val(greenstroke);
							$("#blue").val(bluestroke);
							auxcor++;
						}
						if(capfill != "transparent"){
							$(".previapreen").css({
								background: capfill
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var coresfill = capfill.split(",");
							var redfill = coresfill[0].replace(regexred, "");
							var greenfill = coresfill[1];
							var bluefill = coresfill[2].replace(regexblue, "");
							$("#redpreen").val(redfill);
							$("#greenpreen").val(greenfill);
							$("#bluepreen").val(bluefill);
							auxcor++;
						}
						if(auxcor > 0){
							conta--;
							ferramenta = "modificar";
						}
					}
					else if(ferramenta == "modificar" && conta == 0){
						if($(".check:checked").length == 1){
							var stroke = "transparent";
						}
						else{
							var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
						}
						if($(".checkpreen:checked").length == 1){
							var preen = "transparent";
						}
						else{
							var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
						}
						var linewidth = $(".linewidthval").val();
						this.setAttributeNS(null, "stroke", stroke);
						this.setAttributeNS(null, "fill", preen);
						this.setAttributeNS(null, "stroke-width", linewidth);
						if($(".traceval").val() > 0){
							var trace = $(".traceval").val();
							this.setAttributeNS(null, "stroke-dasharray", trace);
						}
						if($(".lineopacval").val() <= 100){
							var lineopac = $(".lineopacval").val() / 100;
							this.setAttributeNS(null, "stroke-opacity", lineopac);
						}
						if($(".preenopacval").val() <= 100){
							var fillopac = $(".preenopacval").val() / 100;
							this.setAttributeNS(null, "fill-opacity", fillopac);
						}
						if($(".lineendval").val() != "nenhum"){
							var lineend = $(".lineendval").val();
							this.setAttributeNS(null, "stroke-linecap", lineend);
						}
						if($(".linecornerval").val() != "nenhum"){
							var linecorner = $(".linecornerval").val();
							this.setAttributeNS(null, "stroke-linejoin", linecorner);
						}
					}
					else if(ferramenta == "organizar"){
						if($(".enviacima:checked").length == 1){
							$(this).appendTo(intro);
						}
						else if($(".enviabaixo:checked").length == 1){
							$(this).prependTo(intro);
						}
					}
				}
				if($(".traceval").val() > 0){
					var trace = $(".traceval").val();
					explica.setAttributeNS(null, "stroke-dasharray", trace);
				}
				if($(".lineopacval").val() <= 100){
					var lineopac = $(".lineopacval").val() / 100;
					explica.setAttributeNS(null, "stroke-opacity", lineopac);
				}
				if($(".preenopacval").val() <= 100){
					var fillopac = $(".preenopacval").val() / 100;
					explica.setAttributeNS(null, "fill-opacity", fillopac);
				}
				if($(".lineendval").val() != "nenhum"){
					var lineend = $(".lineendval").val();
					explica.setAttributeNS(null, "stroke-linecap", lineend);
				}
				if($(".linecornerval").val() != "nenhum"){
					var linecorner = $(".linecornerval").val();
					explica.setAttributeNS(null, "stroke-linejoin", linecorner);
				}
				$(".instru").html("Clique novamente na tela de desenho para definir o ponto final e interromper a prévia. Caso você clique novamente será criada uma nova elipse.");
			}
			else if(controle == 1){
				var rx = (((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)))) - (explica.getAttributeNS(null, "cx"));
				var ry = (((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)))) - (explica.getAttributeNS(null, "cy"));
				explica.setAttributeNS(null, "rx", rx);
				explica.setAttributeNS(null, "ry", ry);
				controle--;
				$(".instru").html("Clique na tela de desenho pra determinar o incio da elipse. Após este clique a forma receberá uma prévia da forma final de acordo com a posição do mouse da esquerda para a direita e de cima para baixo. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
			}
		}
		else if(ferramenta == "polyline"){
			if(controle == 0){
				if($(".check:checked").length == 1){
					var stroke = "transparent";
				}
				else{
					var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
				}
				if($(".checkpreen:checked").length == 1){
					var preen = "transparent";
				}
				else{
					var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
				}
				explica = document.createElementNS(link, "polyline");
				var linewidth = $(".linewidthval").val();
				aux = 0;
				cord[aux] = "";
				aux++;
				points = ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
				points += ",";
				points += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
				cord[aux] = points;
				aux++;
				explica.setAttributeNS(null, "points", points);
				explica.setAttributeNS(null, "stroke", stroke);
				explica.setAttributeNS(null, "fill", preen);
				explica.setAttributeNS(null, "stroke-width", linewidth);
				explica.setAttribute("class", "linecont");
				intro.appendChild(explica);
				controle++;
				var trans = " ";
				var rota = " ";
				var escal = " ";
				var inc = " ";
				explica.onmouseover = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "0.6"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "0.6",
							fill: "gray"
						});
					}
				}
				explica.onmouseout = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "1"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "1",
							fill: over
						});
					}
				}
				explica.onclick = function(){
					this.style.opacity = "0.2";
					var vair = this;
					clique(vair);
					if(ferramenta == "move"){
						var movex = $(".movex").val() || 0;
						var movey = $(".movey").val() || 0;
						trans = "translate(";
						trans += movex;
						trans += ",";
						trans += movey;
						trans += ")";
						trans += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "redmi"){
						var escalax = $(".escalax").val() || 0;
						var escalay = $(".escalay").val() || 0;
						escal = "scale(";
						escal += escalax;
						escal += ",";
						escal += escalay;
						escal += ")";
						escal += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "skew"){
						var incx = $(".incx").val() || 0;
						var incy = $(".incy").val() || 0;
						inc = "skewX(";
						inc += incx;
						inc += ")";
						inc += " ";
						inc += "skewY(";
						inc += incy;
						inc += ")";
						inc += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					 }
					else if(ferramenta == "clippath"){
						if(path == 0 && $(this).data("cont") != 1){
							this.setAttributeNS(null, "clip-path", "url(#clip" + pathid + ")");
							$(this).data("cont", 1);
						}
						else if(path == 1){
							var clip = document.createElementNS(link, "clipPath");
							clip.setAttribute("id", "clip" + pathid);
							clip.setAttribute("class", "linecont");
							intro.appendChild(clip);
							document.getElementById("clip" + pathid + "").appendChild(this);
							path = 0;
							pathid++;
							$(".instru").html("Clique sobre os elementos que serão o preenchimento, para finalizar a seleção tecle enter.");
						}
					}
					else if(ferramenta == "remover"){
						this.remove();
					}
					else if(ferramenta == "group"){
						document.getElementById(""+ id +"").appendChild(this);
					}
					else if(ferramenta == "conta"){
						var auxcor = 0;
						var capstroke = this.getAttributeNS(null, "stroke");
						var capfill = this.getAttributeNS(null, "fill");
						if(capstroke != "transparent"){
							$(".previa").css({
								background: capstroke
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var cores = capstroke.split(",");
							var redstroke = cores[0].replace(regexred, "");
							var greenstroke = cores[1];
							var bluestroke = cores[2].replace(regexblue, "");
							$("#red").val(redstroke);
							$("#green").val(greenstroke);
							$("#blue").val(bluestroke);
							auxcor++;
						}
						if(capfill != "transparent"){
							$(".previapreen").css({
								background: capfill
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var coresfill = capfill.split(",");
							var redfill = coresfill[0].replace(regexred, "");
							var greenfill = coresfill[1];
							var bluefill = coresfill[2].replace(regexblue, "");
							$("#redpreen").val(redfill);
							$("#greenpreen").val(greenfill);
							$("#bluepreen").val(bluefill);
							auxcor++;
						}
						if(auxcor > 0){
							conta--;
							ferramenta = "modificar";
						}
					}
					else if(ferramenta == "modificar" && conta == 0){
						if($(".check:checked").length == 1){
							var stroke = "transparent";
						}
						else{
							var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
						}
						if($(".checkpreen:checked").length == 1){
							var preen = "transparent";
						}
						else{
							var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
						}
						var linewidth = $(".linewidthval").val();
						this.setAttributeNS(null, "stroke", stroke);
						this.setAttributeNS(null, "fill", preen);
						this.setAttributeNS(null, "stroke-width", linewidth);
						if($(".traceval").val() > 0){
							var trace = $(".traceval").val();
							this.setAttributeNS(null, "stroke-dasharray", trace);
						}
						if($(".lineopacval").val() <= 100){
							var lineopac = $(".lineopacval").val() / 100;
							this.setAttributeNS(null, "stroke-opacity", lineopac);
						}
						if($(".preenopacval").val() <= 100){
							var fillopac = $(".preenopacval").val() / 100;
							this.setAttributeNS(null, "fill-opacity", fillopac);
						}
						if($(".lineendval").val() != "nenhum"){
							var lineend = $(".lineendval").val();
							this.setAttributeNS(null, "stroke-linecap", lineend);
						}
						if($(".linecornerval").val() != "nenhum"){
							var linecorner = $(".linecornerval").val();
							this.setAttributeNS(null, "stroke-linejoin", linecorner);
						}
					}
					else if(ferramenta == "organizar"){
						if($(".enviacima:checked").length == 1){
							$(this).appendTo(intro);
						}
						else if($(".enviabaixo:checked").length == 1){
							$(this).prependTo(intro);
						}
					}
				}
				if($(".traceval").val() > 0){
					var trace = $(".traceval").val();
					explica.setAttributeNS(null, "stroke-dasharray", trace);
				}
				if($(".lineopacval").val() <= 100){
					var lineopac = $(".lineopacval").val() / 100;
					explica.setAttributeNS(null, "stroke-opacity", lineopac);
				}
				if($(".preenopacval").val() <= 100){
					var fillopac = $(".preenopacval").val() / 100;
					explica.setAttributeNS(null, "fill-opacity", fillopac);
				}
				if($(".lineendval").val() != "nenhum"){
					var lineend = $(".lineendval").val();
					explica.setAttributeNS(null, "stroke-linecap", lineend);
				}
				if($(".linecornerval").val() != "nenhum"){
					var linecorner = $(".linecornerval").val();
					explica.setAttributeNS(null, "stroke-linejoin", linecorner);
				}
				$(".instru").html("Para finalizar a linha basta dar um duplo clique. Caso clique de novo uma nova linha será criada.");
			}
			else if(controle >= 1){
				points += " ";
				points += ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
				points += ",";
				points += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
				cord[aux] = points;
				aux++;
				explica.setAttributeNS(null, "points", points);
				controle++;
			}
		}
		else if(ferramenta == "polygon"){
			if(controle == 0){
				if($(".check:checked").length == 1){
					var stroke = "transparent";
				}
				else{
					var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
				}
				if($(".checkpreen:checked").length == 1){
					var preen = "transparent";
				}
				else{
					var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
				}
				explica = document.createElementNS(link, "polygon");
				var linewidth = $(".linewidthval").val();
				aux = 0;
				cord[aux] = "";
				aux++;
				points = ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
				var maxX = e.clientX - (innerWidth - ((innerWidth / 100) * 85));
				points += ",";
				points += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
				cord[aux] = points;
				aux++;
				var maxY = e.clientY - (innerHeight - ((innerHeight / 100) * 80));
				explica.setAttributeNS(null, "points", points);
				explica.setAttributeNS(null, "stroke", stroke);
				explica.setAttributeNS(null, "fill", preen);
				explica.setAttributeNS(null, "stroke-width", linewidth);
				explica.setAttribute("class", "linecont");
				intro.appendChild(explica);
				controle++;
				var trans = " ";
				var rota = " ";
				var escal = " ";
				var inc = " ";
				explica.onmouseover = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "0.6"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "0.6",
							fill: "gray"
						});
					}
				}
				explica.onmouseout = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "1"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "1",
							fill: over
						});
					}
				}
				explica.onclick = function(){
					this.style.opacity = "0.2";
					var vair = this;
					clique(vair);
					if(ferramenta == "move"){
						var movex = $(".movex").val() || 0;
						var movey = $(".movey").val() || 0;
						trans = "translate(";
						trans += movex;
						trans += ",";
						trans += movey;
						trans += ")";
						trans += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "rotate"){
						var rotx = +maxX / 2;
						var roty =+ maxY / 2;
						var rot = $(".graus").val() || 0;
						rota = "rotate(";
						rota += rot;
						rota += " ";
						rota += rotx;
						rota += ",";
						rota += roty;
						rota += ")";
						rota += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "redmi"){
						var escalax = $(".escalax").val() || 0;
						var escalay = $(".escalay").val() || 0;
						escal = "scale(";
						escal += escalax;
						escal += ",";
						escal += escalay;
						escal += ")";
						escal += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "skew"){
						var incx = $(".incx").val() || 0;
						var incy = $(".incy").val() || 0;
						inc = "skewX(";
						inc += incx;
						inc += ")";
						inc += " ";
						inc += "skewY(";
						inc += incy;
						inc += ")";
						inc += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					 }
					else if(ferramenta == "clippath"){
						if(path == 0 && $(this).data("cont") != 1){
							this.setAttributeNS(null, "clip-path", "url(#clip" + pathid + ")");
							$(this).data("cont", 1);
						}
						else if(path == 1){
							var clip = document.createElementNS(link, "clipPath");
							clip.setAttribute("id", "clip" + pathid);
							clip.setAttribute("class", "linecont");
							intro.appendChild(clip);
							document.getElementById("clip" + pathid + "").appendChild(this);
							path = 0;
							pathid++;
							$(".instru").html("Clique sobre os elementos que serão o preenchimento, para finalizar a seleção tecle enter.");
						}
					}
					else if(ferramenta == "remover"){
						this.remove();
					}
					else if(ferramenta == "group"){
						document.getElementById(""+ id +"").appendChild(this);
					}
					else if(ferramenta == "conta"){
						var auxcor = 0;
						var capstroke = this.getAttributeNS(null, "stroke");
						var capfill = this.getAttributeNS(null, "fill");
						if(capstroke != "transparent"){
							$(".previa").css({
								background: capstroke
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var cores = capstroke.split(",");
							var redstroke = cores[0].replace(regexred, "");
							var greenstroke = cores[1];
							var bluestroke = cores[2].replace(regexblue, "");
							$("#red").val(redstroke);
							$("#green").val(greenstroke);
							$("#blue").val(bluestroke);
							auxcor++;
						}
						if(capfill != "transparent"){
							$(".previapreen").css({
								background: capfill
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var coresfill = capfill.split(",");
							var redfill = coresfill[0].replace(regexred, "");
							var greenfill = coresfill[1];
							var bluefill = coresfill[2].replace(regexblue, "");
							$("#redpreen").val(redfill);
							$("#greenpreen").val(greenfill);
							$("#bluepreen").val(bluefill);
							auxcor++;
						}
						if(auxcor > 0){
							conta--;
							ferramenta = "modificar";
						}
					}
					else if(ferramenta == "modificar" && conta == 0){
						if($(".check:checked").length == 1){
							var stroke = "transparent";
						}
						else{
							var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
						}
						if($(".checkpreen:checked").length == 1){
							var preen = "transparent";
						}
						else{
							var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
						}
						var linewidth = $(".linewidthval").val();
						this.setAttributeNS(null, "stroke", stroke);
						this.setAttributeNS(null, "fill", preen);
						this.setAttributeNS(null, "stroke-width", linewidth);
						if($(".traceval").val() > 0){
							var trace = $(".traceval").val();
							this.setAttributeNS(null, "stroke-dasharray", trace);
						}
						if($(".lineopacval").val() <= 100){
							var lineopac = $(".lineopacval").val() / 100;
							this.setAttributeNS(null, "stroke-opacity", lineopac);
						}
						if($(".preenopacval").val() <= 100){
							var fillopac = $(".preenopacval").val() / 100;
							this.setAttributeNS(null, "fill-opacity", fillopac);
						}
						if($(".lineendval").val() != "nenhum"){
							var lineend = $(".lineendval").val();
							this.setAttributeNS(null, "stroke-linecap", lineend);
						}
						if($(".linecornerval").val() != "nenhum"){
							var linecorner = $(".linecornerval").val();
							this.setAttributeNS(null, "stroke-linejoin", linecorner);
						}
					}
					else if(ferramenta == "organizar"){
						if($(".enviacima:checked").length == 1){
							$(this).appendTo(intro);
						}
						else if($(".enviabaixo:checked").length == 1){
							$(this).prependTo(intro);
						}
					}
				}
				if($(".traceval").val() > 0){
					var trace = $(".traceval").val();
					explica.setAttributeNS(null, "stroke-dasharray", trace);
				}
				if($(".lineopacval").val() <= 100){
					var lineopac = $(".lineopacval").val() / 100;
					explica.setAttributeNS(null, "stroke-opacity", lineopac);
				}
				if($(".preenopacval").val() <= 100){
					var fillopac = $(".preenopacval").val() / 100;
					explica.setAttributeNS(null, "fill-opacity", fillopac);
				}
				if($(".lineendval").val() != "nenhum"){
					var lineend = $(".lineendval").val();
					explica.setAttributeNS(null, "stroke-linecap", lineend);
				}
				if($(".linecornerval").val() != "nenhum"){
					var linecorner = $(".linecornerval").val();
					explica.setAttributeNS(null, "stroke-linejoin", linecorner);
				}
				$(".instru").html("Para finalizar o poligono basta dar um duplo clique. Caso clique de novo um novo poligono será criada.");
			}
			else if(controle >=1){
				points += " ";
				points += ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
				points += ",";
				points += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
				cord[aux] = points;
				aux++;
				explica.setAttributeNS(null, "points", points);
				controle++;
				if(maxX < e.clientX - (innerWidth - ((innerWidth / 100) * 85))){
					maxX = e.clientX - (innerWidth - ((innerWidth / 100) * 85));
				}
				if(maxY < e.clientY - (innerHeight - ((innerHeight / 100) * 80))){
					maxY = e.clientY - (innerHeight - ((innerHeight / 100) * 80));
				}
			}
		}
		else if(ferramenta == "path"){
			if(controle == "0"){
				if($(".check:checked").length == 1){
					var stroke = "transparent";
				}
				else{
					var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
				}
				if($(".checkpreen:checked").length == 1){
					var preen = "transparent";
				}
				else{
					var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
				}
				explica = document.createElementNS(link, "path");
				var linewidth = $(".linewidthval").val();
				aux = 0;
				quant = 0;
				cord[aux] = "";
				aux++;
				d = "M";
				d += ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
				auxone = ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
				d += ",";
				d += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
				auxtwo = ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
				d += " ";
				cord[aux] = d;
				aux++;
				explica.setAttributeNS(null, "d", d);
				explica.setAttributeNS(null, "stroke", stroke);
				explica.setAttributeNS(null, "fill", preen);
				explica.setAttributeNS(null, "stroke-width", linewidth);
				explica.setAttribute("class", "linecont");
				intro.appendChild(explica);
				controle++;
				var trans = " ";
				var rota = " ";
				var escal = " ";
				var inc = " ";
				explica.onmouseover = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "0.6"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "0.6",
							fill: "gray"
						});
					}
				}
				explica.onmouseout = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "1"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "1",
							fill: over
						});
					}
				}
				explica.onclick = function(){
					this.style.opacity = "0.2";
					var vair = this;
					clique(vair);
					if(ferramenta == "move"){
						var movex = $(".movex").val() || 0;
						var movey = $(".movey").val() || 0;
						trans = "translate(";
						trans += movex;
						trans += ",";
						trans += movey;
						trans += ")";
						trans += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "redmi"){
						var escalax = $(".escalax").val() || 0;
						var escalay = $(".escalay").val() || 0;
						escal = "scale(";
						escal += escalax;
						escal += ",";
						escal += escalay;
						escal += ")";
						escal += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "skew"){
						var incx = $(".incx").val() || 0;
						var incy = $(".incy").val() || 0;
						inc = "skewX(";
						inc += incx;
						inc += ")";
						inc += " ";
						inc += "skewY(";
						inc += incy;
						inc += ")";
						inc += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					 }
					else if(ferramenta == "clippath"){
						if(path == 0 && $(this).data("cont") != 1){
							this.setAttributeNS(null, "clip-path", "url(#clip" + pathid + ")");
							$(this).data("cont", 1);
						}
						else if(path == 1){
							var clip = document.createElementNS(link, "clipPath");
							clip.setAttribute("id", "clip" + pathid);
							clip.setAttribute("class", "linecont");
							intro.appendChild(clip);
							document.getElementById("clip" + pathid + "").appendChild(this);
							path = 0;
							pathid++;
							$(".instru").html("Clique sobre os elementos que serão o preenchimento, para finalizar a seleção tecle enter.");
						}
					}
					else if(ferramenta == "remover"){
						this.remove();
					}
					else if(ferramenta == "group"){
						document.getElementById(""+ id +"").appendChild(this);
					}
					else if(ferramenta == "conta"){
						var auxcor = 0;
						var capstroke = this.getAttributeNS(null, "stroke");
						var capfill = this.getAttributeNS(null, "fill");
						if(capstroke != "transparent"){
							$(".previa").css({
								background: capstroke
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var cores = capstroke.split(",");
							var redstroke = cores[0].replace(regexred, "");
							var greenstroke = cores[1];
							var bluestroke = cores[2].replace(regexblue, "");
							$("#red").val(redstroke);
							$("#green").val(greenstroke);
							$("#blue").val(bluestroke);
							auxcor++;
						}
						if(capfill != "transparent"){
							$(".previapreen").css({
								background: capfill
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var coresfill = capfill.split(",");
							var redfill = coresfill[0].replace(regexred, "");
							var greenfill = coresfill[1];
							var bluefill = coresfill[2].replace(regexblue, "");
							$("#redpreen").val(redfill);
							$("#greenpreen").val(greenfill);
							$("#bluepreen").val(bluefill);
							auxcor++;
						}
						if(auxcor > 0){
							conta--;
							ferramenta = "modificar";
						}
					}
					else if(ferramenta == "modificar" && conta == 0){
						if($(".check:checked").length == 1){
							var stroke = "transparent";
						}
						else{
							var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
						}
						if($(".checkpreen:checked").length == 1){
							var preen = "transparent";
						}
						else{
							var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
						}
						var linewidth = $(".linewidthval").val();
						this.setAttributeNS(null, "stroke", stroke);
						this.setAttributeNS(null, "fill", preen);
						this.setAttributeNS(null, "stroke-width", linewidth);
						if($(".traceval").val() > 0){
							var trace = $(".traceval").val();
							this.setAttributeNS(null, "stroke-dasharray", trace);
						}
						if($(".lineopacval").val() <= 100){
							var lineopac = $(".lineopacval").val() / 100;
							this.setAttributeNS(null, "stroke-opacity", lineopac);
						}
						if($(".preenopacval").val() <= 100){
							var fillopac = $(".preenopacval").val() / 100;
							this.setAttributeNS(null, "fill-opacity", fillopac);
						}
						if($(".lineendval").val() != "nenhum"){
							var lineend = $(".lineendval").val();
							this.setAttributeNS(null, "stroke-linecap", lineend);
						}
						if($(".linecornerval").val() != "nenhum"){
							var linecorner = $(".linecornerval").val();
							this.setAttributeNS(null, "stroke-linejoin", linecorner);
						}
					}
					else if(ferramenta == "organizar"){
						if($(".enviacima:checked").length == 1){
							$(this).appendTo(intro);
						}
						else if($(".enviabaixo:checked").length == 1){
							$(this).prependTo(intro);
						}
					}
				}
				if($(".traceval").val() > 0){
					var trace = $(".traceval").val();
					explica.setAttributeNS(null, "stroke-dasharray", trace);
				}
				if($(".lineopacval").val() <= 100){
					var lineopac = $(".lineopacval").val() / 100;
					explica.setAttributeNS(null, "stroke-opacity", lineopac);
				}
				if($(".preenopacval").val() <= 100){
					var fillopac = $(".preenopacval").val() / 100;
					explica.setAttributeNS(null, "fill-opacity", fillopac);
				}
				if($(".lineendval").val() != "nenhum"){
					var lineend = $(".lineendval").val();
					explica.setAttributeNS(null, "stroke-linecap", lineend);
				}
				if($(".linecornerval").val() != "nenhum"){
					var linecorner = $(".linecornerval").val();
					explica.setAttributeNS(null, "stroke-linejoin", linecorner);
				}
				$(".instru").html("Clique com o botão direito na tela pra escolher entre linha reta e curva, essas alterações poder ser feitas várias vezes. Para finalizar o caminho basta dar um duplo clique, assim o caminho será autocompletado. Para apenas finalizar o caminho, sem autocompleta-lo, aperte a tecla enter. Caso clique de novo um novo caminho será criada.");
			}
			else if(controle >= 1){
				if(sub == "L"){
					quant = 0;
					d += " ";
					d += sub;
					d += ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
					d += ",";
					d += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
					d += " ";
					cord[aux] = d;
					aux++;
					explica.setAttributeNS(null, "d", d);
				}
				else if(sub == "Q"){
					if(dot == 0){
						dtwo = ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
						done = ((((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) + auxone) / 2) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
						dtwo += ",";
						done += ",";
						dtwo += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
						dtwo += " ";
						done += ((((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) + auxtwo) / 2) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
						done += " ";
						auxone = ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
						auxtwo = ((((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) + auxone) / 2) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
						if(quant == 0){
							d += sub;
						}
						quant = 1;
						cord[aux] = d;
						explica.setAttributeNS(null, "d", d + done + dtwo);
						dot++;
					}
					else if(dot == 1){
						done = ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
						done += ",";
						done += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
						done += " ";
						d += done + dtwo;
						cord[aux] = d;
						aux++;
						quant--;
						explica.setAttributeNS(null, "d", d);
						dot--;
					}
				}
			}
		}
		else if(ferramenta == "text"){
			if(controle == 0 && modifi == 0){
				if($(".check:checked").length == 1){
					var stroke = "transparent";
				}
				else{
					var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
				}
				if($(".checkpreen:checked").length == 1){
					var preen = "transparent";
				}
				else{
					var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
				}
				explica = document.createElementNS(link, "text");
				var linewidth = $(".linewidthval").val();
				var x = ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
				var auxx = x;
				var y = ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
				var auxy = y;
				var size = $(".fontsize").val();
				var family = $(".fontfamily").val();
				var space = $(".spacesize").val();
				var texto = $(".textoaqui").val();
				explica.setAttributeNS(null, "x", x);
				explica.setAttributeNS(null, "y", y);
				explica.setAttributeNS(null, "stroke", stroke);
				explica.setAttributeNS(null, "fill", preen);
				explica.setAttributeNS(null, "stroke-width", linewidth);
				explica.setAttributeNS(null, "font-size", size);
				explica.setAttributeNS(null, "font-family", family);
				explica.setAttributeNS(null, "letter-spacing", space);
				explica.setAttribute("class", "linecont");
				explica.setAttribute("id", "text" + iden);
				intro.appendChild(explica);
				explica.insertAdjacentHTML("afterBegin", texto);
				$(".textoaqui").focus();
				controle++;
				var trans = " ";
				var rota = " ";
				var escal = " ";
				var inc = " ";
				explica.onmouseover = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "0.6"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "0.6",
							fill: "gray"
						});
					}
				}
				explica.onmouseout = function(){
					if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
						$(this).css({
							opacity: "1"
						});
					}
					else{
						over = this.getAttributeNS(null, "fill");
						$(this).css({
							opacity: "1",
							fill: over
						});
					}
				}
				explica.oncontextmenu = function(){
					this.style.opacity = "0.2";
					var vair = this;
					clique(vair);
					if(ferramenta == "text"){
						var mudatext = this.getAttribute("id");
						alteratext(mudatext);
						$(".textoaqui").focus();
					}
				}
				explica.onclick = function(){
					this.style.opacity = "0.2";
					var vair = this;
					clique(vair);
					if(ferramenta == "move"){
						var movex = $(".movex").val() || 0;
						var movey = $(".movey").val() || 0;
						trans = "translate(";
						trans += movex;
						trans += ",";
						trans += movey;
						trans += ")";
						trans += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "rotate"){
						var rotx = (+(this.getAttributeNS(null, "width")) / 2) + +(this.getAttributeNS(null, "x"));
						var roty = (+(this.getAttributeNS(null, "height")) / 2) + +(this.getAttributeNS(null, "y"));
						var rot = $(".graus").val() || 0;
						rota = "rotate(";
						rota += rot;
						rota += " ";
						rota += rotx;
						rota += ",";
						rota += roty;
						rota += ")";
						rota += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "redmi"){
						var escalax = $(".escalax").val() || 1;
						var escalay = $(".escalay").val() || 1;
						escal = "scale(";
						escal += escalax;
						escal += ",";
						escal += escalay;
						escal += ")";
						escal += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					}
					else if(ferramenta == "skew"){
						var incx = $(".incx").val() || 0;
						var incy = $(".incy").val() || 0;
						inc = "skewX(";
						inc += incx;
						inc += ")";
						inc += " ";
						inc += "skewY(";
						inc += incy;
						inc += ")";
						inc += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					 }
					else if(ferramenta == "clippath"){
						if(path == 0 && $(this).data("cont") != 1){
							this.setAttributeNS(null, "clip-path", "url(#clip" + pathid + ")");
							$(this).data("cont", 1);
						}
						else if(path == 1){
							var clip = document.createElementNS(link, "clipPath");
							clip.setAttribute("id", "clip" + pathid);
							clip.setAttribute("class", "linecont");
							intro.appendChild(clip);
							document.getElementById("clip" + pathid + "").appendChild(this);
							path = 0;
							pathid++;
							$(".instru").html("Clique sobre os elementos que serão o preenchimento, para finalizar a seleção tecle enter.");
						}
					}
					else if(ferramenta == "remover"){
						this.remove();
					}
					else if(ferramenta == "group"){
						document.getElementById(""+ id +"").appendChild(this);
					}
					else if(ferramenta == "text"){

					}
					else if(ferramenta == "conta"){
						var auxcor = 0;
						var capstroke = this.getAttributeNS(null, "stroke");
						var capfill = this.getAttributeNS(null, "fill");
						if(capstroke != "transparent"){
							$(".previa").css({
								background: capstroke
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var cores = capstroke.split(",");
							var redstroke = cores[0].replace(regexred, "");
							var greenstroke = cores[1];
							var bluestroke = cores[2].replace(regexblue, "");
							$("#red").val(redstroke);
							$("#green").val(greenstroke);
							$("#blue").val(bluestroke);
							auxcor++;
						}
						if(capfill != "transparent"){
							$(".previapreen").css({
								background: capfill
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var coresfill = capfill.split(",");
							var redfill = coresfill[0].replace(regexred, "");
							var greenfill = coresfill[1];
							var bluefill = coresfill[2].replace(regexblue, "");
							$("#redpreen").val(redfill);
							$("#greenpreen").val(greenfill);
							$("#bluepreen").val(bluefill);
							auxcor++;
						}
						if(auxcor > 0){
							conta--;
							ferramenta = "modificar";
						}
					}
					else if(ferramenta == "modificar" && conta == 0){
						if($(".check:checked").length == 1){
							var stroke = "transparent";
						}
						else{
							var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
						}
						if($(".checkpreen:checked").length == 1){
							var preen = "transparent";
						}
						else{
							var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
						}
						var linewidth = $(".linewidthval").val();
						this.setAttributeNS(null, "stroke", stroke);
						this.setAttributeNS(null, "fill", preen);
						this.setAttributeNS(null, "stroke-width", linewidth);
						var size = $(".fontsize").val();
						var family = $(".fontfamily").val();
						var space = $(".spacesize").val();
						this.setAttributeNS(null, "font-size", size);
						this.setAttributeNS(null, "font-family", family);
						this.setAttributeNS(null, "letter-spacing", space);
						if($(".traceval").val() > 0){
							var trace = $(".traceval").val();
							this.setAttributeNS(null, "stroke-dasharray", trace);
						}
						if($(".lineopacval").val() <= 100){
							var lineopac = $(".lineopacval").val() / 100;
							this.setAttributeNS(null, "stroke-opacity", lineopac);
						}
						if($(".preenopacval").val() <= 100){
							var fillopac = $(".preenopacval").val() / 100;
							this.setAttributeNS(null, "fill-opacity", fillopac);
						}
						if($(".lineendval").val() != "nenhum"){
							var lineend = $(".lineendval").val();
							this.setAttributeNS(null, "stroke-linecap", lineend);
						}
						if($(".linecornerval").val() != "nenhum"){
							var linecorner = $(".linecornerval").val();
							this.setAttributeNS(null, "stroke-linejoin", linecorner);
						}
					}
					else if(ferramenta == "organizar"){
						if($(".enviacima:checked").length == 1){
							$(this).appendTo(intro);
						}
						else if($(".enviabaixo:checked").length == 1){
							$(this).prependTo(intro);
						}
					}
				}
				if($(".traceval").val() > 0){
					var trace = $(".traceval").val();
					explica.setAttributeNS(null, "stroke-dasharray", trace);
				}
				if($(".lineopacval").val() <= 100){
					var lineopac = $(".lineopacval").val() / 100;
					explica.setAttributeNS(null, "stroke-opacity", lineopac);
				}
				if($(".preenopacval").val() <= 100){
					var fillopac = $(".preenopacval").val() / 100;
					explica.setAttributeNS(null, "fill-opacity", fillopac);
				}
				if($(".lineendval").val() != "nenhum"){
					var lineend = $(".lineendval").val();
					explica.setAttributeNS(null, "stroke-linecap", lineend);
				}
				if($(".linecornerval").val() != "nenhum"){
					var linecorner = $(".linecornerval").val();
					explica.setAttributeNS(null, "stroke-linejoin", linecorner);
				}
				$(".instru").html("Para cofirmar o texto basta apertar a tecla enter, no próximo clique será iniciado um novo texto. Caso queira modificar algum texto já criado, basta mudar o texto em 'Insira o texto aqui' e depois clicar sobre o texto que será modificado com o botão direito.");
			}
		}
	});
//

//Finalizar forma com duplo clique
	$("#dese").dblclick(function(e){
		if(ferramenta == "polyline"){
			points += " ";
			points += ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
			points += ",";
			points += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
			explica.setAttributeNS(null, "points", points);
			controle = 0;
			fazer = 0;
			$(".instru").html("Clique na tela de desenho pra determinar o incio da linha. Após este clique a linha receberá uma prévia do  proximo ponto de acordo com a posição do mouse, a cada clique uma nova parte da linha será criada. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
		}
		else if(ferramenta == "polygon"){
			points += " ";
			points += ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
			points += ",";
			points += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
			explica.setAttributeNS(null, "points", points);
			controle = 0;
			fazer = 0;
			$(".instru").html("Clique na tela de desenho pra determinar o incio do poligono. Após este clique a linha receberá uma prévia do  proximo ponto de acordo com a posição do mouse, a cada clique uma nova face será criada no poligono. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
		}
		else if(ferramenta == "path"){
			d += "Z";
			explica.setAttributeNS(null, "d", d);
			controle = 0;
			quant = 0;
			dot = 0;
			sub = "L";
			fazer = 0;
			$(".instru").html("Clique na tela de desenho pra determinar o incio do caminho. Após este clique a linha receberá uma prévia do  proximo ponto de acordo com a posição do mouse, a cada clique uma nova face será criada no caminho. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
		}
	});
//

//Encerrar caminho sem fecha-lo
	$(document).keypress(function(e){
		if(ferramenta ==  "path"){
			if(e.which == 13){
				controle = 0;
				quant = 0;
				dot = 0;
				sub = "L";
				fazer = 0;
				$(".instru").html("Clique na tela de desenho pra determinar o incio do caminho. Após este clique a linha receberá uma prévia do  proximo ponto de acordo com a posição do mouse, a cada clique uma nova face será criada no caminho. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
			}
		}
		else if(ferramenta == "text"){
			if(e.which == 13){
				controle = 0;
				iden++;
				mudatext = "";
				valorid = "";
				$(".instru").html("Clique na tela de desenho pra determinar o incio do texto. Após este clique o texto poderá ser alterado, lembrando que você pode escrever o texto no campo 'Insira o texto antes mesmo de clicar na tela de desenho, mas ele só será exibido ao clicar na tela e ainda pode ser modificado. Para aplicar propriedades como cor, largura e outras deve escolhe-las antes do primeiro clique.");
			}
		}
		else if(ferramenta == "clippath"){
			if(path == 0){
				path++;
				$(".instru").html("Clique sobre o elemento que receberá o preenchimento, certifique-se que tanto o preenchimento como elementos estejam sobrepostos.");
			}
		}
	});
//

//Criar prévias para os elementos
	$("#dese").mousemove(function(e){
		if(controle == 1 && ferramenta == "line"){
			var x2 = ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
			var y2 = ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
			explica.setAttributeNS(null, "x2", x2);
			explica.setAttributeNS(null, "y2", y2);
		}
		else if(controle == 1 && ferramenta == "rect"){
			var width = (((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)))) - (explica.getAttributeNS(null, "x"));
				var height = (((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)))) - (explica.getAttributeNS(null, "y"));
				explica.setAttributeNS(null, "width", width);
				explica.setAttributeNS(null, "height", height);
		}
		else if(controle == 1 && ferramenta == "circle"){
			var rx = (((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)))) - (explica.getAttributeNS(null, "cx"));
			var ry = (((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)))) - (explica.getAttributeNS(null, "cy"));
				if(rx > ry){
					var r = rx;
				}
				else{
					var r = ry;
				}
				explica.setAttributeNS(null, "r", r);
		}
		else if(controle == 1 && ferramenta == "ellipse"){
			var rx = (((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)))) - (explica.getAttributeNS(null, "cx"));
			var ry = (((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)))) - (explica.getAttributeNS(null, "cy"));
			explica.setAttributeNS(null, "rx", rx);
			explica.setAttributeNS(null, "ry", ry);
		}
		else if(controle >= 1 && ferramenta == "polyline"){
			pointscon = " ";
			pointscon += ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
			pointscon += ",";
			pointscon += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
			explica.setAttributeNS(null, "points", points + pointscon);
		}
		else if(controle >= 1 && ferramenta == "polygon"){
			pointscon = " ";
			pointscon += ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
			pointscon += ",";
			pointscon += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
			explica.setAttributeNS(null, "points", points + pointscon);
		}
		else if(controle >= 1 && ferramenta == "path"){
			if(sub == "L"){
				quant = 0;
				dum = " ";
				dum += sub;
				dum += ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
				dum += ",";
				dum += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
				explica.setAttributeNS(null, "d", d + dum);
			}
			if(sub == "Q"){
				if(dot == 0){
						dqua = " ";
						dqua += ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) /  zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
						dtre = " ";
						dtre += ((((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) + auxone) / 2) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
						dqua += ",";
						dtre += ",";
						dqua += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
						dqua += " ";
						dtre += ((((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) + auxtwo) / 2) / zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
						dtre += " ";
						var dora = sub;
						explica.setAttributeNS(null, "d", d + dora + dtre + dqua);
					}
					else if(dot == 1){
						dtre = ((e.clientX - (innerWidth - ((innerWidth / 100) * 85))) / zoom) + (scrollX * (zoom*zoom/((zoom*zoom)*zoom)));
						dtre += ",";
						dtre += ((e.clientY - (innerHeight - ((innerHeight / 100) * 80))) /  zoom) + (scrollY * (zoom*zoom/((zoom*zoom)*zoom)));
						dtre += " ";
						var dera = sub;
						explica.setAttributeNS(null, "d", d + dtre + dqua);
					}
			}
		}
	});
//

// Conta gota
	$(".contagota").click(function(){
		if(conta == 0){
			conta++;
			ferramenta = "conta";
		}
		else{
			conta--;
			ferramenta = "modificar";
		}
	});
//

//Ctrl+Z desfazer
	$(document).keydown(function(e){
		if(e.ctrlKey && e.which == 90){
			if(ferramenta == "polygon"){
				if(controle != 0 && aux != 0){
					aux--;
					fazer++;
					points = cord[aux - 1];
					pointscon = "";
					explica.setAttributeNS(null, "points", points + pointscon);
					if(aux == 0){
						controle = 0;
					}
				}
			}
			else if(ferramenta == "polyline"){
				if(controle != 0 && aux != 0){
					aux--;
					fazer++;
					points = cord[aux - 1];
					pointscon = "";
					explica.setAttributeNS(null, "points", points + pointscon);
					if(aux == 0){
						controle = 0;
					}
				}
			}
			else if(ferramenta == "path"){
				if(controle != 0 && aux != 0){
					if(sub == "L"){
						aux--;
						fazer++;
						d = cord[aux - 1];
						dum = "";
						dtre = "";
						dqua = "";
						explica.setAttributeNS(null, "d", " " + d + " " + dum);
						if(aux <= 1){
							controle = 0;
							quant = 0;
							dot = 0;
							sub = "L";
						}
					}
					else if(sub == "Q"){
						aux--;
						fazer++;
						d = cord[aux - 1];
						dum = "";
						dtre = "";
						dqua = "";
						explica.setAttributeNS(null, "d", " " + d + " " + dtre + dqua);
						sub = "L";
						if(aux <= 1){
							controle = 0;
							quant = 0;
							dot = 0;
							sub = "L";
						}
					}
				}
			}
		}
	});
//

//Ctrl+X refazer
	$(document).keydown(function(e){
		if(e.ctrlKey && e.which == 88){
			if(ferramenta == "polygon"){
				if(controle != 0 && aux != 0 && fazer != 0){
					aux++;
					fazer--;
					points = cord[aux - 1];
					pointscon = "";
					explica.setAttributeNS(null, "points", points + pointscon);
					if(aux == 0){
						controle = 0;
					}
				}
			}
			else if(ferramenta == "polyline"){
				if(controle != 0 && aux != 0 && fazer !=0){
					aux++;
					fazer--;
					points = cord[aux - 1];
					pointscon = "";
					explica.setAttributeNS(null, "points", points + pointscon);
					if(aux == 0){
						controle = 0;
					}
				}
			}
			else if(ferramenta == "path"){
				if(controle != 0 && aux != 0 && fazer != 0){
					if(sub == "L"){
						aux++;
						fazer--;
						d = cord[aux - 1];
						dum = "";
						dtre = "";
						dqua = "";
						explica.setAttributeNS(null, "d", " " + d + " " + dum);
						if(aux <= 1){
							controle = 0;
							quant = 0;
							dot = 0;
							sub = "L";
						}
					}
					else if(sub == "Q"){
						aux++;
						fazer--;
						d = cord[aux - 1];
						dum = "";
						dtre = "";
						dqua = "";
						explica.setAttributeNS(null, "d", " " + d + " " + dtre + dqua);
						sub = "L";
						if(aux <= 1){
							controle = 0;
							quant = 0;
							dot = 0;
							sub = "L";
						}
					}
				}
			}
		}
	});
//

//Criar grupos com id
	$(".criagru").click(function(){
		if($(".grup").val() != id){
			var grupo = document.createElementNS(link, "g");
			intro.appendChild(grupo);
			id = $(".grup").val();
			grupo.setAttribute("id", id);
		}
	});
//

//Escrevendo dinâmicamente no texto
	$(".textoaqui").keyup(function(){
		if(ferramenta == "text"){
			if(controle == 1){
				texto = $(".textoaqui").val();
				$("#text"+ iden +"").html(texto);
			}
		}
	});

	function alteratext(valorid){
		if(controle == 0){
			texto = $(".textoaqui").val();
			$("#"+valorid+"").html(texto);
		}
		return;
	}
//

//Destacando cliques
	function clique(isso){
		setTimeout(function(){ isso.style.opacity = "1"; }, 200);
	}
//

//Armazenar localmente por tempo
setInterval(function(){
	if($("#dese").html()){
		localStorage.setItem("svg", $("#dese").html());
	}
},500);
//

//Recuperar o arquivo
	$(".abrir").click(function(){
		if(!$("#dese").html()){
			$("#dese").html(localStorage.getItem("svg"));
			var trans = " ";
			var escal = " ";
			var rota = " ";
			var inc = " ";
			$("line, rect, circle, ellipse, polyline, polygon, path, text, g, clippath").click(function(){
				this.style.opacity = "0.2";
				var vair = this;
				clique(vair);
				if(ferramenta == "remover"){
					$(this).remove();
				}
				else if(ferramenta == "modificar" && conta == 0){
					if(!$(this).attr("fill")){
						if($(".check:checked").length == 1){
							var stroke = "transparent";
						}
						else{
							var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
						}
						var linewidth = $(".linewidthval").val();
						this.setAttributeNS(null, "stroke", stroke);
						this.setAttributeNS(null, "stroke-width", linewidth);
						if($(".traceval").val() > 0){
							var trace = $(".traceval").val();
							this.setAttributeNS(null, "stroke-dasharray", trace);
						}
						if($(".lineopacval").val() <= 100){
							var lineopac = $(".lineopacval").val() / 100;
							this.setAttributeNS(null, "stroke-opacity", lineopac);
						}
						if($(".lineendval").val() != "nenhum"){
							var lineend = $(".lineendval").val();
							this.setAttributeNS(null, "stroke-linecap", lineend);
						}
					}
					else{
						if(!$(this).attr("font-size")){
							if($(".check:checked").length == 1){
								var stroke = "transparent";
							}
							else{
								var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
							}
							if($(".checkpreen:checked").length == 1){
								var preen = "transparent";
							}
							else{
								var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
							}
							var linewidth = $(".linewidthval").val();
							this.setAttributeNS(null, "stroke", stroke);
							this.setAttributeNS(null, "fill", preen);
							this.setAttributeNS(null, "stroke-width", linewidth);
							if($(".traceval").val() > 0){
								var trace = $(".traceval").val();
								this.setAttributeNS(null, "stroke-dasharray", trace);
							}
							if($(".lineopacval").val() <= 100){
								var lineopac = $(".lineopacval").val() / 100;
								this.setAttributeNS(null, "stroke-opacity", lineopac);
							}
							if($(".preenopacval").val() <= 100){
								var fillopac = $(".preenopacval").val() / 100;
								this.setAttributeNS(null, "fill-opacity", fillopac);
							}
							if($(".lineendval").val() != "nenhum"){
								var lineend = $(".lineendval").val();
								this.setAttributeNS(null, "stroke-linecap", lineend);
							}
							if($(".linecornerval").val() != "nenhum"){
								var linecorner = $(".linecornerval").val();
								this.setAttributeNS(null, "stroke-linejoin", linecorner);
							}
						}
						else{
							if($(".check:checked").length == 1){
								var stroke = "transparent";
							}
							else{
								var stroke = "rgb(" + $("#red").val() + "," + $("#green").val()+ "," + $("#blue").val() + ")";
							}
							if($(".checkpreen:checked").length == 1){
								var preen = "transparent";
							}
							else{
								var preen = "rgb(" + $("#redpreen").val() + "," + $("#greenpreen").val()+ "," + $("#bluepreen").val() + ")";
							}
							var linewidth = $(".linewidthval").val();
							this.setAttributeNS(null, "stroke", stroke);
							this.setAttributeNS(null, "fill", preen);
							this.setAttributeNS(null, "stroke-width", linewidth);
							var size = $(".fontsize").val();
							var family = $(".fontfamily").val();
							var space = $(".spacesize").val();
							this.setAttributeNS(null, "font-size", size);
							this.setAttributeNS(null, "font-family", family);
							this.setAttributeNS(null, "letter-spacing", space);
							if($(".traceval").val() > 0){
								var trace = $(".traceval").val();
								this.setAttributeNS(null, "stroke-dasharray", trace);
							}
							if($(".lineopacval").val() <= 100){
								var lineopac = $(".lineopacval").val() / 100;
								this.setAttributeNS(null, "stroke-opacity", lineopac);
							}
							if($(".preenopacval").val() <= 100){
								var fillopac = $(".preenopacval").val() / 100;
								this.setAttributeNS(null, "fill-opacity", fillopac);
							}
							if($(".lineendval").val() != "nenhum"){
								var lineend = $(".lineendval").val();
								this.setAttributeNS(null, "stroke-linecap", lineend);
							}
							if($(".linecornerval").val() != "nenhum"){
								var linecorner = $(".linecornerval").val();
								this.setAttributeNS(null, "stroke-linejoin", linecorner);
							}
						}
					}
				}
				else if(ferramenta == "move"){
					var movex = $(".movex").val() || 0;
					var movey = $(".movey").val() || 0;
					trans = "translate(";
					trans += movex;
					trans += ",";
					trans += movey;
					trans += ")";
					trans += " ";
					this.setAttributeNS(null, "transform", trans + escal + rota + inc);
				}
				else if(ferramenta == "redmi"){
					var escalax = $(".escalax").val() || 1;
					var escalay = $(".escalay").val() || 1;
					escal = "scale(";
					escal += escalax;
					escal += ",";
					escal += escalay;
					escal += ")";
					escal += " ";
					this.setAttributeNS(null, "transform", trans + escal + rota + inc);
				}
				else if(ferramenta == "skew"){
						var incx = $(".incx").val() || 0;
						var incy = $(".incy").val() || 0;
						inc = "skewX(";
						inc += incx;
						inc += ")";
						inc += " ";
						inc += "skewY(";
						inc += incy;
						inc += ")";
						inc += " ";
						this.setAttributeNS(null, "transform", trans + escal + rota + inc);
					 }
				else if(ferramenta == "clippath"){
					if(path == 0 && $(this).data("cont") != 1){
						this.setAttributeNS(null, "clip-path", "url(#clip" + pathid + ")");
						$(this).data("cont", 1);
					}
					else if(path == 1){
						var clip = document.createElementNS(link, "clipPath");
						clip.setAttribute("id", "clip" + pathid);
						clip.setAttribute("class", "linecont");
						intro.appendChild(clip);
						document.getElementById("clip" + pathid + "").appendChild(this);
						path = 0;
						pathid++;
						$(".instru").html("Clique sobre os elementos que serão o preenchimento, para finalizar a seleção tecle enter.");
						}
				}
				else if(ferramenta == "group"){
					document.getElementById(""+ id +"").appendChild(this);
				}
				else if(ferramenta == "organizar"){
					if($(".enviacima:checked").length == 1){
						$(this).appendTo(intro);
					}
					else if($(".enviabaixo:checked").length == 1){
						$(this).prependTo(intro);
					}
				}
				else if(ferramenta == "conta"){
					if(!$(this).attr("fill")){
						var auxcor = 0;
						var capstroke = this.getAttributeNS(null, "stroke");
						var capfill = this.getAttributeNS(null, "fill");
						if(capstroke != "transparent"){
							$(".previa").css({
								background: capstroke
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var cores = capstroke.split(",");
							var redstroke = cores[0].replace(regexred, "");
							var greenstroke = cores[1];
							var bluestroke = cores[2].replace(regexblue, "");
							$("#red").val(redstroke);
							$("#green").val(greenstroke);
							$("#blue").val(bluestroke);
							auxcor++;
							conta--;
							ferramenta = "modificar";
						}
					}
					else{
						var auxcor = 0;
						var capstroke = this.getAttributeNS(null, "stroke");
						var capfill = this.getAttributeNS(null, "fill");
						if(capstroke != "transparent"){
							$(".previa").css({
								background: capstroke
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var cores = capstroke.split(",");
							var redstroke = cores[0].replace(regexred, "");
							var greenstroke = cores[1];
							var bluestroke = cores[2].replace(regexblue, "");
							$("#red").val(redstroke);
							$("#green").val(greenstroke);
							$("#blue").val(bluestroke);
							auxcor++;
						}
						if(capfill != "transparent"){
							$(".previapreen").css({
								background: capfill
							});
							var regexred = /rgb\(/;
							var regexblue = /\)/;
							var coresfill = capfill.split(",");
							var redfill = coresfill[0].replace(regexred, "");
							var greenfill = coresfill[1];
							var bluefill = coresfill[2].replace(regexblue, "");
							$("#redpreen").val(redfill);
							$("#greenpreen").val(greenfill);
							$("#bluepreen").val(bluefill);
							auxcor++;
						}
						if(auxcor > 0){
							conta--;
							ferramenta = "modificar";
						}
					}
				}
			}).contextmenu(function(){
				if(ferramenta == "text"){
					var mudatext = this.getAttribute("id");
					alteratext(mudatext);
					$(".textoaqui").focus();
				}
			}).mouseover(function(){
				if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
					$(this).css({
						opacity: "0.6"
					});
				}
				else{
					over = this.getAttributeNS(null, "fill");
					$(this).css({
						opacity: "0.6"
					});
				}
			}).mouseout(function(){
				if(this.getAttributeNS(null, "fill") != "rgb(255,255,255)" && this.getAttributeNS(null, "fill") != "transparent"){
					$(this).css({
						opacity: "1"
					});
				}
				else{
					$(this).css({
						opacity: "1"
					});
				}
			});
		}
	});
//

//Zoom tela
	$(".zbt").click(function(){
		var zoomval = +$(".zp").val() / 100;
		zoom = zoomval;
		$("#dese").css({
			transform: "scale(" + zoomval + ")",
			transformOrigin: "0% 0%"
		});
	});
//

//scroll do zoom
	$(".caixa").scroll(function(){
		scrollY = $(".caixa").scrollTop();
		scrollX = $(".caixa").scrollLeft();
	});
//

//Checagem organizar
	$(".enviacima").click(function(){
		$(this).attr("checked", "checked");
		$(".enviabaixo").removeAttr("checked");
	});
	$(".enviabaixo").click(function(){
		$(this).attr("checked", "checked");
		$(".enviacima").removeAttr("checked");
	});
//

//line-guides
	$(".caixa").mousemove(function(e){
		if((ferramenta == "line" || ferramenta == "rect" || ferramenta == "circle" || ferramenta == "ellipse" || ferramenta == "polyline" || ferramenta == "polygon" || ferramenta == "path" || ferramenta == "text") && guia == 1){
			$(".horzum").css({
				top: e.clientY,
				width: e.clientX - 10,
				opacity: 1
			});
			$(".horzdo").css({
				top: e.clientY,
				left: e.clientX + 10,
				opacity: 1
			});
			$(".vertum").css({
				left: e.clientX,
				height: e.clientY - 10,
				opacity: 1
			});
			$(".vertdo").css({
				left: e.clientX,
				top: e.clientY + 10,
				opacity: 1
			});
		}
		else{
			$(".horzum").css({
				opacity: 0
			});
			$(".horzdo").css({
				opacity: 0
			});
			$(".vertum").css({
				opacity: 0
			});
			$(".vertdo").css({
				opacity: 0
			});
		}
	});
//

//ativar e desativar guias
	$(".guiabt").click(function(){
		if($(".guiabt:checked").length == 1){
			guia = 1;
		}
		else{
			guia = 0;
			$(".horzum").css({
				opacity: 0
			});
			$(".horzdo").css({
				opacity: 0
			});
			$(".vertum").css({
				opacity: 0
			});
			$(".vertdo").css({
				opacity: 0
			});
		}
	});
//
});
