
var btndark = document.querySelector("#dark-btn");

var darkmode = document.querySelector("body");

var darkmodeH4 = document.querySelector("h4");

var darkmodeOw = document.querySelectorAll(".section-offw");

var flag = true;

function activateDarkMode(){
    if(flag){
        darkmode.style.backgroundColor = "#6B7280";
        darkmode.style.color = "white";
        darkmodeH4.style.color = "black";
        for(var i=0; i<darkmodeOw.length; i++){
            darkmodeOw[i].style.backgroundColor = "inherit";
            darkmodeOw[i].style.color = "#ffb22d";
        }
        flag = false;
        console.log("dark ", flag);
    }
    else{
        darkmode.style.backgroundColor = "inherit";
        darkmode.style.color = "inherit";
        for(var i=0; i<darkmodeOw.length; i++){
            darkmodeOw[i].style.color = "inherit";
        }
        flag=true;
        console.log("white - ", flag);
    }

};

btndark.addEventListener("click", activateDarkMode);
