console.log("apre calc.js");


const operatore = document.getElementById("operazione").value;


 
   function funzione() {
     



  console.log("vede il form"); 

      // valori degli operandi e dell'operatore
      const x = parseInt(document.getElementById("numerouno").value);      
     
      
      const y = parseInt(document.getElementById("numerodue").value);
     
      
      const operatore = document.getElementById("operazione").value;
      
      
      // Effettuare il calcolo
      let result = "risultato"; 
       console.log("crea variabile 'risultato'"); 
     
     
if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) 
				{
				alert("Errore :(");
				return;}
else {
      switch(operatore) {
        case "+":
        console.log("fa l'addizione"); 
          result = x + y;
          break;
        case "-":
        console.log("fa la sottrazione");
          result = x - y;
          break;
        case "*":
        console.log("fa la moltiplicazione");
          result = x * y;
          break;
        case "%":
        console.log("fa il modulo");
          result = x % y;
          break;
        case "/":
          if (y === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return; // Interrompe l'esecuzione
          }
          console.log("fa la divisione");
          result = x / y;
          break;
        default:
          alert("Errore : (");
          console.log("Errore : (");
          return; // Interrompe l'esecuzione
      }
      
}

      // Visualizza il risultato
      alert("Il risultato è: " + result);
      console.log("Il risultato è: " + result);
      document.getElementById("risultato").innerHTML = result;
    };










document.addEventListener("DOMContentLoaded", function() {
  
  
  
   console.log("dentro"); 
   


 							  });


