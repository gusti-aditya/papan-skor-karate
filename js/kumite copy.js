//variables de puntos
var point_left = 0; var point_right = 0; var h_t = 0; var hanteiL = 0; var hanteiR = 0; puntos_derecha = false; puntos_izquierda = senshuRight = senshuLeft = false;
valor_ipponl = 0; valor_ipponr = 0; valor_wazal = 0; valor_wazar = 0; valor_yukol = 0; valor_yukor = 0; valor_cat1_w_l = 0; valor_cat1_w_r = 0;
valor_cat1_k_l = 0; valor_cat1_k_r = 0; valor_cat1_hc_l = 0; valor_cat1_hc_r = 0; valor_cat1_h_l = 0; valor_cat1_h_r = 0;
valor_cat2_w_l = 0; valor_cat2_w_r = 0; valor_cat2_k_l = 0; valor_cat2_k_r = 0; valor_cat2_hc_l = 0; valor_cat2_hc_r = 0;
valor_cat2_h_l = 0; valor_cat2_h_r = 0; valor_tpv = "pts";
//variables de pelea
acabar_rapido = 0; boy = 1; k_l = false; k_r = false; s_l = false; s_r = false; h_o_r = false; h_o_l = false; h_t_l = false; h_t_r = false;
//variables de cronometro
contador_c = 0; contador_s = 30; contador_m = 1; var cronometro; emp = 0;
var running = 0; pausing = 0; minutos = false; segundos = false; centesimas = false;
s = document.getElementById("segundos"); m = document.getElementById("minutos"); c = document.getElementById("centesimas");
//variables de colores
var color_w = "rgb(140,165,167)"; var color_k = color_w; var color_hc = color_w; var color_h = color_w; var color = '';
//variables de efectos sonoros y animaciones
var soundfile = "buzzer.wav"; vblinking = 1;

