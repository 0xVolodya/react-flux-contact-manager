var LabelRow = React.createClass({
    render(){
        var input = <div className='form-control-static'>
            {this.props.labelValue}
        </div>;
        if(this.props.isEditable){
            input= <input type={this.props.inputType}
                className='form-control contact-name-input'
                value={this.props.labelValue}
                onChange={this.props.onChange} />
        }
        return (
            <div className='form-group'>
                <label className='col-sm-4 control-label'>
                    {this.props.labelName} :</label>

                <div className='col-sm-6'>{input}</div>
            </div>
        );
    }
});