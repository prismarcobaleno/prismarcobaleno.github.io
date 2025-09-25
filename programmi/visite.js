
	const dx = new Date() // today, now
	newdate = dx.toISOString().slice(0, 10); // YYYY-MM-DD

	var sesid = Math.random().toString(36).substr(2, 9)+'X'+Math.random().toString(36).substr(2, 9);
	var sesidDate = "2025-09-25";

	var parts = location.hostname;
	var sndleveldomain = parts.replace("http://", "");	
	var sndleveldomain = sndleveldomain.replace("https://", "");	
	var sndleveldomain = sndleveldomain.replace("www.", "");


  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";domain="+ sndleveldomain +";path=/";
  }


  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = document.cookie;
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

	var accSesId="";
	var myCookie = getCookie('gnrcounter_2419_2419');
	var newgnrCounter2 = getCookie('gnrcounter2_2419_2419');	

	if (myCookie == "") {
		//alert("cookie does not exist");
		setCookie('gnrcounter_2419_2419', sesid, 7);
		setCookie('gnrcounter2_2419_2419', sesidDate, 7);
		
		accSesId="0*"+sesidDate+"*"+sesid;
	} else {
		// alert("cookie exists");
		accSesId="1*"+newgnrCounter2+"*"+myCookie;	
		setCookie('gnrcounter2_2419_2419', sesidDate, 7);		
		
	}
	// alert(accSesId);
	
	var userLang = navigator.language || navigator.userLanguage; 
	var hostname = window.location.hostname;
	var refurl = document.referrer;	
	var platform = navigator.platform;	
	var title = document.title;
	var url = document.URL;
	var screen =screen.width + "x" + screen.height ; 
	
	document.write('<script src="https://gnrcounter.com/counterClient.php?accDomainId=78f01f874f42d49e6e015d6be58bfa18&accSesId='+accSesId+'&lng='+userLang+'&hostname='+hostname+'&screen='+screen+'&url='+url+'&title='+title+'&refurl='+refurl+'&platform='+platform+'" type="text/javascript"></script>');  
    
	document.write('<div style="flex-grow: 2" class="gnrCounterx scatolina"><div>Visite di oggi: <span class="gnrCounter-boldx">3</span> </div><div>Visite totali: <span class="gnrCounter-boldx">1</span></div>');
	
 	

