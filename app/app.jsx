var React = require('react');
var ReactDOM = require('react-dom');


var objOne = {
    name: 'Roman',
    location: 'London'
}
var objTwo = {
    age: 28,
    ...objOne
}

console.log(objTwo);
ReactDOM.render(
    <h1>Boilerplate</h1>,
    document.getElementById("app")
    );
    