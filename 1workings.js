function onefun(){

    window.alert("You can e-mail me at: mastersnowy456@gmail.com");


}

function twofun(){

    window.open("https://www.youtube.com/channel/UC_LSIu_uJUzpeXHnwOIjmHg");

    
}

var num="true";

function mPlay(){




if(num==="true"){
  
    document.getElementById('imageforsound').src='nosound.png'
    document.getElementById("moosic").play();

    num="false";

}
else if(num==="false"){

    document.getElementById('imageforsound').src='soundy.png'
    document.getElementById("moosic").pause();

    num="true";
}

}