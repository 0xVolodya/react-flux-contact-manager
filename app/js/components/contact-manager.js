var ContactManager = React.createClass({

    getInitialState: function () {

        return this._getStateFromStor();
    },
    _getStateFromStor(){
        return {
            contacts: ContactStore.getContacts(),
            currentContact:ContactStore.getCurrentContact(),
            currentViewType:ContactStore.getCurrentViewType()
        }
    },

    render(){
        return (
            <div>
                <Header text={'Cool contact manager'}/>

                <div className='container'>
                    <div className='list-view-wrapper'>
                        <ContantList contacts={this.state.contacts} />
                    </div>
                    <div className='detail-view-wrapper'>
                        <ContactDetailView
                            contact={this.state.currentState}
                            viewType={this.state.currentViewType}/>
                    </div>
                </div>
            </div>
        )
    }
});
