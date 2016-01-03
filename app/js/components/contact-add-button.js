var AddContactButton=React.createClass({
    render(){
        return(
            <p className='text-center'>
                <button className='btn btn-outline btn-block'
                    onClick={this._onClick}>
                Add contact
                </button>
            </p>
        )
    },
    _onClick(){
      ActionCreators.clickCreate();
    }
});