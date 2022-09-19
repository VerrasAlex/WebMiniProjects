//Variables with DOM Queries
var pVIDEO = document.querySelector('#pVIDEO')
var video = document.querySelectorAll('.vid');
var vid = video[0];

//DOM Event
    pVIDEO.addEventListener("click", function(){
        if(vid.className==="vid"){
            vid.className="vidHide";
        }else{
            vid.className="vid";
        }
})

