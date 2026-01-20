var randomnum1=Math.random();
randomnum1=(randomnum1*6)+1;
randomnum1=Math.floor(randomnum1);
var randomdicesrc="dice"+randomnum1+".png";
var randomimagesource="images/"+randomdicesrc;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);
var randomnum2=Math.floor(Math.random()*6)+1;
var src1="dice"+randomnum2+".png";
var isrc2="images/"+src1;
var image2=document.querySelectorAll("img")[1].setAttribute("src",isrc2);

