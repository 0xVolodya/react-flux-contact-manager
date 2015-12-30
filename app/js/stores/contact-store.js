var ContactStore = (function ($, Dispatcher, ContactManagerConstants) {
    var dispatchToken,
        _contacts = [],
        actionTypes = ContactManagerConstants.actionTypes,
        eventEmitter = $({}),
        CHANGE_EVENT = 'WOW';

    var VIEW_TYPES = {
        LIST: 'list',
        CREATE: 'create',
        VIEW: 'view',
        EDIT: 'edit'
    };

    var _contacts = [],
        _currentViewType=VIEW_TYPES.LIST,
        _currentId;

    function _init(contacts) {
        _contacts = contacts.map(_createContactObject);
        _currentId = _contacts[0].id;
    }

    function getCurrentContact() {
        var c;

        _contacts.forEach(function (contact) {
            if(_currentId===contact.id){
                c=contact;
            }
        });
        return c;
    }
    function getCurrentViewType(){
        return _currentViewType;
    }

    function _createContactObject(contact) {
        return {
            id: contact.id,
            name: contact.name,
            tel: contact.tel,
            email: contact.email,
            avatar: '1.jpg'
        }
    }

    dispatchToken = Dispatcher.register(function (action) {
        var contact;
        console.log(action);
        switch (action.type) {
            case actionTypes.RECEIVE_INITIAL_PAYLOAD:
                _init(action.data);
                emitChange();
                break;
        }
    });
    function emitChange() {
        eventEmitter.trigger(CHANGE_EVENT);
    }

    function addChangeListener(handler) {
        eventEmitter.on(CHANGE_EVENT, handler);
    }

    function removeChangeListener(handler) {
        eventEmitter.off(CHANGE_EVENT, handler);
    }

    function getContacts() {
        return _contacts;
    }

    return {
        addChangeListener: addChangeListener,
        removeChangeListener: removeChangeListener,
        emitChange: emitChange,
        getContacts: getContacts,
        dispatchToken: dispatchToken,
        getCurrentContact:getCurrentContact,
        getCurrentViewType:getCurrentViewType

    }
}($, Dispatcher, ContactManagerConstants));