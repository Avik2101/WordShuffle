({
    startGame:function(component,event,helper){
        //access the game mode combo
        let gameModeCombo = component.find("gameMode");
        // access value of combobox
        let gameModeSelected = gameModeCombo.get("v.value");
        //set the attribute value
        component.set("v.selectedMode",gameModeSelected);

        const boardComp = component.find("board");
        if(boardComp) boardComp.refreshBoard();

    }
});