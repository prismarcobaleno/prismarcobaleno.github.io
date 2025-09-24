//onclick remove function
function remove(element)
{
    var confirmation = window.confirm("Vuoi procedere?");
    if (confirmation) 
    {
        this.parentNode.removeChild(this);
    }
}

//new button function
function newEvent()
{
    var Todo = document.getElementById("newInsert").value;
    if(Todo)
    {
        var newTodo = document.createElement("li");
        newTodo.textContent = Todo;
        newTodo.onclick = remove;
        var parentElement = document.getElementById("ft_list");
        var firstChild = parentElement.firstChild;
        parentElement.insertBefore(newTodo, firstChild);
    }
}

function newEventOnLoad(text)
{
    var newTodo = document.createElement("li");
    newTodo.textContent = text;
    newTodo.onclick = remove;
    var parentElement = document.getElementById("ft_list");
    parentElement.appendChild(newTodo);
}

//cookie functions

function saveDataToCookie() {
    // Seleziona il div che contiene i tuoi <li> dinamici
    var divElement = document.getElementById("ft_list");

    // Ottieni tutti i <li> all'interno del div
    var listItems = divElement.getElementsByTagName("li");

    // Array per memorizzare i dati dei <li>
    var data = [];

    // Scorre tutti i <li> e memorizza i loro contenuti
    for (var i = 0; i < listItems.length; i++) {
        data.push(listItems[i].textContent);
    }

    // Converti l'array in una stringa JSON
    var jsonData = JSON.stringify(data);

    // Salva la stringa JSON nei cookie
    document.cookie = "listData=" + encodeURIComponent(jsonData) + "; path=/; SameSite=None;";
}

function loadDataFromCookie() {
    // Ottieni la stringa dei cookie
    var cookieString = document.cookie;

    // Inizializza una variabile per memorizzare i dati dei <li>
    var listData = [];

    // Se ci sono cookie presenti
    if (cookieString) {
        // Suddividi la stringa dei cookie in cookie singoli
        var cookies = cookieString.split(";");

        // Cerca il cookie specifico che contiene i dati dei <li>
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Controlla se il cookie inizia con il nome desiderato
            if (cookie.indexOf("listData=") === 0) {
                // Trovato il cookie contenente i dati dei <li>
                // Estrai i dati e convertili da JSON a un array
                listData = JSON.parse(decodeURIComponent(cookie.substring("listData=".length)));
                break; // Esci dal ciclo una volta trovato il cookie desiderato
            }
        }
    }

    // Restituisci i dati dei <li>
    return listData;
}

var loadedData = loadDataFromCookie();
console.log("Dati caricati dai cookie:", loadedData);

function OnLoadCreatingList()
{
    for(i = 0; i < loadedData.length; i++)
    {
        newEventOnLoad(loadedData[i]);
        console.log("li loaded: ", loadedData[i]);
    }
}

window.addEventListener('beforeunload', function(event)
{
    saveDataToCookie();
});

window.onclose = function()
{
    saveDataToCookie();
};

window.onload = function()
{
    OnLoadCreatingList();
};
