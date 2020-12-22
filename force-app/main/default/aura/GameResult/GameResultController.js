({
    doInit: function (component, event, helper) {
        component.set('v.columns', [
            { label: 'Status', fieldName: 'Name', type: 'text'},
            {label: 'Mode', fieldName: 'GameMode__c', type: 'text'},
            {label: 'Play Date', fieldName: 'CreatedDate', type: 'date',typeAttributes: {day: 'numeric',                                                                                                                                        month: 'short', year: 'numeric',hour: '2-digit',minute:                                                                                                '2-digit',second: '2-digit', hour12: true}},
                                    ]);
        helper.fetchResults(component);

    },
    updateResultsHandler:function(component,event,helper){
        var message = event.getParam('result');
        helper.fetchResults(component);
    }

});