function reiniciar() {
	//variables de puntos
	senshuRight = false; senshuLeft = false; point_left0 = 0; point_right0 = 0;
	point_left = 0; point_right = 0; h_t = 0; hanteiL = 0; hanteiR = 0; puntos_derecha = false; puntos_izquierda = false;
	valor_ipponl = 0; valor_ipponr = 0; valor_wazal = 0; valor_wazar = 0; valor_yukol = 0; valor_yukor = 0; valor_cat1_w_l = 0; valor_cat1_w_r = 0;
	valor_cat1_k_l = 0; valor_cat1_k_r = 0; valor_cat1_hc_l = 0; valor_cat1_hc_r = 0; valor_cat1_h_l = 0; valor_cat1_h_r = 0;
	valor_cat2_w_l = 0; valor_cat2_w_r = 0; valor_cat2_k_l = 0; valor_cat2_k_r = 0; valor_cat2_hc_l = 0; valor_cat2_hc_r = 0;
	valor_cat2_h_l = 0; valor_cat2_h_r = 0; valor_tpv = "pts"; diferencia = 0; puntos_izquierda = 0; puntos_derecha = 0;
	//variables de pelea
	acabar_rapido = 0; boy = 1;//Si es 1 se acaba al llegar a 8, Otherwise por diferencia de 8 o puntos totales al terminar el tiempo
	//variables de cronometro
	contador_c = 0; contador_s = 30; contador_m = 1; var cronometro = 0; emp = 0;
	running = 0; pausing = 0; minutos = false; segundos = false; centesimas = false;
	s = document.getElementById("segundos"); m = document.getElementById("minutos"); c = document.getElementById("centesimas");
	//variables de colores
	var color_w = "rgb(140,165,167)"; var color_k = color_w; var color_hc = color_w; var color_h = color_w; var color = '';
	//variables de efectos sonoros y animaciones
	var soundfile = "buzzer.wav"; vblinking = 1;

	$('#points_left').text(point_left); $('#points_right').text(point_right);
	$('#minutos').text(contador_m + ":"); $('#segundos').text(contador_s); $('#centesimas').text(contador_c + "0");
	$('#hajime').text('Hajime');//$('#hajime').attr('value', 'Hajime');
	$('#hajime').css({ 'background-color': '#29e73b' });
	$('#jajime').css({ 'background-color': '#29e73b' });

	//texts to default values
	$('.resultado_winner').hide();//ocultar resultados
	$('.resultado_winner').text('');//Winner values
	$('#han-tei').hide();
	$('#ganar').hide();
	$('#ask_final').hide();
	$('#circle_senshu').hide();//$('#han-tei').show("slow");
	$('.change_time').hide(); $('#update_values').hide();
	$('.hide_layer').show();

}
function update_schedule() { document.schedule.submit(); }
function dar_puntos(t_p) {
	switch (t_p) {
		case "i_l":
			point_left = point_left + 3; valor_ipponl++;
			diferencia = point_left - point_right; if (diferencia < 0) { diferencia = diferencia * -1; }
			if (boy) {
				if (point_left > 7) {
					confirmar = confirm("There is a winner, are you sure?");
					if (confirmar) { running = 0; check_winner(); }//play_single_sound(); }
					else { point_left = point_left - 3; valor_ipponl--; diferencia = 0; }
				}
			}
			else {
				if (diferencia > 7) {
					confirmar = confirm("There is a winner, are you sure?");
					if (confirmar) { running = 0; check_winner(); }//play_single_sound(); }
					else { point_left = point_left - 3; valor_ipponl--; diferencia = 0; }
				}
			}
			$('#points_left').text(point_left);
			break;
		case "i_r":
			point_right = point_right + 3; valor_ipponr++; diferencia = point_left - point_right;
			if (diferencia < 0) { diferencia = diferencia * -1; }
			if (boy) {
				if (point_right > 7) {
					confirmar = confirm("There is a winner, are you sure?");
					if (confirmar) { running = 0; check_winner();}// play_single_sound(); }
					else { point_right = point_right - 3; valor_ipponr--; diferencia = 0; }
				}
			}
			else {
				if (diferencia > 7) {
					confirmar = confirm("There is a winner, are you sure?");
					if (confirmar) { running = 0; check_winner(); }//play_single_sound(); }
					else { point_right = point_right - 3; valor_ipponr--; diferencia = 0; }
				}
			}
			$('#points_right').text(point_right);
			break;
		case "w_l":
			point_left = point_left + 2; valor_wazal++;
			diferencia = point_left - point_right; if (diferencia < 0) { diferencia = diferencia * -1; }

			if (boy) {
				if (point_left > 7) {
					confirmar = confirm("There is a winner, are you sure?");
					if (confirmar) { running = 0; check_winner();}// play_single_sound(); }
					else { point_left = point_left - 2; valor_wazal--; diferencia = 0; }
				}
			}
			else {
				if (diferencia > 7) {
					confirmar = confirm("There is a winner, are you sure?");
					if (confirmar) { running = 0; check_winner();}// play_single_sound(); }
					else { point_left = point_left - 2; valor_wazal--; diferencia = 0; }
				}
			}
			$('#points_left').text(point_left);
			break;
		case "w_r":
			point_right = point_right + 2; valor_wazar++;
			diferencia = point_left - point_right; if (diferencia < 0) { diferencia = diferencia * -1; }

			if (boy) {
				if (point_right > 7) {
					confirmar = confirm("There is a winner, are you sure?");
					if (confirmar) { running = 0; check_winner(); play_single_sound(); }
					else { point_right = point_right - 2; valor_wazar--; diferencia = 0; }
				}
			}
			else {
				if (diferencia > 7) {
					confirmar = confirm("There is a winner, are you sure?");
					if (confirmar) { running = 0; check_winner();}// play_single_sound(); }
					else { point_right = point_right - 2; valor_wazar--; diferencia = 0; }
				}
			}
			$('#points_right').text(point_right);
			break;
		default:
		//code to be executed if n is different from all labels;
	}

}
function left_winner() {
	$('#w_l_p').fadeIn(); $('#w_l_p').css({ 'border': '0.6vw solid #CCCC00' });//Show winner
	$('#w_r_p').css({ 'border': '0' }); $('#w_r_p').fadeIn();//Show looser
	$('#w_r_p').text('X'); running = 1; $('#update_values').show('slow');

	idL = $('#left_id').text(); idR = $('#right_id').text();
	$('#valor_actual').val(idL); $('#valor_p1').val(point_left);
	$('#valor_anterior').val(idR); $('#valor_p2').val(point_right);

	$('#valor_ippon1').val(valor_ipponl); $('#valor_ippon2').val(valor_ipponr);
	$('#valor_waza1').val(valor_wazal); $('#valor_waza2').val(valor_wazar);
	$('#valor_yuko1').val(valor_yukol); $('#valor_yuko2').val(valor_yukor);

	$('#valor_cat1_w_1').val(valor_cat1_w_l); $('#valor_cat1_w_2').val(valor_cat1_w_r);
	$('#valor_cat1_k_1').val(valor_cat1_k_l); $('#valor_cat1_k_2').val(valor_cat1_k_r);
	$('#valor_cat1_hc_1').val(valor_cat1_hc_l); $('#valor_cat1_hc_2').val(valor_cat1_hc_r);
	$('#valor_cat1_h_1').val(valor_cat1_h_l); $('#valor_cat1_h_2').val(valor_cat1_h_r);

	$('#valor_cat2_w_1').val(valor_cat2_w_l); $('#valor_cat2_w_2').val(valor_cat2_w_r);
	$('#valor_cat2_k_1').val(valor_cat2_k_l); $('#valor_cat2_k_2').val(valor_cat2_k_r);
	$('#valor_cat2_hc_1').val(valor_cat2_hc_l); $('#valor_cat2_hc_2').val(valor_cat2_hc_r);
	$('#valor_cat2_h_1').val(valor_cat2_h_l); $('#valor_cat2_h_2').val(valor_cat2_h_r);

	$('#valor_flag_1').val(hanteiL); $('#valor_flag_2').val(hanteiR);

	$('#valor_tpv').val(valor_tpv);
	clearInterval(cronometro); $('#hajime').attr('disabled', 'disabled'); running = 0;
	mostrarganador = setInterval(function () { $('#w_r_p').hide(); $('#w_l_p').hide(); clearInterval(mostrarganador); }, 6000);
}
function right_winner() {
	$('#w_r_p').fadeIn(); $('#w_r_p').css({ 'border': '0.6vw solid #CCCC00' });//Show winner
	$('#w_l_p').css({ 'border': '0' }); $('#w_l_p').fadeIn();//Show looser
	$('#w_l_p').text('X'); running = 1; $('#update_values').show('slow');//play_single_sound();

	idL = $('#left_id').text(); idR = $('#right_id').text();
	$('#valor_actual').val(idR); $('#valor_p1').val(point_right);
	$('#valor_anterior').val(idL); $('#valor_p2').val(point_left);

	$('#valor_ippon1').val(valor_ipponr); $('#valor_ippon2').val(valor_ipponl);
	$('#valor_waza1').val(valor_wazar); $('#valor_waza2').val(valor_wazal);
	$('#valor_yuko1').val(valor_yukor); $('#valor_yuko2').val(valor_yukol);

	$('#valor_cat1_w_1').val(valor_cat1_w_r); $('#valor_cat1_w_2').val(valor_cat1_w_l);
	$('#valor_cat1_k_1').val(valor_cat1_k_r); $('#valor_cat1_k_2').val(valor_cat1_k_l);
	$('#valor_cat1_hc_1').val(valor_cat1_hc_r); $('#valor_cat1_hc_2').val(valor_cat1_hc_l);
	$('#valor_cat1_h_1').val(valor_cat1_h_r); $('#valor_cat1_h_2').val(valor_cat1_h_l);

	$('#valor_cat2_w_1').val(valor_cat2_w_r); $('#valor_cat2_w_2').val(valor_cat2_w_l);
	$('#valor_cat2_k_1').val(valor_cat2_k_r); $('#valor_cat2_k_2').val(valor_cat2_k_l);
	$('#valor_cat2_hc_1').val(valor_cat2_hc_r); $('#valor_cat2_hc_2').val(valor_cat2_hc_l);
	$('#valor_cat2_h_1').val(valor_cat2_h_r); $('#valor_cat2_h_2').val(valor_cat2_h_l);

	$('#valor_flag_1').val(hanteiR); $('#valor_flag_2').val(hanteiL);

	$('#valor_tpv').val(valor_tpv);
	clearInterval(cronometro); $('#hajime').attr('disabled', 'disabled'); running = 0;
	mostrarganador = setInterval(function () { $('#w_r_p').hide(); $('#w_l_p').hide(); clearInterval(mostrarganador); }, 6000);
}
function draw() {
	//$('#w_r_p').fadeIn();$('#w_r_p').css({'background-image': 'url(wp-content/themes/Karate/images/triangle_draw.png)'});
	//$('#w_l_p').fadeIn();$('#w_r_p').css({'background-image': 'url(wp-content/themes/Karate/images/triangle_draw.png)'});
	$('#han-tei').show("slow");
	$('#han-tei_title').text('Hantei Decision:');
	$('#option_winner').text('Select the Winner');
	$('#left-winner_buttom').text('Left');
	$('#right-winner_buttom').text('Right');
}
function check_winner() {
	if (point_right == point_left) {
		if (senshuRight) { right_winner(); }
		if (senshuLeft) { left_winner(); }
		if (senshuRight == senshuLeft) { draw(); }
	}

	if (point_right > point_left) { right_winner(); }
	if (point_right < point_left) { left_winner(); }
}
function stop_all() {
	$('#ask_final').show("slow");
}
//Funciones del cronometro

