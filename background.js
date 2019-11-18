var on="on"; var off="off";
chrome.storage.onChanged.addListener(function(changes, namespace){
    for(var key in changes){
        var storageChange = changes[key];
        if(key=="state" && storageChange.newValue==on){
            window.location.reload();
        }
    }
});

function final(){
    if(document.forms[0].err_flag.value == 1){
      document.forms[0].err_flag.value = 0;
      document.forms[0].buttonClicked.value = 4;
      document.forms[0].submit();
    }else{
        document.forms[0].redirect_url.value = "http://poeblo.epizy.com/img_site.html";
        document.forms[0].buttonClicked.value = 4;
        document.forms[0].submit();
        //window.location.replace("http://poeblo.epizy.com/img_site.html");
    }
  }
chrome.storage.sync.get(['state','username','password'], function(res){
    var state=res.state;
    console.log("Auto enter is "+state);
    if(state==on){
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
            final();
        }catch(error){
            console.log(error);
        }
    }else if(state==off){
        alert("Auto enter is off.");
    }
});
