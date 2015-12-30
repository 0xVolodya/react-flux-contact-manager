var Toolbar = React.createClass({
    render(){
        return (
            <div>
                <button className='btn btn-outline pull-right'
                    onClick={this.props}>Cancel</button>
                <button className='btn btn-outline pull-right'
                onClick={this.prop}>Save</button>
            </div>
        )
    }
});