({
    showToast : function(type,title,message) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "type":type,
            "title":title,
            "message": message
        });
        toastEvent.fire();
    },
    refreshResult:function(gameResult){

        const appEventAction = $A.get('e.c:ResultApplicationEvent');
        appEventAction.setParams({result:gameResult});
        appEventAction.fire();
    },
    saveResult:function(component,gameStatus,gameMode){
        let action = component.get("c.saveGameResult");
        action.setParams({ gameStatus :gameStatus,gameMode:gameMode });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("From server: " + response.getReturnValue());
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                console.log("Error message: " + errors[0].message);
            }
         });
         $A.enqueueAction(action);

    },
    getRandomWord:function(arr){
        return arr[Math.floor(Math.random() * arr.length)];
    },
    randomizeArray:function(arr){
        const randomArr = arr;
        // Randomize the array
        for (let i = randomArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = randomArr[i];
            randomArr[i] = randomArr[j];
            randomArr[j] = temp;
        }
        return randomArr;
    },
    generateGrid:function(component,gameMode){

        let randomWordCount = 0;
        let column = 0;
        if(gameMode && gameMode === "hard"){
            column = 6;
        }else if(gameMode === "medium"){
            column = 4;
        }
        else {
            column = 2;
        }
        //get list of words based on the game mode
        let wordSelected = this.getWords(column*column);
        //get random word from the initial list
        let randomWord = this.getRandomWord(wordSelected);
        //set the random word in the aura attribute
        component.set("v.randomWord",randomWord);
        component.set('v.words',wordSelected);
        component.set('v.padSize',12/column);
    },
    getWords:function(count){

        if(count> 100) return;

        let arrayWords = ["expansion",
                          "grandfather",
                          "nappy",
                          "oranges",
                          "beds",
                          "quack",
                          "achiever",
                          "yell",
                          "hospital",
                          "winter",
                          "understood",
                          "squalid",
                          "merciful",
                          "reaction",
                          "wipe",
                          "fearless",
                          "tiresome",
                          "introduce",
                          "planes",
                          "drum",
                          "muddle",
                          "capable",
                          "canvas",
                          "route",
                          "enchanted",
                          "quirky",
                          "switch",
                          "apparatus",
                          "loss",
                          "agreement",
                          "substance",
                          "back",
                          "oafish",
                          "expand",
                          "aromatic",
                          "quarrelsome",
                          "free",
                          "useful",
                          "raspy",
                          "drown",
                          "ring",
                          "lush",
                          "numberless",
                          "embarrass",
                          "shrill",
                          "rice",
                          "ice",
                          "crow",
                          "pumped",
                          "sparkle",
                          "instruct",
                          "girl",
                          "glass",
                          "frog",
                          "murky",
                          "impolite",
                          "crabby",
                          "pin",
                          "grade",
                          "upbeat",
                          "linen",
                          "flaky",
                          "side",
                          "unknown",
                          "cactus",
                          "round",
                          "busy",
                          "grab",
                          "crush",
                          "faithful",
                          "mother",
                          "clean",
                          "unhealthy",
                          "event",
                          "absent",
                          "thoughtless",
                          "icy",
                          "prefer",
                          "charge",
                          "confuse",
                          "clam",
                          "dress",
                          "snake",
                          "evasive",
                          "unit",
                          "flow",
                          "annoying",
                          "gusty",
                          "possessive",
                          "rhetorical",
                          "rule",
                          "frantic",
                          "farm",
                          "poor",
                          "possess",
                          "men",
                          "pleasant",
                          "zoom",
                          "sidewalk",
                          "reply"];

        let randomWordArray = this.randomizeArray(arrayWords);
        return randomWordArray.slice(0,count);
    }
});