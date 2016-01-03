var ActionCreators=(function (Dispatcher, ContactManagerConstants) {
    var ActionTypes=ContactManagerConstants.actionTypes;

    function clickCancel(){
        Dispatcher.dispatch({
            type:ActionTypes.CLICK_CANCEL
        })
    }
    function clickDelete(){
        Dispatcher.dispatch({
            type:ActionTypes.CLICK_DELETE
        })
    }
    function clickEdit(){
        Dispatcher.dispatch({
            type:ActionTypes.CLICK_EDIT
        })
    }
    function clickContact(id){
        Dispatcher.dispatch({
            type:ActionTypes.CLICK_CONTACT,
            id:id
        })
    }
    function clickSave(id){
        Dispatcher.dispatch({
            type:ActionTypes.CLICK_SAVE,
            id:id
        })
    }

    function createContact(id){
        Dispatcher.dispatch({
            type:ActionTypes.CREATE_CONTACT,
            id:id
        })
    }
    function clickCreate(id){
        Dispatcher.dispatch({
            type:ActionTypes.CLICK_CREATE,
            id:id
        })
    }




    function destroy(id){
        console.log('destroy');
        Dispatcher.dispatch({
            type:ActionTypes.DESTROY_CONTACT,
            id:id
        })
    }
    function update(id){
        console.log('destroy');
        Dispatcher.dispatch({
            type:ActionTypes.UPDATE_CONTACT,
            id:id
        })
    }
    function create(id){
        Dispatcher.dispatch({
            type:ActionTypes.CREATE_CONTACT,
            id:id
        })
    }

    return{
        clickCancel:clickCancel,
        clickDelete:clickDelete,
        clickEdit:clickEdit,
        clickContact:clickContact,
        clickSave:clickSave,
        createContact:createContact,
        clickCreate:clickCreate,


        update:update,
        create:create,
        destroy:destroy
    }
}(Dispatcher, ContactManagerConstants));