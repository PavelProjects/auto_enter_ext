chrome.storage.sync.get(['state','username','password'], function(res){
    var state=res.state;
    var username=res.username;
    var password=res.password;
    if(state=="on"){
        if(username == "" || password == ""){
            var audio = document.createElement('audio');
            audio.src='lions.mp3';
            audio.play();
            audio.onended = function(){
            audio.remove(); 
            };
          document.body.appendChild(audio);
            var loop=0;
            while(username == "" || password == ""){
                if(loop==1){
                    alert("You should enter login & password.")
                }
                username = prompt("Login for MAI WiFI:","");
                password = prompt("Password:",""); 
                loop=1;
            }
            alert("Login : "+username+", password : "+ password+".\nAlso you can change them "+
            "in the upper right corner");
            chrome.storage.sync.set({'username':username});
            chrome.storage.sync.set({'password':password});   
        }
    }
});