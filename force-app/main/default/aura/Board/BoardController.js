({
    doInit: function (component, event, helper) {
        //get the game mode
        const gameMode = component.get("v.mode");
        helper.generateGrid(component, gameMode);
    },
    refreshBoard: function (component, event, helper) {
        //get the game mode
        const gameMode = component.get("v.mode");
        component.set("v.clickCount", 0);
        helper.generateGrid(component, gameMode);
        component.set("v.result", "");
        component.set("v.isDisabled", false);
    },
    blockClickHandler: function (component, event, helper) {
        //get the event value
        const value = event.getParam("value");
        const gameMode = component.get("v.mode");
        const selectedWord = component.get("v.randomWord");
        let clickCount = component.get("v.clickCount");
        console.log("clickCount " + clickCount);
        component.set("v.clickCount", clickCount + 1);
        let gameStatus = "win";
        if (value === selectedWord) {
            //user has won
            component.set("v.isDisabled", true);
            helper.showToast("success", "You Win", "Keep up the good work!");
            helper.saveResult(component, gameStatus, gameMode);
            helper.refreshResult(gameStatus);
            return;
        }
        if (clickCount === 2) {
            //user lose
            gameStatus = "lose";
            component.set("v.isDisabled", true);
            helper.showToast("error", "You Lose", "Play Again!");
            helper.saveResult(component, gameStatus, gameMode);
            helper.refreshResult(gameStatus);
        }
    }
});
