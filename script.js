const preciosBS = {
	'tratamiento1': '2', // Examen Clinico General
	'tratamiento2': '5', // Examen Clinico Especialista
	'tratamiento3': '3', // Consulta Sucesiva de Ortodoncia
	'tratamiento4': '5', // Emergencias (Sin aditamentos)
	'tratamiento5': '4', // Reposicion con brackets nuevos
	'tratamiento6': '2', // Reposicion de brackets (solo pegado)
	'tratamiento7': '5', // Cambio de macanica de tratamiento (cambio de arco) superior o inferior
	'tratamiento8': '3', // Toma de impresion con alginato
	'tratamiento9': '2', // vaciado de modelo en yeso
	'tratamiento10': '6', // tartretomia simple p-sesion
	'tratamiento11': '10', // tartretomia compleja p-sesion
	'tratamiento12': '16', // retiro de brackets incluyendo profilaxis
	'tratamiento13': '35', // retenedor removible cada uno
	'tratamiento14': '15', // retenedor fijo 
	'tratamiento15': '25', // boton de nance, erradicor de habito
	'tratamiento16': '40', // clareamiento dental
	'tratamiento17': '8', // honorarios claramiento sin material p/sesion
	'tratamiento18': '150', // inicial de tratamiento ortontico basico inicial
	'tratamiento19': '8', // exodoncias
	'tratamiento20': '15', // exodoncias de semi-incluido, incuidos o retenidos
	'tratamiento21': '2', // restauraciones con resina simple
	'tratamiento22': '17', // restauraciones de resina complejas o molares
	'tratamiento23': '23', // restauraciones tipo carillas de resina a partir de
	'tratamiento24': '35', // tratamiento endodontico monoradicular
	'tratamiento25': '40', // tratamiento endodontico multiradicular premolar
	'tratamiento26': '45', // tratamiento endodontico multiradicular molares
	'tratamiento27': '8' // pulpotomia p/sesión
}

let tasa = 0;
let tasabsf = 0;

const formatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'VEB',
  minimumFractionDigits: 2
})

