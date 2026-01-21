for(var i=0;i<7;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
{
   var letter=this.innerHTML;
   switch(this.innerHTML)
   {
   case "w":
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();
    break;
    case "a":
    var audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
    break;
    case "s":
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();
    break;
   }
}
);}
