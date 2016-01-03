var ContantList=React.createClass({
    _getContactRow: function (contact, index) {
        return(
            <ContactRow key={index} contact={contact}/>
        );
    },
    render(){
       var c=this.props.contacts.map(this._getContactRow);

       return (
           <div>
               <AddContactButton />
            <ul className="media-list contacts-container">
                {c}
            </ul>
           </div>
       )
   }
});