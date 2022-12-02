var cnt = 0;
var $score = null;
var $unoo = null;
var play = false;
var timerID = 0;

$(document).ready(function(){
    init();
    initEvent();
});

function init() {
    $score = $("#score");
    $unoo = $("#unoo");
}
function initEvent(){
    $("#start").click(function(){
        startGame();
    });
    $("#unoo").click(function(){
        addScore();
    });
}
function startGame(){
    //play가 플래그 변수라서 false일때 게임을 시작할 수 있음.
    if(play == false){
        //게임이 종료되었는지 체크하는 함수 호출
        checkEndGame();

        play = true;
        timerID = setInterval(function(){
            //물고기가 움직이게함
            moveFish();
        }, 700);
    }
}
function addScore(){
    if(play == true){
        cnt++;
        $score.html(cnt);
    }
}
function moveFish(){
    var x = parseInt(Math.random() * 800);
    var y = parseInt(Math.random() * 340);

    $unoo.css({
        left : x,
        top : y
    });
    
}
function checkEndGame(){
    //게임이 5초 뒤에 종료 되게
    setTimeout(function(){
        play = false;
        //물고기를 움직이는 타이머 제거
        clearInterval(timerID);
        alert("GAME END!");
    },10000);
}