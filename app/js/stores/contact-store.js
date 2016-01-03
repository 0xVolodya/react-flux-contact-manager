var ContactStore = (function ($, Dispatcher, ContactManagerConstants) {
    var dispatchToken,
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
            id: contact.id || Date.now(),
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
                    console.log(action.id + ' ' + contact.id);

                    if (action.id === contact.id) {
                        console.log(_contacts.length);
                        _contacts.splice(index, 1);

                    }
                });
                console.log(_contacts[0].id);

                _currentId = _contacts[0].id;
                emitChange();
                break;
            case actionTypes.CLICK_EDIT:
                _currentViewType = VIEW_TYPES.EDIT;
                emitChange();
                break;
            case actionTypes.CLICK_CANCEL:
                if (_currentViewType === VIEW_TYPES.CREATE) {
                    _currentViewType = VIEW_TYPES.LIST
                } else {

                    _currentViewType = VIEW_TYPES.VIEW;
                }
                emitChange();
                break;
            case actionTypes.CLICK_CONTACT:
                _currentId = action.id;
                _currentViewType = VIEW_TYPES.VIEW;
                emitChange();
                break;
            case actionTypes.CLICK_SAVE:
                _currentViewType = VIEW_TYPES.VIEW;
                emitChange();
                break;
            case actionTypes.CLICK_CREATE:
                _currentViewType = VIEW_TYPES.CREATE;
                emitChange();
                break;

            case actionTypes.CREATE_CONTACT:
                contact = _createContactObject(action.id);
                _contacts.push(contact);
                _currentId = contact.id;
                emitChange();
                break;
            case actionTypes.UPDATE_CONTACT:
                _contacts.forEach(function (contact, index) {
                    if (contact.id === action.id.id) {
                        contact.name = action.id.name;
                        contact.email = action.id.email;
                        contact.tel = action.id.tel;
                    }
                });
                emitChange();
                break;


        }
    });
    function emitChange() {
        eventEmitter.trigger(CHANGE_EVENT);
        console.log(eventEmitter);
    }

    function addChangeListener(handler) {
        eventEmitter.on(CHANGE_EVENT, handler);
    }

    function getContacts() {
        return _contacts;
    }

    function removeChangeListener(handler) {
        eventEmitter.off(CHANGE_EVENT, handler);
    }

    return {
        addChangeListener: addChangeListener,
        emitChange: emitChange,
        getContacts: getContacts,
        dispatchToken: dispatchToken,
        getCurrentContact: getCurrentContact,
        getCurrentViewType: getCurrentViewType,
        removeChangeListener: removeChangeListener

    }
}($, Dispatcher, ContactManagerConstants));