function calculations() {
	tasa = document.getElementById("rate").value;
	tasabsf = tasa * 100000;
    document.getElementById("trata1").innerHTML = formatter.format(preciosBS.tratamiento1 * tasa);
    document.getElementById("trata2").innerHTML = formatter.format(preciosBS.tratamiento2 * tasa);
    document.getElementById("trata3").innerHTML = formatter.format(preciosBS.tratamiento3 * tasa);
    document.getElementById("trata4").innerHTML = formatter.format(preciosBS.tratamiento4 * tasa);
    document.getElementById("trata5").innerHTML = formatter.format(preciosBS.tratamiento5 * tasa);
    document.getElementById("trata6").innerHTML = formatter.format(preciosBS.tratamiento6 * tasa);
    document.getElementById("trata7").innerHTML = formatter.format(preciosBS.tratamiento7 * tasa);
    document.getElementById("trata8").innerHTML = formatter.format(preciosBS.tratamiento8 * tasa);
    document.getElementById("trata9").innerHTML = formatter.format(preciosBS.tratamiento9 * tasa);
    document.getElementById("trata10").innerHTML = formatter.format(preciosBS.tratamiento10 * tasa);
    document.getElementById("trata11").innerHTML = formatter.format(preciosBS.tratamiento11 * tasa);
    document.getElementById("trata12").innerHTML = formatter.format(preciosBS.tratamiento12 * tasa);
    document.getElementById("trata13").innerHTML = formatter.format(preciosBS.tratamiento13 * tasa);
    document.getElementById("trata14").innerHTML = formatter.format(preciosBS.tratamiento14 * tasa);
    document.getElementById("trata15").innerHTML = formatter.format(preciosBS.tratamiento15 * tasa);
    document.getElementById("trata16").innerHTML = formatter.format(preciosBS.tratamiento16 * tasa);
    document.getElementById("trata17").innerHTML = formatter.format(preciosBS.tratamiento17 * tasa);
    document.getElementById("trata18").innerHTML = formatter.format(preciosBS.tratamiento18 * tasa);
	document.getElementById("trata19").innerHTML = formatter.format(preciosBS.tratamiento19 * tasa);
	document.getElementById("trata20").innerHTML = formatter.format(preciosBS.tratamiento20 * tasa);
	document.getElementById("trata21").innerHTML = formatter.format(preciosBS.tratamiento21 * tasa);
	document.getElementById("trata22").innerHTML = formatter.format(preciosBS.tratamiento22 * tasa);
	document.getElementById("trata23").innerHTML = formatter.format(preciosBS.tratamiento23 * tasa);
	document.getElementById("trata24").innerHTML = formatter.format(preciosBS.tratamiento24 * tasa);
	document.getElementById("trata25").innerHTML = formatter.format(preciosBS.tratamiento25 * tasa);
	document.getElementById("trata26").innerHTML = formatter.format(preciosBS.tratamiento26 * tasa);
	document.getElementById("trata27").innerHTML = formatter.format(preciosBS.tratamiento27 * tasa);

    document.getElementById("bsf1").innerHTML = formatter.format(preciosBS.tratamiento1 * tasabsf);
    document.getElementById("bsf2").innerHTML = formatter.format(preciosBS.tratamiento2 * tasabsf);
    document.getElementById("bsf3").innerHTML = formatter.format(preciosBS.tratamiento3 * tasabsf);
    document.getElementById("bsf4").innerHTML = formatter.format(preciosBS.tratamiento4 * tasabsf);
    document.getElementById("bsf5").innerHTML = formatter.format(preciosBS.tratamiento5 * tasabsf);
    document.getElementById("bsf6").innerHTML = formatter.format(preciosBS.tratamiento6 * tasabsf);
    document.getElementById("bsf7").innerHTML = formatter.format(preciosBS.tratamiento7 * tasabsf);
    document.getElementById("bsf8").innerHTML = formatter.format(preciosBS.tratamiento8 * tasabsf);
    document.getElementById("bsf9").innerHTML = formatter.format(preciosBS.tratamiento9 * tasabsf);
    document.getElementById("bsf10").innerHTML = formatter.format(preciosBS.tratamiento10 * tasabsf);
    document.getElementById("bsf11").innerHTML = formatter.format(preciosBS.tratamiento11 * tasabsf);
    document.getElementById("bsf12").innerHTML = formatter.format(preciosBS.tratamiento12 * tasabsf);
    document.getElementById("bsf13").innerHTML = formatter.format(preciosBS.tratamiento13 * tasabsf);
    document.getElementById("bsf14").innerHTML = formatter.format(preciosBS.tratamiento14 * tasabsf);
    document.getElementById("bsf15").innerHTML = formatter.format(preciosBS.tratamiento15 * tasabsf);
    document.getElementById("bsf16").innerHTML = formatter.format(preciosBS.tratamiento16 * tasabsf);
    document.getElementById("bsf17").innerHTML = formatter.format(preciosBS.tratamiento17 * tasabsf);
    document.getElementById("bsf18").innerHTML = formatter.format(preciosBS.tratamiento18 * tasabsf);
	document.getElementById("bsf19").innerHTML = formatter.format(preciosBS.tratamiento19 * tasabsf);
	document.getElementById("bsf20").innerHTML = formatter.format(preciosBS.tratamiento20 * tasabsf);
	document.getElementById("bsf21").innerHTML = formatter.format(preciosBS.tratamiento21 * tasabsf);
	document.getElementById("bsf22").innerHTML = formatter.format(preciosBS.tratamiento22 * tasabsf);
	document.getElementById("bsf23").innerHTML = formatter.format(preciosBS.tratamiento23 * tasabsf);
	document.getElementById("bsf24").innerHTML = formatter.format(preciosBS.tratamiento24 * tasabsf);
	document.getElementById("bsf25").innerHTML = formatter.format(preciosBS.tratamiento25 * tasabsf);
	document.getElementById("bsf26").innerHTML = formatter.format(preciosBS.tratamiento26 * tasabsf);
	document.getElementById("bsf27").innerHTML = formatter.format(preciosBS.tratamiento27 * tasabsf);





}