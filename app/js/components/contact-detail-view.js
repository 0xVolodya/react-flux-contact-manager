var ContactDetailView = React.createClass({

    getInitialState: function () {
        return this._getStateFromProps(this.props)
    },
    _getStateFromProps: function () {

        return {
            'id': this.props.contact.id || '',
            'name': this.props.contact.name || '',
            'email': this.props.contact.email || '',
            'tel': this.props.contact.tel
        }
    },
    componentWillReceiveProps: function (nextProps) {
        console.log('componentWillReceiveProps');
        var props=nextProps;

        this.setState(this._getStateFromProps(props));
        console.log(props);
        console.log('props');
    },
    render(){
        //setState(this.this._getStateFromProps(props))
        var isEditable = false;
        if (this.props.viewType === 'create' ||
            this.props.viewType === 'edit') {
            isEditable = true;
        }
        return (
            <div>
                <Toolbar isEditable={isEditable}
                         onClick={this._handleClick}/>
            </div>
        )
    },
    _handleClick(action){
        switch (action) {
            case 'cancel':
                ActionCreators.clickCancel();
                break;
            case 'destroy':
                ActionCreators.destroy(this.state.id);
                ActionCreators.clickDelete(this.state.id);
                break;

        }
    }
});