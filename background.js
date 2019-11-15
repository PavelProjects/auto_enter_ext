var on="on"; var off="off";
// document.getElementsByName("username")[0].value="POAlekseev";  //set u username here
// document.getElementsByName("password")[0].value="DhEbM726";    //and password here

chrome.storage.sync.get(['state','username','password'], function(res){
    var state=res.state;
    console.log("Auto enter is "+state);
    if(state==on){
        var username=res.username;
        var password=res.password;
        console.log(username+"-"+password);
    }else if(state==off){
        alert("Auto enter is off.");
    }
});