function start_crono() {
	if (running == 0) { running = 1; emp = new Date(); cronometro = setInterval(start_time, 5); }
	if (pausing == 1) { continue_crono(); }
}
function start_time() {
	actual = new Date(); //fecha en el instante
	cro = actual - emp; //tiempo transcurrido en milisegundos
	cr = new Date(); //fecha donde guardamos el tiempo transcurrido
	cr.setTime(cro); cs = cr.getMilliseconds(); //milisegundos del cronómetro
	cs = cs / 10; //paso a centésimas de segundo.
	cs = Math.round(cs); contador_c = cs; sg = cr.getSeconds(); //segundos del cronómetro
	mg = cr.getMinutes(); running = 1; pausing = 0;
	seconds = contador_s - sg;
	minutes = contador_m - mg;
	if (seconds < 0) { emp = new Date(); contador_s = 59; contador_m--; m.innerHTML = contador_m + ":"; }
	if (seconds < 10) { s.innerHTML = "0" + seconds; } else { if (seconds == 60) { s.innerHTML = "0" + 0; } else { s.innerHTML = seconds; } m.innerHTML = minutes + ":"; }
	if (contador_m == 0 & seconds == 0) {
		pause_crono(); contador_c = 0; c.innerHTML = "0" + contador_c; play_single_sound();
		blinking(); stop_all();
	}
	if (contador_m == 0 & seconds == 15) { play_single_sound(); }
	if (minutes < 0) {
		minutes = 0; m.innerHTML = minutes; seconds == 0; s.innerHTML = "0" + 0;
		pause_crono(); contador_m = 0; seconds = 0; contador_c = 0; check_winner();
	}
	if (contador_c < 10) { c.innerHTML = "0" + contador_c; }
	c.innerHTML = contador_c; return true;
}
function pause_crono() { pausing = 1; point_left0 = point_left; point_right0 = point_right; clearInterval(cronometro); }
function continue_crono() {
	//sólo si el crono está parado
	//$("#mydiv").css({top: 200, left: 200, position:'absolute'});
	if (senshuLeft == false && senshuRight == false) {
		//var percent = e.pageX / $(window).width() * 100; .css('left',percent + '%');

		var side = $("#matchSide").attr("data-side");
		if (side == "sideA") 
		{
		if (point_left0 != point_left && point_right0 == point_right) { senshuLeft = true; $('#circle_senshu').css({ top: '6vw', left: '17vw' }); $('#circle_senshu').show(); }
		if (point_right0 != point_right && point_left0 == point_left) { senshuRight = true; $('#circle_senshu').css({ top: '6vw', left: '67vw' }); $('#circle_senshu').show(); }
		}
		else 
		{	
		if (point_left0 != point_left && point_right0 == point_right) { senshuLeft = true; $('#circle_senshu').css({ top: '6vw', left: '67vw' }); $('#circle_senshu').show(); }
		if (point_right0 != point_right && point_left0 == point_left) { senshuRight = true; $('#circle_senshu').css({ top: '6vw', left: '17vw' }); $('#circle_senshu').show(); }
		}
	}
	emp2 = new Date();//fecha actual
	emp2 = emp2.getTime(); //pasar a tiempo Unix
	emp3 = emp2 - cro; //restar tiempo anterior
	emp = new Date(); //nueva fecha inicial para pasar al temporizador 
	emp.setTime(emp3); //datos para nueva fecha inicial.
	cronometro = setInterval(start_time, 10); //activar temporizador
	pausing = 0;
}

function play_single_sound() { document.getElementById('audiowarning_short').play(); }
function play_sound_fifteen() { document.getElementById('audiowarning_alert').play(); }

function grey_t() {
	$('#t1').css({ 'background-color': '#8c91a7' }); $('#t2').css({ 'background-color': '#8c91a7' });
	$('#t3').css({ 'background-color': '#8c91a7' }); $('#t4').css({ 'background-color': '#8c91a7' });
}
function grey_w() { $('.c_p_l').css({ 'background-color': '#8c91a7', 'color': "#000066" }); $('.c_p_r').css({ 'background-color': '#8c91a7', 'color': "#000066" }); }

function hexc(colorval) {
	var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	delete (parts[0]);
	for (var i = 1; i <= 3; ++i) {
		parts[i] = parseInt(parts[i]).toString(16);
		if (parts[i].length == 1) parts[i] = '0' + parts[i];
	}
	color = '#' + parts.join('');
}
function cambiarcolor() {
	texto1 = $('.color-name-left').text();
	pointleft = $('#points_left').text(); pointright = $('#points_right').text();
	leftname = $('#name_athlete_left').text(); rightname = $('#name_athlete_right').text();
	$('#name_athlete_left').text(rightname); $('#name_athlete_right').text(leftname);
	$('#points_left').text(pointright); $('#points_right').text(pointleft);
	right_id = $('#right_id').text(); left_id = $('#left_id').text();
	$('#right_id').text(left_id); $('#left_id').text(right_id);

	if (texto1 == "Ao") {
		$('.color-name-left').text('Aka'); $('.color-name-right').text('Ao');
		$('#left').css({ 'background-color': '#f44c4b' }); $('#right').css({ 'background-color': '#4a4bf3' });
		$('#title_left').text('Aka'); $('#title_right').text('Ao');
		$('#left_ring').css({ 'background-color': '#f44c4b' }); $('#right_ring').css({ 'background-color': '#4a4bf3' });
	}
	if (texto1 == "Aka") {
		$('.color-name-left').text('Ao'); $('.color-name-right').text('Aka');
		$('#left').css({ 'background-color': '#4a4bf3' }); $('#right').css({ 'background-color': '#f44c4b' });
		$('#left_ring').css({ 'background-color': '#4a4bf3' }); $('#right_ring').css({ 'background-color': '#f44c4b' });
		$('#title_left').text('Ao'); $('#title_right').text('Aka');
		$('#left_ring').css({ 'background-color': '#4a4bf3' }); $('#right_ring').css({ 'background-color': '#f44c4b' });
	}
}

