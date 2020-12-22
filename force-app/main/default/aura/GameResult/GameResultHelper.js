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
    fetchResults:function(component,gameResult){
         switch(gameResult){
              case "win":
                 this.showToast('success','You Win','Keep up the good work!');
              break;
              case "lose":
                 this.showToast('error','You Lose','Play Again!');
              break;
          }
         let action = component.get("c.getGameResults");
                action.setCallback(this, function(response) {
                    var state = response.getState();
                    if (state === "SUCCESS") {
                        component.set('v.data',response.getReturnValue());
                        console.log("From server: " + response.getReturnValue());
                    }
                    else if (state === "ERROR") {
                        var errors = response.getError();
                        console.log("Error message: " + errors[0].message);
                    }
                 });
         $A.enqueueAction(action);

    }
});