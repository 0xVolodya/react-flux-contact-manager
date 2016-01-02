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
        _currentViewType = VIEW_TYPES.LIST,
        _currentId;

    function _init(contacts) {
        _contacts = contacts.map(_createContactObject);
        _currentId = _contacts[0].id;
    }

    function getCurrentContact() {
        var c;

        _contacts.forEach(function (contact) {
            if (_currentId === contact.id) {
                c = contact;
            }
        });
        return c;
    }

    function getCurrentViewType() {
        return _currentViewType;
    }

    function _random(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));

    }

    function _createContactObject(contact) {
        return {
            id: contact.id,
            name: contact.name,
            tel: contact.tel,
            email: contact.email,
            avatar: _random(1, 10) + '.jpg'
        }
    }

    dispatchToken = Dispatcher.register(function (action) {
        var contact;
        console.log(action.type === actionTypes.DESTROY_CONTACT);
        switch (action.type) {
            case actionTypes.RECEIVE_INITIAL_PAYLOAD:
                _init(action.data);
                emitChange();
                break;
            case actionTypes.CLICK_DELETE:
                _currentViewType = VIEW_TYPES.LIST;
                emitChange();
                break;
            case actionTypes.DESTROY_CONTACT:
                _contacts.forEach(function (contact, index) {
                    console.log(action.id+ ' '+contact.id);

                    if (action.id === contact.id) {
                        console.log(_contacts.length);
                        _contacts.splice(index, 1);

                    }
                });
                console.log(_contacts[0].id);

                _currentId = _contacts[0].id;
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
        getCurrentContact: getCurrentContact,
        getCurrentViewType: getCurrentViewType

    }
}($, Dispatcher, ContactManagerConstants));