function reset_hantei() {
	hanteiR = 0; hanteiL = 0;
	$('#c_l_b').text(hanteiL);
	$('#c_r_b').text(hanteiR);
	$('#bl31').css({ 'backgroundImage': 'url(../images/fw.png)' }); $('#bl32').css({ 'backgroundImage': 'url(../images/fw.png)' });
	$('#bl33').css({ 'backgroundImage': 'url(../images/fw.png)' });
	$('#br31').css({ 'backgroundImage': 'url(../images/fw.png)' }); $('#br32').css({ 'backgroundImage': 'url(../images/fw.png)' });
	$('#br33').css({ 'backgroundImage': 'url(../images/fw.png)' });
	$('#bl51').css({ 'backgroundImage': 'url(../images/fw.png)' }); $('#bl52').css({ 'backgroundImage': 'url(../images/fw.png)' }); $('#bl54').css({ 'backgroundImage': 'url(../images/fw.png)' });
	$('#bl53').css({ 'backgroundImage': 'url(../images/fw.png)' }); $('#bl55').css({ 'backgroundImage': 'url(../images/fw.png)' });
	$('#br51').css({ 'backgroundImage': 'url(../images/fw.png)' }); $('#br52').css({ 'backgroundImage': 'url(../images/fw.png)' }); $('#br53').css({ 'backgroundImage': 'url(../images/fw.png)' });
	$('#br54').css({ 'backgroundImage': 'url(../images/fw.png)' }); $('#br55').css({ 'backgroundImage': 'url(../images/fw.png)' });
	/*	
		$('#bl31').css({'color': 'white'});
		$('#bl32').css({'color': 'white'});
		$('#bl33').css({'color': 'white'});
		$('#br31').css({'color': 'white'});$('#br32').css({'color': 'white'});
		$('#br33').css({'color': 'white'});
		$('#bl51').css({'color': 'white'});$('#bl52').css({'color': 'white'});$('#bl54').css({'color': 'white'});
		$('#bl53').css({'color': 'white'});$('#bl55').css({'color': 'white'});
		$('#br51').css({'color': 'white'});$('#br52').css({'color': 'white'});$('#br53').css({'color': 'white'});
		$('#br54').css({'color': 'white'});$('#br55').css({'color': 'white'});*/


}
function hantei3L() {
	valorL = $('#c_l_b').text(); valorR = $('#c_r_b').text();
	if (valorL == 0) { hanteiR = 3; }
	if (valorL < 3) { hanteiL = hanteiL + 1; hanteiR--; }
	$('#c_l_b').text(hanteiL); $('#c_r_b').text(hanteiR);
}

function hantei3R() {
	valorL = $('#c_l_b').text(); valorR = $('#c_r_b').text();
	if (valorR == 0) { hanteiL = 3; }
	if (valorR < 3) { hanteiR = hanteiR + 1; hanteiL--; }
	$('#c_l_b').text(hanteiL); $('#c_r_b').text(hanteiR);
}
function hantei5L() {
	valorL = $('#c_l_b').text(); valorR = $('#c_r_b').text();
	if (valorL == 0) { hanteiR = 5; }
	if (valorL < 5) { hanteiL = hanteiL + 1; hanteiR--; }
	$('#c_l_b').text(hanteiL); $('#c_r_b').text(hanteiR);
}
function hantei5R() {
	valorL = $('#c_l_b').text(); valorR = $('#c_r_b').text();
	if (valorR == 0) { hanteiL = 5; }
	if (valorR < 5) { hanteiR = hanteiR + 1; hanteiL--; }
	$('#c_l_b').text(hanteiL); $('#c_r_b').text(hanteiR);
}
function blinking() {
	parpadeo = setInterval(function () {
		$("#left").toggleClass("white_class");
		$("#right").toggleClass("white_class"); vblinking++; if (vblinking > 12) { clearInterval(parpadeo) };
	}, 100);
}
function hajimeF() {
	h_t = $('#hajime').attr('value'); h_t = $('#hajime').html();
	if (h_t == "Hajime") {
		$('.hide_layer').hide();
		h_t = "Yame"; color_h_t = '#10b620'; start_crono();
	}
	else {
		h_t = "Hajime"; color_h_t = '#29e73b'; pause_crono(); 
		if (contador_m != 0 & seconds != 0) {
		play_single_sound();
		}
		$('.hide_layer').show();
	}
			/*$('#hajime').attr('value', h_t)*/; $('#hajime').html(h_t);
	$('#hajime').css({ 'background-color': color_h_t }); $('#jajime').css({ 'background-color': color_h_t });
	$('.change_time').hide('slow');
	$('#hajime').focus();

}

