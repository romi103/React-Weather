var React = require('react');

var Message = ({temp, location}) => {

        return (
            <h2>Temp in {location} is {temp}</h2>
        );
} 

module.exports = Message;