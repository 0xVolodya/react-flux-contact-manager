/**
 * Created by vladimir on 28.12.15.
 */
var ContactManager=React.createClass({

    getInitialState: function () {

        return {message:"blabla"};
    },

    render: function() {
        return (
            <h1>{this.state.message+afdsafds}</h1>
        )
    }
});
window.ContactManager = ContactManager;