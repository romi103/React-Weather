var React = require('react');
var Form = require('Form');
var Message = require('Message');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

    getInitialState: function () {
        return {
            isLoading: false,
            errorMessage: undefined
         };

    },


    handleSearch: function(location) {
        var that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false,
            });
        }, function(e){
            that.setState({ 
                isLoading: false,
                errorMessage: e.message
             });
            // alert(errorMessage);
            
        });


    },

    render: function() {

        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching data...</h3>;
            } else if (temp && location) {
                return <Message temp={temp} location={location} />;
            }
        }

        function renderError () {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <Form onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;