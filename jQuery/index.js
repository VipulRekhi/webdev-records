let text="";
$(document).keypress(function (event)
{
    var cliked=event.key;
    text +=cliked;
    $("h1").text(text);
});
$("h1").on("mouseover",function()
{
    $("h1").text("mouse ")
    $("h1").css("color","yellow")
});
