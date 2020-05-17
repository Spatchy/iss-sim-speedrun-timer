var displayHtml = "<div id='display' style='float:right; border:3px solid; position:relative; z-index:99; margin-top:250px; margin-right:40px; padding:3px; padding-left:px; padding-right:20px; border-radius:15px;'><h2>Speedrun Timer</h2><h2 id='speedrun-time'>Awaiting Start</h2></div>";
var gameStateHolder = "<div id='gameStateHolder' style='display:none;'>tba</div>";
var getStateScript = "<script>setInterval(function () {document.getElementById('gameStateHolder').innerHTML = isGameOver}, 1);</script>"

$("body").append(gameStateHolder);
$("body").append(getStateScript);

var startTime;
var timer = 0;

function doClockRun() {
    console.log($("#gameStateHolder").html());
    console.log("attempted a clock run");
    if($("#gameStateHolder").html() == "false"){ //if game has started
        console.log("game start!")
        startTime = Date.now();
        setInterval(function () {
            if($("#gameStateHolder").html() == "false"){
                $("#speedrun-time").html((timer/1000).toFixed(3));
                timer = Date.now() - startTime;
            }
            else{
                console.log("Final Time: " + timer);
            }
        }, 1);        
    }
    else{ // keep attempting to start the clock until it can be started
        setTimeout(function () { 
            doClockRun()
        }, 1);
    }
    
}

function start() {
    $("body").append(displayHtml);
    $("#speedrun-time").css("color", "#2aff00");
    doClockRun();
}

$(".message-button").on("click", function () {
    start();
});