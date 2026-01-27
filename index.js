let text="";
$(document).keypress(function (event)
{
    var cliked=event.key;
    text +=cliked;
    $("h1").text(text);
});
