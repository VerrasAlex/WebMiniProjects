//DOM Events Variables
var siteMap = document.getElementById('index');
var par = document.getElementsByClassName('nochange');

//DOM Queries Variables
var x = document.getElementsByClassName("innerDIV");
var e = document.getElementById("theEnd");

//Date Variables and Execution
var d = new Date();
var dVal = d.getDay();
var dq;
var date = document.getElementsByClassName("date");
for(var i=0; i<date.length; i++){
    dq = date[i];
    if(dVal==0){
        dq.innerHTML="Oh God tomorrow it's Monday!!!";
    }else if(dVal==1){
        dq.innerHTML="It's Monday again!!"
    }else if(dVal==2){
        dq.innerHTML="It's 2sDay"
    }else if(dVal==3){
        dq.innerHTML="It is Wednesday my Dudes!"
    }else if(dVal==4){
        dq.innerHTML="Every Thursday I eat spagghetti"
    }else if(dVal==5){
        dq.innerHTML="It's Friday. Weekend is upon us!"
    }else if(dVal==6){
        dq.innerHTML="It's Saturday! .So? Every day is the same in the quarantine :("
    }
}

//DOM Events
//1
addEventListener("click", function(){
    siteMap.innerHTML = "Clicking Site Map";
});

//2
for(var i=0; i<par.length; i++){
    var y=par[i];
    y.addEventListener("mouseenter" , function(){
        if(y.className==="nochange"){
            y.className="change"
        }else{
            y.className="nochange"
        }
    });

    y.addEventListener("mouseleave" , function(){
        if(y.className==="nochange"){
            y.className="change"
        }else{
            y.className="nochange"
        }
    });
}

//DOM Queries
//1
for(var i=0; i<x.length; i++){
    x[i].querySelector("p.siteMap").innerHTML = "Site Map";
}

//2
e.querySelector("p.end").innerHTML = "THE END";

//Date
// for(var i=0; i<date.length; i++){}