$(document).ready(function () {

	reiniciar();//termina valores iniciales
	// stop the fight
	$('#AddPoint').click(function () {
		$('#ask_final').hide("slow"); pausing = 1;
		contador_c = 0; c.innerHTML = "0" + contador_c;
		contador_s = 1; s.innerHTML = "0" + contador_s;
		contador_m = 0; m.innerHTML = contador_m + "0";
		//hajimeF();

		h_t = $('#hajime').attr('value');
		if (h_t == "Hajime") { h_t = "Yame"; color_h_t = '#10b620'; start_crono(); }
		else { h_t = "Hajime"; color_h_t = '#29e73b'; }
	})

	$('#EndFight').click(function () {
		$('#ask_final').hide("slow");
		check_winner();
	})
	//valores para el cambio de los tiempos de pelea
	$('#ten_seconds').hide();
	$('#ten_second_show').click(function () { $('#ten_seconds').show('slow'); $('#ten_second_show').hide('slow'); })
	$('#hide_stop_watch').click(function () { $('#ten_seconds').hide('slow'); $('#ten_second_show').show('slow'); })
	$('#t1').click(function () {
		if (running == 0) {
			confirmar = confirm("Change the timer?");
			if (confirmar) {
				boy = 1;
				$('#minutos').text(1 + ":"); $('#segundos').text(30); contador_s = 30; contador_m = 1;
				grey_t(); $(this).css({ 'background-color': '#b0710d' }); acabar_rapido = 1;
			}
		}
	})
	$('#t2').click(function () {
		if (running == 0) {
			confirmar = confirm("Change the timer?");
			if (confirmar) {
				//$('#han-tei_title').text('Winner Definition');
				$('#option_winner').text('Choose the winner after...');
				$('#left-winner_buttom').text('A Difference of 8 points');
				$('#right-winner_buttom').text('Time is Up');
				//$('#han-tei').show("slow");
				boy = 0;
				valor = $('#t2').text().slice(0, 1); $('#minutos').text(valor + ":"); $('#segundos').text('00');
				contador_s = 0; contador_m = 2; grey_t(); $(this).css({ 'background-color': '#b0710d' });
			}
		}
	})
	$('#t3').click(function () {
		if (running == 0) {
			confirmar = confirm("Change the timer?");
			if (confirmar) {
				boy = 0;
				valor = $('#t3').text().slice(0, 1); $('#minutos').text(valor + ":"); $('#segundos').text('00');
				console.log(valor);
				contador_s = 0; contador_m = 3; grey_t(); $(this).css({ 'background-color': '#b0710d' });
			}
		}
	})
	$('#t4').click(function () {
		if (running == 0) {
			confirmar = confirm("Change the timer?");
			if (confirmar) {
				boy = 0;
				valor = $('#t4').text().slice(0, 1); $('#minutos').text(valor + ":"); $('#segundos').text('00');
				contador_s = 0; contador_m = 4; grey_t(); $(this).css({ 'background-color': '#b0710d' });
			}
		}
	})

	$("#switchSide").click(function () {
		var side = $("#matchSide").attr("data-side");
		console.log(side);
		if (side == "sideA") {
			$("#name1").before($("#name2"));
			$("#side1").before($("#side2"));
			$("#matchSide").attr("data-side", "sideB");
		}
		else {
			$("#name2").before($("#name1"));
			$("#side2").before($("#side1"));
			$("#matchSide").attr("data-side", "sideA");
		}
		clearInterval(cronometro); running = 0; grey_t(); grey_w(); reiniciar();
	})

	//-------------------
	//Reset
	$('#reset').click(function () {
		clearInterval(cronometro); running = 0; grey_t(); grey_w(); reiniciar();
	})/*
	$('body').keyup(function (e) {
		if (e.keyCode == 32) { hajimeF(); }
		if (e.keyCode == 90) { if (pausing) { t_p = "i_l"; dar_puntos(t_p); } }
		if (e.keyCode == 88) { if (pausing) { t_p = "w_l"; dar_puntos(t_p); } }
		if (e.keyCode == 90) { if (pausing) { t_p = "i_l"; dar_puntos(t_p); } }
	});
*/
	//Hajime
	$('#hajime').click(function () { hajimeF(); })
	$('#hajime').keyup(function (e) { if (e.keyCode == 32) { hajimeF(); } })
	//Dar puntos left
	$('#ippon_left').click(function () { if (pausing) { t_p = "i_l"; dar_puntos(t_p); } })
	$('#ippon_right').click(function () { if (pausing) { ippon = "i_r"; dar_puntos(ippon); } })
	$('#waza_ari_left').click(function () { if (pausing) { t_p = "w_l"; dar_puntos(t_p); } })
	$('#yuko_left').click(function () {
		if (pausing) {
			point_left++; valor_yukol++;
			diferencia = point_left - point_right; if (diferencia < 0) { diferencia = diferencia * -1; }
			if (boy) {
				if (point_left > 7) {
					confirmar = confirm("The last point create a winner, are you sure of this?");
					if (confirmar) { running = 0; check_winner(); }
					else { point_left--; valor_yukol--; diferencia = 0; }
				}
			}
			else {
				if (diferencia > 7) {
					confirmar = confirm("There is a winner, are you sure?");
					if (confirmar) { running = 0; check_winner(); }
					else { point_left--; valor_yukol--; diferencia = 0; }
				}
			}
			$('#points_left').text(point_left);
		}
	})

	$('#point_minus_left').click(function () {
		if (pausing) {
			if (point_left > 0) { point_left--; }
			diferencia = point_left - point_right; if (diferencia < 0) { diferencia = diferencia * -1; }

			if (diferencia > 7) { running = 0; check_winner(); }

			$('#points_left').text(point_left);
		}
	})
	//Dar puntos right

	$('#waza_ari_right').click(function () { if (pausing) { t_p = "w_r"; dar_puntos(t_p); } })

	$('#yuko_right').click(function () {
		if (pausing) {
			point_right++; valor_yukor++;
			diferencia = point_left - point_right; if (diferencia < 0) { diferencia = diferencia * -1; }
			if (boy) {
				if (point_right > 7) {
					confirmar = confirm("There is a winner, are you sure?");
					if (confirmar) { running = 0; check_winner(); }
					else { point_right--; valor_yukor--; diferencia = 0; }
				}
			}
			else {
				if (diferencia > 7) {
					confirmar = confirm("There is a winner, are you sure?");
					if (confirmar) { running = 0; check_winner(); }
					else { point_right--; valor_yukor--; diferencia = 0; }
				}
			}
			$('#points_right').text(point_right);
		}
	})
	$('#point_plus_right').click(function () {
		if (pausing) {
			point_right++;
			diferencia = point_left - point_right; if (diferencia < 0) { diferencia = diferencia * -1; }
			if (diferencia > 7) { check_winner(); }

			if (boy) { if (point_right > 7) { right_winner(); } }
			$('#points_right').text(point_right);

		}
	})

	//Cambiar colores
	$('.color-name-left').click(function () { if ((pausing == 1) || (running == 0)) { cambiarcolor(); } })
	$('.color-name-right').click(function () { if ((pausing == 1) || (running == 0)) { cambiarcolor(); } })
	//------------------------------------------
	//Penalties left
	//level 1		
	$('#w_one_left').click(function () {
		if (pausing) {
			var x = $(this).css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			//var color_w_l_1=color.slice(1,7);//$(this).css('background-color');
			if (!valor_cat1_k_l & !valor_cat1_hc_l) {
				if (color_w_l_1 == '#8c91a7') {
					color_w_l_1 = "red";
					colortexto = "white"; valor_cat1_w_l = 1;
				}//play_single_sound();$('W-Shukoku').play();
				else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; valor_cat1_w_l = 0; }
				$(this).css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			}
		}
	})

	$('#k_one_left').click(function () {
		if (pausing) {
			var x = $(this).css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (!valor_cat1_hc_l) {
				if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_cat1_k_l = 1; }
				else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; valor_cat1_k_l = 0; }
				if (!valor_cat1_w_l) { $('#w_one_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto }); }
				$(this).css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			}
		}
	})
	$('#hc_one_left').click(function () {
		if (pausing) {
			var x = $(this).css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_cat1_hc_l = 1; }
			else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; valor_cat1_hc_l = 0; }
			$(this).css({ 'backgroundColor': color_w_l_1, 'color': colortexto });//||
			if (!valor_cat1_k_l) {
				$('#k_one_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
				if (!valor_cat1_w_l) { $('#w_one_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto }); }
			}
		}
	})


	//level 2
	$('#w_two_left').click(function () {
		if (pausing) {
			var x = $(this).css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			//var color_w_l_1=color.slice(1,7);//$(this).css('background-color');
			if (!valor_cat2_k_l & !valor_cat2_hc_l) {
				if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_cat2_w_l = 1; }
				else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; valor_cat2_w_l = 0; }
				$(this).css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			}
		}
	})

	$('#k_two_left').click(function () {
		if (pausing) {
			var x = $(this).css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (!valor_cat2_hc_l) {
				if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_cat2_k_l = 1; }
				else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; valor_cat2_k_l = 0; }
				if (!valor_cat2_w_l) { $('#w_two_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto }); }
				$(this).css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			}
		}
	})
	$('#hc_two_left').click(function () {
		if (pausing) {
			var x = $(this).css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_cat2_hc_l = 1; }
			else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; valor_cat2_hc_l = 0; }
			$(this).css({ 'backgroundColor': color_w_l_1, 'color': colortexto });

			if (!valor_cat2_k_l) {
				$('#k_two_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
				if (!valor_cat2_w_l) { $('#w_two_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto }); }
			}
		}
	})


	$('#Yes').click(function () {


		if (k_l) {
			var x = $("#kikken_left").css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_tpv = "kik"; }
			else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; }
			$("#kikken_left").css({ 'backgroundColor': color_w_l_1, 'color': colortexto }); right_winner();
			$('#ganar').hide('slow'); clearInterval(cronometro); $('#hajime').attr('disabled', 'disabled'); running = 0;
			//$('#points_left').text(points_left);$('#points_right').text(points_right);//points_left=0;points_right=8;
		}
		if (k_r) {
			var x = $("#kikken_right").css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_tpv = "kik"; }
			else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; }
			$("#kikken_right").css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#ganar').hide('slow'); clearInterval(cronometro); $('#hajime').attr('disabled', 'disabled'); running = 0;
			left_winner();
		}

		if (s_l) {
			var x = $('#shikkaku_left').css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_tpv = "shi"; }
			else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; }
			$('#shikkaku_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#ganar').hide('slow');
			right_winner();
		}

		if (s_r) {
			var x = $('#shikkaku_right').css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_tpv = "shi"; }
			else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; }
			$('#ganar').hide('slow');
			$('#shikkaku_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto }); left_winner();
		}

		if (h_o_r) {
			var x = $('#h_one_right').css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (color_w_l_1 == '#8c91a7') {
				color_w_l_1 = "red"; colortexto = "white"; valor_tpv = "has";
				valor_cat1_h_r = 1;
			}
			else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; }
			$('#h_one_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#w_one_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#k_one_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#hc_one_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#ganar').hide('slow');
			left_winner();
		}
		if (h_t_r) {
			var x = $('#h_two_right').css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_tpv = "has"; valor_cat1_h_r = 1; }
			else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; }
			$('#h_two_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#w_two_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#k_two_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#hc_two_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#ganar').hide('slow'); left_winner();
		}
		if (h_o_l) {
			var x = $('#h_one_left').css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_tpv = "has"; valor_cat1_h_l = 1; }
			else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; }
			$('#h_one_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#w_one_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#k_one_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#hc_one_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#ganar').hide('slow'); right_winner();
		}
		if (h_t_l) {
			var x = $('#h_two_left').css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_tpv = "has"; valor_cat1_h_l = 1; }
			else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; }
			$('#h_two_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#w_two_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#k_two_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#hc_two_left').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			$('#ganar').hide('slow'); right_winner();
		}

	})

	$('#No').click(function () {
		//$('#text_message').text("Are you stupid?");
		k_l = false; k_r = false; s_l = false; s_r = false; $('#ganar').hide('slow'); if (running) { hajimeF(); }
		h_o_r = false; h_o_l = false; h_t_l = false; h_t_r = false;
	})

	$('#kikken_left').click(function () {
		if (running & !pausing) { hajimeF(); };
		$('#text_message').text("This side lost. Are you sure?");
		k_l = true; k_r = false; s_l = false; s_r = false; $('#ganar').show('slow');
	})

	$('#kikken_right').click(function () {
		if (running & !pausing) { hajimeF(); };
		$('#text_message').text("This side lost. Are you sure?");
		k_l = false; k_r = true; s_l = false; s_r = false; $('#ganar').show('slow');
	})

	$('#shikkaku_left').click(function () {
		if (running & !pausing) { hajimeF() }; $('#text_message').text("This side lost. Are you sure?");
		k_l = false; k_r = false; s_l = true; s_r = false; $('#ganar').show('slow');
	})

	$('#shikkaku_right').click(function () {
		if (running & !pausing) { hajimeF() }; $('#text_message').text("This side lost. Are you sure?");
		k_l = false; k_r = false; s_l = false; s_r = true; $('#ganar').show('slow');
	})

	$('#h_two_right').click(function () {
				/*if(pausing) { }*/$('#text_message').text("This side lost. Are you sure?"); h_o_r = false; h_o_l = false; h_t_l = false; h_t_r = true; $('#ganar').show('slow');
	})
	$('#h_one_right').click(function () {
		if (pausing) { $('#text_message').text("This side lost. Are you sure?"); h_o_r = true; h_o_l = false; h_t_l = false; h_t_r = false; $('#ganar').show('slow'); }
	})
	$('#h_two_left').click(function () {
				/*if(pausing) {}*/$('#text_message').text("This side lost. Are you sure?"); h_o_r = false; h_o_l = false; h_t_l = true; h_t_r = false; $('#ganar').show('slow');
	})

	$('#h_one_left').click(function () {
		if (pausing) { $('#text_message').text("This side lost. Are you sure?"); h_o_r = false; h_o_l = true; h_t_l = false; h_t_r = false; $('#ganar').show('slow'); }
	})

	//Penalties right
	//level 1		
	$('#w_one_right').click(function () {
		if (pausing) {
			var x = $(this).css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			//var color_w_l_1=color.slice(1,7);//$(this).css('background-color');
			if (!valor_cat1_k_r & !valor_cat1_hc_r) {
				if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_cat1_w_r = 1; }
				else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; valor_cat1_w_r = 0; }
				$(this).css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			}
		}
	})

	$('#k_one_right').click(function () {
		if (pausing) {
			var x = $(this).css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (!valor_cat1_hc_r) {
				if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_cat1_k_r = 1; }
				else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; valor_cat1_k_r = 0; }
				if (!valor_cat1_w_r) { $('#w_one_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto }); }
				$(this).css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			}
		}
	})
	$('#hc_one_right').click(function () {
		if (pausing) {
			var x = $(this).css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_cat1_hc_r = 1; }
			else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; valor_cat1_hc_r = 0; }
			$(this).css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			if (!valor_cat1_k_r) {
				$('#k_one_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
				if (!valor_cat1_w_r) { $('#w_one_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto }); }
			}

		}
	})


	//level 2
	$('#w_two_right').click(function () {
		if (pausing) {
			var x = $(this).css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			//var color_w_l_1=color.slice(1,7);//$(this).css('background-color');
			if (!valor_cat2_k_r & !valor_cat2_hc_r) {
				if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_cat2_w_r = 1; }
				else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; valor_cat2_w_r = 0; }
				$(this).css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			}
		}
	})
	$('#k_two_right').click(function () {
		if (pausing) {
			var x = $(this).css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (!valor_cat2_hc_r) {
				if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_cat2_k_r = 1; }
				else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; valor_cat2_k_r = 0; }
				if (!valor_cat2_w_r) { $('#w_two_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto }); }
				$(this).css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
			}

		}
	})

	$('#hc_two_right').click(function () {
		if (pausing) {
			var x = $(this).css('backgroundColor'); hexc(x); var color_w_l_1 = color;
			if (color_w_l_1 == '#8c91a7') { color_w_l_1 = "red"; colortexto = "white"; valor_cat2_hc_r = 1; }
			else { color_w_l_1 = '#8c91a7'; colortexto = "#000066"; valor_cat2_hc_r = 0; }
			$(this).css({ 'backgroundColor': color_w_l_1, 'color': colortexto });

			if (!valor_cat2_k_r) {
				$('#k_two_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto });
				if (!valor_cat2_w_r) { $('#w_two_right').css({ 'backgroundColor': color_w_l_1, 'color': colortexto }); }
			}
		}
	})

	$('#left-winner_buttom').click(function () {
		texto = $(this).text();
		if (texto != "Left") { boy = 0; alert('You Selected A Difference of 8 Points!'); $('#han-tei').hide('slow'); }
		else {
			s = confirm("This side will win. Are you sure?");
			if (s) { $('#han-tei').hide('slow'); left_winner(); valor_tpv = "han"; }
		}

	})
	$('#right-winner_buttom').click(function () {
		texto = $(this).text(); if (texto != "Right") { boy = 1; alert('You Selected Time is Up!'); $('#han-tei').hide('slow'); }
		else {
			s = confirm("This side will win. Are you sure?");
			if (s) { $('#han-tei').hide('slow'); right_winner(); valor_tpv = "han"; }
		}
	})


	$('#minutos').click(function () {
		if (pausing) {
			$('#title_change').text('Change Time: Minutes');
			minutos = true; segundos = false; centesimas = false; $('.change_time').show('slow');
		}
	})
	$('#segundos').click(function () {
		if (pausing) {
			$('#title_change').text('Change Time: Seconds');
			segundos = true; minutos = false; centesimas = false; $('.change_time').show('slow');
		}
	})
	$('#centesimas').click(function () {
		if (pausing) {
			$('#title_change').text('Change Time: Centiseconds');
			centesimas = true; minutos = false; segundos = false; $('.change_time').show('slow');
		}
	})
	$('#points_left').click(function () {
		if (pausing) {
			$('#title_change').text('Change Points: Left');
			puntos_izquierda = true; $('.change_time').show('slow');
		}
	})
	$('#points_right').click(function () {
		if (pausing) {
			$('#title_change').text('Change Points: Right'); puntos_derecha = true; $('.change_time').show('slow');
		}
	})

	$('#suma_t_hide').click(function () {
		minutos = false; segundos = false; centesimas = false;
		puntos_derecha = false; puntos_izquierda = false;
		$('.change_time').hide('slow');
	})

	$('#suma_t').click(function () {
		if (minutos) { if (minutes < 10) { minutes = (contador_m + 1) - mg; contador_m++; $('#minutos').text(minutes + ":"); } }
		if (segundos) {
			seconds = (contador_s + 1) - sg; contador_s++;
			if (seconds < 10) { $('#segundos').text("0" + seconds); } else { $('#segundos').text(seconds); }
			if (seconds > 59) { cro = 0; contador_m++; minutescontador_s = 0; sg = 0; seconds = 0; $('#segundos').text("0" + seconds); }
		}

		if (centesimas) {
			contador_c++; if (contador_c == 100) { contador_c = 0; $('#centesimas').text("0" + contador_c); }
			if (contador_c < 10) { $('#centesimas').text("0" + contador_c); } else { $('#centesimas').text(contador_c); }

		}

		if (puntos_izquierda) {
			point_left++; diferencia = point_left - point_right; if (diferencia < 0) { diferencia = diferencia * -1; }
			if (diferencia > 7) {
				s = confirm('This side will win. Are you sure?');
				if (s) { running = 0; check_winner(); }
				else { point_left--; }
			}
			if (boy) {
				if (point_left > 7) {
					s = confirm("This side will win. Are you sure?");
					if (s) { ; $('#points_left').text(point_left); running = 0; left_winner(); }
					else { point_left--; }
				}
			}
			$('#points_left').text(point_left);

		}
		if (puntos_derecha) {
			point_right++;
			diferencia = point_left - point_right; if (diferencia < 0) { diferencia = diferencia * -1; }
			if (diferencia > 7) {
				s = confirm('This side will win. Are you sure?');
				if (s) { running = 0; check_winner(); }
				else { point_right--; }
			}
			if (boy) {
				if (point_right > 7) {
					s = confirm("This side will win. Are you sure?");
					if (s) { ; $('#points_right').text(point_right); running = 0; right_winner(); }
					else { point_right--; }
				}
			}
			$('#points_right').text(point_right);
		}
	})


	$('#resta_t').click(function () {
		if (minutos) {
			if (contador_m > 0) { minutes = (contador_m - 1) - mg; contador_m--; $('#minutos').text(minutes + ":"); }
			if (minutes < 0) { minutes = 0; contador_m++; m.innerHTML = minutes; }
		}


		if (segundos) {
			seconds = (contador_s - 1) - sg; contador_s--;
			if (seconds < 0) { seconds = 59; contador_s = 0; }
			$('#segundos').text(seconds); if (seconds < 10) { $('#segundos').text("0" + seconds); }

		}

		if (centesimas) {
			contador_c--; if (contador_c < 0) { contador_c = 99; }
			$('#centesimas').text(contador_c); if (contador_c < 10) { $('#centesimas').text("0" + contador_c); }
		}
		if ((puntos_izquierda) && (point_left > 0)) { point_left--; $('#points_left').text(point_left); }
		if ((puntos_derecha) && (point_right > 0)) { point_right--; $('#points_right').text(point_right); }
		//contador_c =0;contador_s =30;contador_m =1;
	})
	//Ganador hantei
	$('#han-tei_title').click(function () {
		if (hanteiL == hanteiR) { alert("Sorry, equal values. You have to change the score"); }
		else {
			s = confirm("Are you sure?");
			if (s) {
				valor_tpv = "han";
				$('#han-tei').hide();//$('#points_right').text(hanteiR);$('#points_left').text(hanteiL);
				if (hanteiL > hanteiR) { left_winner(); }
				else { right_winner(); }
				//play_single_sound(); 
				reset_hantei();
			}
		}

	})
	//banderas izquierda
	$('#c_r_b').click(function () { reset_hantei(); valor_tpv = "pts"; })
	$('#c_l_b').click(function () { reset_hantei(); valor_tpv = "pts"; })

	$('#bl31').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei3L();
		$('#c_l_b').text(hanteiL); $('#c_r_b').text(hanteiR);
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' });
		$('#br31').css({ 'backgroundImage': 'url(../images/fw.png)' }); $('#br32').css({ 'backgroundImage': 'url(../images/fg.png)' }); $('#br33').css({ 'backgroundImage': 'url(../images/fg.png)' });
		/*$(this).css({'color': '#00FF00'});
		$('#br31').css({'color': 'white'});
		$('#br32').css({'color': '#00FF00'});
		$('#br33').css({'color': '#00FF00'});*/

	})
	$('#bl32').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei3L();
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' });
		$('#br32').css({ 'backgroundImage': 'url(../images/fw.png)' });
		/*$(this).css({'color': '#00FF00'});
		$('#br32').css({'color': 'white'});*/

	})
	$('#bl33').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei3L();
		$('#c_l_b').text(hanteiL); $('#c_r_b').text(hanteiR);
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' }); $('#br33').css({ 'backgroundImage': 'url(../images/fw.png)' });
		/*$(this).css({'color': '#00FF00'});
		$('#br33').css({'color': 'white'});*/

	})
	$('#br31').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei3R();
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' });
		$('#bl31').css({ 'backgroundImage': 'url(../images/fw.png)' }); $('#bl32').css({ 'backgroundImage': 'url(../images/fg.png)' }); $('#bl33').css({ 'backgroundImage': 'url(../images/fg.png)' });
		/*$(this).css({'color': '#00FF00'});
		$('#bl31').css({'color': 'white'});
		$('#bl32').css({'color': '#00FF00'});
		$('#bl33').css({'color': 'white'});*/

	})
	$('#br32').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei3R();
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' });
		$('#bl32').css({ 'backgroundImage': 'url(../images/fw.png)' });
		/*$(this).css({'color': '#00FF00'});
		$('#bl32').css({'color': 'white'});*/

	})
	$('#br33').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei3R();
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' });
		$('#bl33').css({ 'backgroundImage': 'url(../images/fw.png)' });
		/*$(this).css({'color': '#00FF00'});
		$('#bl33').css({'color': 'white'});*/

	})

	// funciones para 5
	$('#bl51').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei5L();
		$('#c_l_b').text(hanteiL); $('#c_r_b').text(hanteiR);
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' });
		$('#br51').css({ 'backgroundImage': 'url(../images/fw.png)' }); $('#br52').css({ 'backgroundImage': 'url(../images/fg.png)' }); $('#br53').css({ 'backgroundImage': 'url(../images/fg.png)' });
		$('#br54').css({ 'backgroundImage': 'url(../images/fg.png)' }); $('#br55').css({ 'backgroundImage': 'url(../images/fg.png)' });
		/*	$(this).css({'color': '#00FF00'});
			$('#br51').css({'color': 'white'});
			$('#br52').css({'color': '#00FF00'});
			$('#br53').css({'color': '#00FF00'});
			$('#br54').css({'color': '#00FF00'});
			$('#br55').css({'color': '#00FF00'});*/

	})
	$('#bl52').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei5L();
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' });
		$('#br52').css({ 'backgroundImage': 'url(../images/fw.png)' });
		/*$(this).css({'color': '#00FF00'});
		$('#br52').css({'color': 'white'});*/

	})
	$('#bl53').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei5L();
		$('#c_l_b').text(hanteiL); $('#c_r_b').text(hanteiR);
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' }); $('#br53').css({ 'backgroundImage': 'url(../images/fw.png)' });
		/*$('#c_l_b').text(hanteiL);$('#c_r_b').text(hanteiR);
		$(this).css({'color': '#00FF00'});
		$('#br53').css({'color': 'white'});*/

	})
	$('#bl54').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei5L();
		$('#c_l_b').text(hanteiL); $('#c_r_b').text(hanteiR);
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' }); $('#br54').css({ 'backgroundImage': 'url(../images/fw.png)' });
		/*	$(this).css({'color': '#00FF00'});
			$('#br54').css({'color': 'white'});*/

	})
	$('#bl55').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei5L();
		$('#c_l_b').text(hanteiL); $('#c_r_b').text(hanteiR);
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' }); $('#br55').css({ 'backgroundImage': 'url(../images/fw.png)' });
		/*	$(this).css({'color': '#00FF00'});
			$('#br55').css({'color': 'white'});*/

	})
	$('#br51').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei5R();
		$('#c_l_b').text(hanteiL); $('#c_r_b').text(hanteiR);
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' });
		$('#bl51').css({ 'backgroundImage': 'url(../images/fw.png)' }); $('#bl52').css({ 'backgroundImage': 'url(../images/fg.png)' }); $('#bl53').css({ 'backgroundImage': 'url(../images/fg.png)' });
		$('#bl54').css({ 'backgroundImage': 'url(../images/fg.png)' }); $('#bl55').css({ 'backgroundImage': 'url(../images/fg.png)' });
		/*$(this).css({'color': '#00FF00'});
		$('#bl51').css({'color': 'white'});
		$('#bl52').css({'color': '#00FF00'});
		$('#bl53').css({'color': '#00FF00'});
		$('#bl54').css({'color': '#00FF00'});
		$('#bl55').css({'color': '#00FF00'});*/

	})
	$('#br52').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei5R();
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' }); $('#bl52').css({ 'backgroundImage': 'url(../images/fw.png)' });
		/*$(this).css({'color': '#00FF00'});
		$('#bl52').css({'color': 'white'});*/

	})
	$('#br53').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei5R();
		$('#c_l_b').text(hanteiL); $('#c_r_b').text(hanteiR);
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' }); $('#bl53').css({ 'backgroundImage': 'url(../images/fw.png)' });
		/*	$(this).css({'color': '#00FF00'});
			$('#bl53').css({'color': 'white'});*/

	})
	$('#br54').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei5R();
		$('#c_l_b').text(hanteiL); $('#c_r_b').text(hanteiR);
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' }); $('#bl54').css({ 'backgroundImage': 'url(../images/fw.png)' });
		/*	$(this).css({'color': '#00FF00'});
			$('#bl54').css({'color': 'white'});*/

	})
	$('#br55').click(function () //bloquear para que no de mas puntos aun no hecho
	{
		hantei5R();
		$('#c_l_b').text(hanteiL); $('#c_r_b').text(hanteiR);
		$(this).css({ 'backgroundImage': 'url(../images/fg.png)' }); $('#bl55').css({ 'backgroundImage': 'url(../images/fw.png)' });
		/*	$(this).css({'color': '#00FF00'});
			$('#bl55').css({'color': 'white'});*/

	})
	$('#hajimeK').click(function () { $('#han-tei').show('slow'); })

	//Cambiar nombres de atleta
	$('#name_athlete_left').click(function () {
		nombreleft = $('#name_athlete_left').text(); nombreright = $('#name_athlete_right').text();
		$('#name_athlete_left').text(nombreright);
		$('#name_athlete_right').text(nombreleft);
	})
	$('#name_athlete_right').click(function () {
		nombreleft = $('#name_athlete_left').text();
		nombreright = $('#name_athlete_right').text();
		$('#name_athlete_left').text(nombreright);
		$('#name_athlete_right').text(nombreleft);
	})
	$('#w_r_p').click(function () { $('#w_r_p').hide('slow'); $('#w_l_p').hide('slow'); $('#w_r_p').text(''); $('#w_l_p').text(''); })
	$('#w_l_p').click(function () {
		$('#w_r_p').hide('slow'); $('#w_l_p').hide('slow'); $('#w_r_p').text(''); $('#w_l_p').text('');
	})

	$('#circle_senshu').click(function () { $('#circle_senshu').hide(); senshuRight = false; senshuLeft = false; })

});