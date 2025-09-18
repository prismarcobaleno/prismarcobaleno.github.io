let temaSalvato = localStorage.getItem("temaSalvato");
		
		function carica () {
			if(temaSalvato == "true"){ 
				document.getElementById("chiara").checked = true;}
			else {document.getElementById("chiara").checked = false;};
			console.log("temaSalvatoLS " + localStorage.getItem("temaSalvato"));
			}

		function basta() {localStorage.clear();}

		function cliccaChiara(){
			let tema = document.getElementById("chiara").checked;
			localStorage.setItem("temaSalvato", tema);
			console.log("tema " + tema)
			console.log("temaSalvatoLS " + localStorage.getItem("temaSalvato"));
			}

			carica();	