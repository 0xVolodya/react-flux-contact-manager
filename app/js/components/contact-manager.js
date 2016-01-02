var ContactManager = React.createClass({

    getInitialState: function () {

        return this._getStateFromStor();
    },
    componentDidMount(){
        ContactStore.addChangeListener(this._onChange)
    },
    componentWillUnmount: function() {
        ContactStore.removeChangeListener(this._onChange);
    },

    _onChange(){
        this.setState(this._getStateFromStor());
        console.log(this.state.currentContact);
    },
    _getStateFromStor(){
        return {
            contacts: ContactStore.getContacts(),
            currentContact: ContactStore.getCurrentContact(),
            currentViewType: ContactStore.getCurrentViewType()
        }
    },
    render(){
        console.log(this.state);
        return (
            <div>
                <Header text={'Cool contact manager'}/>

                <div className='container'>
                    <div className='list-view-wrapper'>
                        <ContantList contacts={this.state.contacts}/>
                    </div>
                    <div className='detail-view-wrapper'>
                        <ContactDetailView
                            contact={this.state.currentContact}
                            viewType={this.state.currentViewType}/>
                    </div>
                </div>
            </div>
        )
    }
});
