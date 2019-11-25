var on="on"; var off="off";
chrome.storage.onChanged.addListener(function(changes, namespace){
    for(var key in changes){
        var storageChange = changes[key];
        if(key=="state" && storageChange.newValue==on){
            window.location.reload();
        }
    }
});

chrome.storage.sync.get(['state','username','password'], function(res){
    var state=res.state;
    console.log("Auto enter is "+state);
    if(state==on){
        if(document.getElementsByClassName("message")[0].innerHTML=="The User Name and Password combination you have entered is invalid. Please try again."){
            alert("Check login/password! Plugin turned off.");
            chrome.storage.sync.set({'state':'off'});
        }else{
            var username=res.username;
            var password=res.password;
            if(username == "" || password == ""){
                while(username == "" || password == ""){
                    username = prompt("Login:");
                    password = prompt("Password:"); 
                }
                alert("Login %s, password %s",username, password);
                chrome.storage.sync.set({'username':username});
                chrome.storage.sync.set({'password':password}); 
            }
            console.log(username+"-"+password);
            try{
                document.getElementsByName("username")[0].value=username; 
                document.getElementsByName("password")[0].value=password;
                document.getElementsByClassName("button")[0].click();
                document.location.href="http://poeblo.epizy.com/img_site.html?i=1";
            }catch(error){
                console.log(error);
            }
        }
    }else if(state==off){
        alert("Auto enter is off.");
    }
});
