var Toolbar = React.createClass({
    render: function () {

        return (
            <div>
                <button className='btn btn-outline pull-right'
                    onClick={this.props.onClick.bind(null,'destroy')}>Destroy</button>
                <button className='btn btn-outline pull-right'
                onClick={this.props.onClick.bind(null,'save')}>Save</button>
            </div>
        )
    }
});