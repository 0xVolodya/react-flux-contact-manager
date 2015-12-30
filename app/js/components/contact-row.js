var ContactRow = React.createClass({

    render(){
        console.log(this.props.contact);
        return (
            <li className="media">
                <img className="media-object"
                     src={ 'app/img/faces/' + this.props.contact.avatar}/>

                <div className="media-heading">
                    <h4>{this.props.contact.name}</h4>
                    <small>{this.props.contact.tel}</small>
                </div>
            </li>
        )
    }
})