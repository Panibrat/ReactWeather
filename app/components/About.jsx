var React = require('react');

/*
var About = React.createClass({
    render: function(){
        return (
            <h3>About Component</h3>
        );
    }
});
*/
var About =  (props) => {
        return (
            <h3>About</h3>
            <p>Welcome to about page</p>
        );
};
/*var About =  (props) =>  (<h3>About Component!</h3>);*/

module.exports = About;