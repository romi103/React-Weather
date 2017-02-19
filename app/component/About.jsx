var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className='text-center'>About</h1>
            <h3>GitHub</h3>
            <p>Want to contribute. <a href="https://github.com/romi103/React-Weather">Please see the GitHub page  of this project.</a></p>

            <h3>API</h3>
            <p>The API used on the iste comes from <a href="https://openweathermap.org/">openweathermap.org</a></p>
        </div>
    );
}

module.exports = About;