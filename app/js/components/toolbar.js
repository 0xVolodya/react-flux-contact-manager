var Toolbar = React.createClass({
    render: function () {

        if (this.props.isEditable) {
            return (
                <div className='btn-toolbar'>
                    <button className='btn btn-outline pull-right'
                            onClick={this.props.onClick.bind(null,'cancel')}>
                        Cancel
                    </button>
                    <button className='btn btn-outline pull-right'
                        onClick={this.props.onClick.bind(null,'save')}>
                        Save
                    </button>
                </div>
            )
        } else {
            return (
                <div className='btn-toolbar'>
                    <button className='btn btn-outline pull-right'
                            onClick={this.props.onClick.bind(null,'back')}>
                        <span className='glyphicon glyphicon-arrow-left'></span>
                        Back
                    </button>
                    <button className='btn btn-outline pull-right'
                            onClick={this.props.onClick.bind(null,'delete')}>
                        <span className='glyphicon glyphicon-trash'></span>
                        Delete
                    </button>
                    <button className='btn btn-outline pull-right'
                            onClick={this.props.onClick.bind(null,'edit')}>
                        <span className='glyphicon glyphicon-pencil'></span>
                        Edit
                    </button>
                </div>
            )
        }
    }
});