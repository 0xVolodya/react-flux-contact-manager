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


    function destroy(id){
        console.log('destroy');
        Dispatcher.dispatch({
            type:ActionTypes.DESTROY_CONTACT,
            id:id
        })
    }
    return{
        clickCancel:clickCancel,
        clickDelete:clickDelete,


        destroy:destroy
    }
}(Dispatcher, ContactManagerConstants));