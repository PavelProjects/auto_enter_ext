var on="on"; var off="off";
window.onload=function(){
    var powerSwitch = document.getElementById("powerSwitch");
    chrome.storage.sync.get('state', function(res){
        var state=res.state;
        if(state==on){
            powerSwitch.style.backgroundColor="green";
            powerSwitch.firstChild.data="working"
            chrome.storage.sync.set({'state':'on'});
        }else if(state==off){
            powerSwitch.style.backgroundColor="red";
            powerSwitch.firstChild.data="disabled"
            chrome.storage.sync.set({'state':'off'});
        }else{
            chrome.storage.sync.set({'state':'on'});
            powerSwitch.style.backgroundColor="green";
            powerSwitch.firstChild.data="working"
        }
    });
}
document.addEventListener('DOMContentLoaded', function(){
    var powerSwitch = document.getElementById("powerSwitch");
    powerSwitch.addEventListener("click", function(){
        chrome.tabs.getSelected(null, function(tab){
            chrome.storage.sync.get('state', function(res){
                var state=res.state;
                if(state==on){
                    powerSwitch.style.backgroundColor="red";
                    powerSwitch.firstChild.data="disabled"
                    chrome.storage.sync.set({'state':'off'});
                }else if(state==off){
                    powerSwitch.style.backgroundColor="green";
                    powerSwitch.firstChild.data="working"
                    chrome.storage.sync.set({'state':'on'});
                }else{
                    chrome.storage.sync.set({'state':'on'});
                    powerSwitch.style.backgroundColor="green";
                    powerSwitch.firstChild.data="working"
                }
            });
        });
    },false);
    var changeNamePass = document.getElementById("change_credits");
    document.getElementById("username").addEventListener('keyup', function(event){
        if(event.keyCode==13){
            event.preventDefault();
            searchButton.click();
        }
    },false);
    document.getElementById("password").addEventListener('keyup', function(event){
        if(event.keyCode==13){
            event.preventDefault();
            searchButton.click();
        }
    },false);
    chrome.storage.sync.get('username',function(res){
        var username = res.username;
        document.getElementById("username").value=username;
    });
    chrome.storage.sync.get('password',function(res){
        var password = res.password;
        document.getElementById("password").value=password;
    });
    changeNamePass.addEventListener("click", function(){
        chrome.storage.sync.set({'username':document.getElementById("username").value});
        chrome.storage.sync.set({'password':document.getElementById("password").value});
    },false);
},false);
