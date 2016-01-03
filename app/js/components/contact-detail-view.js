var ContactDetailView = React.createClass({

    getInitialState: function () {
        return this._getStateFromProps(this.props)
    },
    _getStateFromProps: function (props) {

        return {
            'id': props.contact.id || '',
            'name': props.contact.name || '',
            'email': props.contact.email || '',
            'tel': props.contact.tel||''
        }
    },
    componentWillReceiveProps: function (nextProps) {

        var props = nextProps;
        console.log(nextProps.viewType==='create'+ '11111111111');
        if(nextProps.viewType==='create'){
            props={
                contact:{}
            }
        }

        this.setState(this._getStateFromProps(props));

    },
    render(){
        //setState(this.this._getStateFromProps(props))
        var isEditable = false;
        if (this.props.viewType === 'edit' ||
            this.props.viewType === 'create') {
            isEditable = true;
        }

        return (
            <div>
                <Toolbar isEditable={isEditable}
                         onClick={this._handleClick}/>

                <form role='form'
                      className='form-horizontal contract-form'>
                    <LabelRow isEditable={isEditable}
                              inputType='text'
                              labelName='name'
                              labelValue={this.state.name}
                              onChange={this._handleChange}/>
                    <LabelRow isEditable={isEditable}
                              inputType='email'
                              labelName='email'
                              labelValue={this.state.email}
                              onChange={this._handleChange}/>
                    <LabelRow isEditable={isEditable}
                              inputType='tel'
                              labelName='tel'
                              labelValue={this.state.tel}
                              onChange={this._handleChange}/>

                </form>
            </div>
        )
    },
    _handleChange(event){
        var type = event.target.getAttribute('type'),
            value = event.target.value;

        switch (type) {
            case'text':
                this.setState({
                    name: value
                });
                break;
            case 'email':
                this.setState({
                    email: value
                });
                break;
            case 'tel':
                this.setState({
                    tel: value
                });
                break;
        }

    },

    _handleClick(action){
        switch (action) {
            case 'cancel':
                ActionCreators.clickCancel();
                break;
            case 'delete':
                ActionCreators.destroy(this.state.id);
                ActionCreators.clickDelete(this.state.id);
                break;
            case 'edit':
                ActionCreators.clickEdit();
                break;
            case 'save':
                if (this.props.viewType === 'create') {
                    ActionCreators.create({
                        name:this.state.name,
                        tel: this.state.tel,
                        email: this.state.email
                    })
                } else {
                    ActionCreators.update({
                        id: this.state.id,
                        name: this.state.name,
                        tel: this.state.tel,
                        email: this.state.email

                    });
                }
                ActionCreators.clickSave();
                break;

        }
    }
});