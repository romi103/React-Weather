var React = require('react');

var Message = ({temp, location}) => {

        return (
            <h3 className="text-center">Temp in {location} is {temp}</h3>
        );
} 

module.exports = Message;