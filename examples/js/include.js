function Include( id, path, config ){

    // make sure id is properly formatted
    if(typeof id !== "string"){
     
        throw new Error('Include: first argument expecting an id as a string, ex: Include("nav-bar","includes/nav.html");');
    
    } else if( id.substr(0,1)==="#"){
     
        throw new Error("Include: honest mistake, when passing an id, do not include '#', simply write the value of id, ex: 'nav-bar', not '#nav-bar'");
    }

    // make sure path is properlly formatted
    if(typeof path !== 'string'){
        
        throw new Error('Include: second argument expecting a path as a string, ex: Include("nav-bar","includes/nav.html");');
    
    } else if( path.substr(path.length-5,5) !== ".html" ){
    
        throw new Error('Include: paths should end with .html, ex: Include("nav-bar","includes/nav.html");');
    }

    // make sure config is properlly formatted
    if(typeof config !== "undefined" && typeof config !== 'object'){
        throw new Error('Include: if you include the optional third paramter, it should be an object');
    }

    // do the thing ...
    
    var targ = document.getElementById( id );
    if(targ === null){
        throw new Error('Include: woops! looks like there aren\'t any elements on the page with an id of "'+id+'"');
    }

    var html = targ.innerHTML;

    var req = new XMLHttpRequest();
    req.open("GET", path, true);
    req.addEventListener("load", function() {

        if(req.status===404){
            throw new Error('Include: dang! looks like the file "'+path+'" dosen\'t exist?');
        } else {

            if(typeof config === "undefined"){
           
                html += req.responseText;
                targ.innerHTML = html;                
           
            } else {

                var resTxt = req.responseText;

                for(var key in config ){
                    
                    var regEx = new RegExp( '&'+String(key), "g");
                    resTxt = resTxt.replace( regEx, config[key]  );
                }

                html += resTxt;
                targ.innerHTML = html;

            }

        }

    });
    req.send(null);

}