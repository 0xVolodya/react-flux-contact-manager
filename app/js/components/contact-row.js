var ContactRow = React.createClass({

    render(){
        return (
            <li className="media" onClick={this._onClick}>
                <img className="media-object"
                     src={ 'app/img/faces/' + this.props.contact.avatar}/>

                <div className="media-heading">
                    <h4>{this.props.contact.name}</h4>
                    <small>{this.props.contact.tel}</small>
                </div>
            </li>
        )
    },

    _onClick(){
        ActionCreators.clickContact(this.props.contact.id);
    }
});