var Header = React.createClass({
    render(){
        return (
            <nav className='navbar navbar-default'>
            <div className='navbar-header'>
                <a className='navbar-brand'>{this.props.text}</a>
            </div>
            </nav>
        )
    }
});