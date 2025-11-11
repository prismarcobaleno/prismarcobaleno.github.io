/* Codice libero perché odio il copirait. */


/* Questo blocco prende il tema da localstorage e cambia la casellina. 
E poi quando clicchi la casellina mette il nuovo valore nel localstorage */
/*  I colori del tema stanno nel CSS quindi anche se non hai giavascrip 
ti funziona per la pagina corrente */
let temaSalvato = localStorage.getItem("temaSalvato");
function caricaTema () {
	if(temaSalvato == "true"){ 
		document.getElementById("chiara").checked = true;}
	else {document.getElementById("chiara").checked = false;};
	console.log("temaSalvatoLS " + localStorage.getItem("temaSalvato"));
	}

function cliccaChiara(){
	let tema = document.getElementById("chiara").checked;
	localStorage.setItem("temaSalvato", tema);
	console.log("tema " + tema)
	console.log("temaSalvatoLS " + localStorage.getItem("temaSalvato"));
	}


/*  Modalità in bianco e nero */
let grigioSalvato = localStorage.getItem("grigioSalvato");
function caricaGrigia () {
	if(grigioSalvato == "true"){ 
		document.getElementById("grigia").checked = true;}
	else {document.getElementById("grigia").checked = false;};
	console.log("grigioSalvatoLS " + localStorage.getItem("grigioSalvato"));
	}

function cliccaGrigia(){
	let grigio = document.getElementById("grigia").checked;
	localStorage.setItem("grigioSalvato", grigio);
	console.log("grigio " + grigio)
	console.log("grigioSalvatoLS " + localStorage.getItem("grigioSalvato"));
	}

/* Questo qua sotto fa la stessa cosa ma non col tema,
 con la casella dei simboletti sitelen pona.*/
let sitelenAwen = localStorage.getItem("sitelenAwen");
function caricaSitelen() {
	if(sitelenAwen == "true"){ 
		document.getElementById("sitelen").checked = true;}
	else {document.getElementById("sitelen").checked = false;};
	console.log("sitelenAwenLS " + localStorage.getItem("sitelenAwen"));
	}

function cliccaSitelen(){
	let sitelen = document.getElementById("sitelen").checked;
    localStorage.setItem("sitelenAwen", sitelen);
	console.log("sitelen " + sitelen)
	console.log("sitelenAwenLS " + localStorage.getItem("sitelenAwen"));
		}

/* Questa funzione eventualmente per debaggare */
function basta() {localStorage.clear();}

/* Chiama le funzioni */
caricaTema();	
caricaGrigia();
caricaSitelen();	

