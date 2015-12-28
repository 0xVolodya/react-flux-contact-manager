///**
// * Created by vladimir on 28.12.15.
// */
//var ContactManager=React.createClass({
//
//
//    render: function() {
//        return (
//            <div>AAAA</div>
//        )
//    }
//});
//
//ReactDOM.render(<ContactManager/>, document.body );

var HelloWorld = React.createClass({
    render: function() {
        return (
            <p>
                Hello, <input type="text" placeholder="Your name here" />!
                It is {this.props.date.toTimeString()}
            </p>
        );
    }
});

setInterval(function() {
    ReactDOM.render(
        <HelloWorld date={new Date()} />,
        document.getElementById('app')
    );
}, 500);