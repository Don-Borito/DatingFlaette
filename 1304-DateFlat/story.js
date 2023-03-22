
var dialogue = document.getElementById("dialogueBox");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var nextBtn = document.getElementById("next")
var startBtn = document.getElementById("start");
var image = document.getElementById("image");

let count = 0;
let sceneLocation;

let pathA;
let pathC;

window.onload = (

    optionA.style.display = "none",
    optionB.style.display = "none",
    optionC.style.display = "none",
    nextBtn.style.display = "none"
)
   

startBtn.addEventListener('click', gameStart);
nextBtn.addEventListener('click', onGame);

function gameStart(){
    console.log("game starting...")
    nextBtn.style.display = "block";
    startBtn.style.display = "none";
    dialogue.innerHTML = "Hallo Ich bin Flätte!";
    image.src = "./PicsDatingFlätte/intro.png";
    sceneLocation = "Intro";
}

function onGame(){
    {
        

        console.log("requesting scene")
        fetch(`http://localhost:3000/callScene/${count}/${sceneLocation}/`)
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            image.src = data.image;
            optionA.style.display = data.optionAstyle;
            optionB.style.display = data.optionBstyle;
            dialogue.innerHTML = data.dialogue;
            optionA.innerHTML = data.optionA;
            optionB.innerHTML = data.optionB;
            

            pathA = data.pathA;
            pathB = data.pathB;
            pathC = data.pathC;

            if(data.requireChange == true)
            {
                choiceC();
            }
            if(data.endScene == true)
            {
                ending();
            }

            optionA.addEventListener('click', choiceA);
            optionB.addEventListener('click', choiceB);    
        })

        console.log(`Scene ${count}`);
        count++;
    }
}

function choiceA(){
    sceneLocation = pathA;
    count = 0;
    console.log(`chose ${optionA.innerHTML}`);
}
function choiceB(){
    sceneLocation = pathB;
    count = 0;
    console.log(`chose ${optionB.innerHTML}`);
}
function choiceC()
{
    sceneLocation = pathC;
    count = 0;
}
function ending()
{
    count = 0
    optionA.style.display = "none",
    optionB.style.display = "none",
    optionC.style.display = "none",
    nextBtn.style.display = "none"

    startBtn.style.display = "block";
    startBtn.innerHTML = "restart";
    
}