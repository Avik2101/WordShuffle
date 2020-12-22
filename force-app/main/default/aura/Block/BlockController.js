({
    onInit: function (component, event, helper) {
        component.set("v.isOpen", false);
    },
    leaveBlock: function (component, event, helper) {
        component.set("v.isOpen", false);
    },
    blockClicked: function (component, event, helper) {
        component.set("v.isOpen", true);
        let wordLabel = component.get("v.wordLabel");
        let compEvent = component.getEvent("onClick");
        compEvent.setParams({ value: wordLabel });
        compEvent.fire();
    }
});
