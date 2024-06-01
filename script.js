let cd=document.querySelector(".trend");/*card class if we use class then all class will be displya none*/
let cd2=document.querySelector("#trendSec");/* girls trends card id only for displyaing none*/

/*all buttons*/
let mainPage=document.querySelector(".main");
let blg=document.querySelector(".trends");
let abt=document.querySelector(".about");
let cont=document.querySelector(".contact");
 let foot=document.querySelector(".footer");
 let foot2=document.getElementById('ft');
 let letters=document.querySelector(".letter");
 
 
 
function homes(){
    mainPage.style.display="flex";
    blg.style.display="block";
    cd.style.display="block"; 
    cd2.style.display="block";
    abt.style.display="none";
    
    document.getElementById("shop").style.color="black";
document.getElementById("home").style.color="aqua";
document.getElementById("bloggs").style.color="black";
document.getElementById("abt").style.color="black";
document.getElementById("cont").style.color="black";

}

function shops(){
mainPage.style.display="none";
blg.style.display="none";
/*buttons for changing colors after clicking*/
document.getElementById("shop").style.color="aqua";
document.getElementById("home").style.color="black";
document.getElementById("bloggs").style.color="black";
document.getElementById("abt").style.color="black";
document.getElementById("cont").style.color="black";
}

function blogs(){
    mainPage.style.display="none";
 cd2.style.display="none";
 cd.style.display="none";
 cont.style.display="none";
 blg.style.display="block";
 

 document.getElementById("shop").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("blogss").style.color="aqua";
document.getElementById("abt").style.color="black";
document.getElementById("cont").style.color="black";
 }   
function about(){
    mainPage.style.display="none";
 cd2.style.display="none";
 cd.style.display="none";
 abt.style.display="block";
 blg.style.display="none";
 cont.style.display="none";

 

 document.getElementById("shop").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("blogss").style.color="black";
document.getElementById("abt").style.color="aqua";
document.getElementById("cont").style.color="black";

}
function contact(){
    mainPage.style.display="none";
    cd2.style.display="none";
    cd.style.display="none";
    abt.style.display="none";
    cont.style.display="block";
    blg.style.display="none";
    
 document.getElementById("shop").style.color="black";
 document.getElementById("home").style.color="black";
 document.getElementById("blogss").style.color="black";
 document.getElementById("abt").style.color="black";
 document.getElementById("cont").style.color="aqua";

}

function show(img){
let newImg=document.getElementById("newImg");//in this cart img our Card img will show after clicking on that i mg
newImg.src=img.src; //new img will become that clicked imgsrc 

mainPage.style.display="none";
    cd2.style.display="none";
    cd.style.display="none";
    abt.style.display="none";
    cont.style.display="none";
    blg.style.display="none";
    

document.querySelector(".cart").style.display="flex";

}
function addtoCart(){
    alert("Added To Cart");
}
function back(){
    alert("back to previous");
}

