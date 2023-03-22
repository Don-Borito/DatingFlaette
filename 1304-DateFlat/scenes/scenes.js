module.exports = {
    
    async getScene(req, res){ 
        for(let i = 0; i < sceneList.scene.length; i++)
        {
            if(req.params.location == sceneList.scene[i].scene && req.params.count == sceneList.scene[i].number)
            {
                res.send(sceneList.scene[i]);
            }
            else
            {
                console.log("scene not found")
            }
        }     
    },
    async getAll(req, res){
        res.send(sceneList)
    }
}

const sceneList = {
    scene:[
        // -------------------------- Intro --------------------------------------------------- 
        {
            scene: "Intro",
            number: 0,
            dialogue: "Gehen wir in die Bar oder ins Restaurant?",
            optionA: "Restaurant",
            pathA: "Restaurant",
            optionAstyle: "block",
            optionB: "Bar",
            pathB: "Bar",
            optionBstyle: "block",
            image: "./PicsDatingFlätte/intro_0.png",
        },
        // ---------------------------- Bar -----------------------------------------------------
        {
            scene: "Bar",
            number: 0,
            dialogue: "Trinken wir ein bisschen? *Sie trinken beide*",
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/trinkenimcasino.png",
        },
        {
            scene: "Bar",
            number: 1,
            dialogue: "Spielen wir Poker? *Sie spielen eine Runde",
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/1spiel.png",
        },
        {
            scene: "Bar",
            number: 2,
            dialogue: "Gewonnen!!!",
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/Sieger.png",
        },
        {
            scene: "Bar",
            number: 3,
            dialogue: "Wollen wir noch einmal spielen?",
            optionAstyle: "block",
            optionA: "Ja",
            pathA: "Mafia",
            optionBstyle: "block",
            optionB: "Nein",
            pathB: "Cardealer",
            image: "./PicsDatingFlätte/nochmalsspieln.jpg",
        },
        // ------------------------- Car Dealer ------------------------------------------------------
        {
            scene: "Cardealer",
            number: 0,
            dialogue: "Bugatti für dich oder Mercedes Benz für Flätte kaufen?",
            optionA: "Benz",
            pathA: "Benz",
            optionAstyle: "block",
            optionB: "Bugatti",
            pathB: "Bugatti",
            optionBstyle: "block",
            image: "./PicsDatingFlätte/autoladen.png"
        },
        // ------------------------- Benz ---------------------------------------------------------
        {
            scene: "Benz",
            number: 0,
            dialogue: "Flätte ist glücklich | Benz als geschenk gegeben. Der Benz wird jedoch erst in 3 Tagen geliefert.",
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/geschenk.jpg"
        },
        {
            scene: "Benz",  
            number: 1,
            dialogue: "Deshalb nehmen sie das Taxi.",
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/Taxi.png",

            requireChange: true,
            pathC: "flathouse",
        },
        // ------------------------- Buggati ---------------------------------------------------------
        {
            scene: "Bugatti",
            number: 0,
            dialogue: "Willst du fahren oder lässt du Flätte fahren?",
            optionA: "Flätte fahren",
            pathA: "flathouse",
            optionAstyle: "block",
            optionB: "Du fahren",
            pathB: "dufahren",
            optionBstyle: "block",
            image: "./PicsDatingFlätte/darfcihautofahren.png"
        },
        // ------------------------- Car crash -------------------------------------------------------
        {
            scene: "dufahren",
            number: 0,
            dialogue: "Car-Crash!!!",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/carcrash.jpg"
        },
        {
            scene: "dufahren",
            number: 1,
            dialogue: "Ihr seid beide tot.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/carcrash.jpg",
            endScene: true,
        },
        // ------------------------- Restaurant ------------------------------------------------------
        {
            scene: "Restaurant",
            number: 0,
            dialogue: "Du siehst Herr Andreas im Restaurant. Er ist verliebt in dich.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/vonfinnendtdeckt.jpg"
        },
        {
            scene: "Restaurant",
            number: 1,
            dialogue: "Willst du hier wirklich essen?",
            optionA: "Ja",
            pathA: "Herrneiger",
            optionAstyle: "block",
            optionB: "Nein",
            pathB: "Spazieren",
            optionBstyle: "block",
            image: "./PicsDatingFlätte/beichten.jpg"
        },
        //------------------------- Koch Herr Neiger -----------------------------------------------------
        {
            scene: "Herrneiger",
            number: 0,
            dialogue: "Du isst mit Flätte im Restaurant.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/essen.png",
        },
        {
            scene: "Herrneiger",
            number: 1,
            dialogue: "Du siehst, dass Herr Andreas wütend ist, wiel du mit einem anderen Jungen isst.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/andreaswütend.jpg",
        },
        {
            scene: "Herrneiger",
            number: 2,
            dialogue: "Herr Andreas nimmt ein Küchenmesser und versucht Flätte zu töten.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/andreassticht.png",
        },
        {
            scene: "Herrneiger",
            number: 3,
            dialogue: "Er hat es leider geschafft, Flätte zu töten. Flätte ist jetzt tot. RIP!!!",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/flättetot.png",
            endScene: true,
        },
        //------------------------- Mafia Valendinho Belluskio -------------------------------------------
        {
            scene: "Mafia",
            number: 0,
            dialogue: "Der Mafioso Berlusconi kommt und spielt auch mit.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/mafiosowillspielen.jpg",
        },
        {
            scene: "Mafia",
            number: 1,
            dialogue: "Der Mafioso spielt eine Runde mit.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/spielmitmafioso.png",
        },
        {
            scene: "Mafia",
            number: 2,
            dialogue: "Der Mafioso verliert und hat kein Geld mehr dabei.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/mafiaverliert.png",
        },
        {
            scene: "Mafia",
            number: 3,
            dialogue: "Der Mafioso bringt den Spieler um, so dass Flätte mit einem gebrochenen Herz leidet.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/mafiatot.png",
            endScene: true,
        },
        // ------------------------------ Spazieren ---------------------------------------------------------
        {
            scene: "Spazieren",
            number: 0,
            dialogue: "Sie gehen spazieren.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/spatzieren.jpg",
        },
        {
            scene: "Spazieren",
            number: 1,
            dialogue: "Du siehst eine Bar und ein Club. Wo willst du jetzt mit Flätte gehen?",
            optionA: "Bar",
            pathA: "Bar",
            optionAstyle: "block",
            optionB: "Club",
            pathB: "Club",
            optionBstyle: "block",
            image: "./PicsDatingFlätte/club.png",
        },
        // ------------------------------------ Club ----------------------------------------------------
        {
            scene: "Club",
            number: 0,
            dialogue: "Ihr seid jetzt im Club, willst du mit Flätte tanzen oder zu ihm nach Hause und dort trinken?",
            optionA: "Mit Flätte tanzen",
            pathA: "Tanzen",
            optionAstyle: "block",
            optionB: "Mit Flätte trinken",
            pathB: "Trinken",
            optionBstyle: "block",
            image: "./PicsDatingFlätte/trinkenodertanzen.png",
        },
        // -------------------------------- Tanzen ----------------------------------------------------
        {
            scene: "Tanzen",
            number: 0,
            dialogue: "Du tanzt mit Flätte.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/Flattanz2.png",
        },
        {
            scene: "Tanzen",
            number: 1,
            dialogue: "Du siehst, dass Flätte glücklich ist.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/flatglucklich.png",

            requireChange: true,
            pathC: "flathouse",
        },
        // ------------------------------- Trinken ------------------------------------------------------
        {
            scene: "Trinken",
            number: 0,
            dialogue: "Du Trinkst jetzt mit Flätte im Garten",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/flättetrinkt.png",
        },
        {
            scene: "Trinken",
            number: 1,
            dialogue: "Du hast zu viel Alk getrunken",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/drinkingflätte.png",
        },
        {
            scene: "Trinken",
            number: 2,
            dialogue: "Du hast gesagt, dass die Mutter von Flätte hotter als er ist.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/flättebeleidigt.jpg",
        },
        {
            scene: "Trinken",
            number: 3,
            dialogue: "Er schickt dich weg weil du ihn beleidigt hast.",     
            optionAstyle: "none",
            optionBstyle: "none",
            endScene: true,
            image: "./PicsDatingFlätte/korb.jpg",
        },
        //---------------------------- Flätte House ---------------------------------------------------
        {
            scene: "flathouse",
            number: 0,
            dialogue: "Das ist Flättes Haus.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/flätteshouse.jpg",
        },
        {
            scene: "flathouse",
            number: 1,
            dialogue: "Willst du Im Garten trinken oder ein Netflix Film schauen?",
            optionA: "Trinken",
            pathA: "Trinken",
            optionAstyle: "block",
            optionB: "Netflix",
            pathB: "Netflix",
            optionBstyle: "block",
            image: "./PicsDatingFlätte/netflixodergarten.jpg",
        },
        //------------------------------- Netflix --------------------------------------------------------
        {
            scene: "Netflix",
            number: 0,
            dialogue: "Ihr schaut Netflix.",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/netflix.jpg",
        },
        {
            scene: "Netflix",
            number: 1,
            dialogue: "*Ein Hotter Film von Netflix vorgeschlagen*",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/netflix.jpg",
        },
        {
            scene: "Netflix",
            number: 2,
            dialogue: "*Schlafzimmer yk ...*",     
            optionAstyle: "none",
            optionBstyle: "none",
            image: "./PicsDatingFlätte/bedroom.jpg",
            endScene: true,
        },
        
    ]
}