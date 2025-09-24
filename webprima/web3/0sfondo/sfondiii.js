
function colori() {
var r = Math.random() *255
var g = Math.random() *255
var b = Math.random() *255

return "rgb("+ r + ", " + g + ", " + b + ")"
	}

function sfondi() {
   document.body.style.backgroundColor = colori();
}





