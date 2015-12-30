var ContactPersistantActionCreators= (function (Dispatcher, ContactManagerConstants) {
    var actionTypes= ContactManagerConstants.actionTypes;

    function receiveInitialPayload(contacts){
        Dispatcher.dispatch({
            type:actionTypes.RECEIVE_INITIAL_PAYLOAD,
            data:contacts
        });
    }

    return {
        receiveInitialPayload:receiveInitialPayload
    }

}(Dispatcher, ContactManagerConstants));