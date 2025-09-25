expiration = new Date;
expiration.setMonth(expiration.getMonth()+6)
counter = eval(cookieVal("total_visited"))
counter++
document.cookie = "total_visited="+counter+";expires=" + expiration.toGMTString()
 
 
    function cookieVal(cookieName) {
            thisCookie = document.cookie.split("; ")
            for (i=0; i<thisCookie.length; i++){
                    if (cookieName == thisCookie[i].split("=")[0]){
                            return thisCookie[i].split("=")[1]
                    }
            }
            return 0;
    }

	

if(!Histats_variables)
    {var Histats_variables=[];} 
Histats_variables.push("tags","a6Z55wyz5wB4CZZc"); 
Histats_variables.push("a6Z55wyz5wB4CZZc",""); 
var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,4874638,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']); 
    (function() { var hs = document.createElement('script'); 
    hs.type = 'text/javascript'; 
    hs.async = true; hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs); })(); 
    
if(!Histats_variables){var Histats_variables=[];} 
    Histats_variables.push("tags","a6Z55wyz5wB4CZZc"); 
    Histats_variables.push("a6Z55wyz5wB4CZZc",""); 
    var _Hasync= _Hasync|| []; _Hasync.push(['Histats.start', '1,2998001,4,0,0,0,00010000']); _Hasync.push(['Histats.fasi', '1']); _Hasync.push(['Histats.track_hits', '']); 
    (function() { var hs = document.createElement('script'); 
    hs.type = 'text/javascript'; hs.async = true; hs.src = ('//s10.histats.com/js15_as.js'); 
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs); })(); 



	var userLang = navigator.language || navigator.userLanguage; 
	var hostname = window.location.hostname;
	var refurl = document.referrer;	
	var platform = navigator.platform;	
	var title = document.title;
	var url = document.URL;
	var screen =screen.width + "x" + screen.height ; 
	
    let visite = 0;
    document.addEventListener('DOMContentLoaded', function() { visite++; });


	//document.write('<script src="https://gnrcounter.com/counterClient.php?accDomainId=78f01f874f42d49e6e015d6be58bfa18&lng='+userLang+'&hostname='+hostname+'&screen='+screen+'&url='+url+'&title='+title+'&refurl='+refurl+'&platform='+platform+'" type="text/javascript"></script>');  
    
	document.write('<div style="flex-grow: 2" class="gnrCounterx scatolina"><div>Visite di oggi: <span class="gnrCounter-boldx">Boh</span> </div><div>Il tuo schermo: <span class="gnrCounter-boldx">'+ screen +'</span></div>');
	
 	

