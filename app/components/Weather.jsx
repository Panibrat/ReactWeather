var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    handleSearch: function(location){
        var that = this;
        //debugger;
        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        },function(errorMessage){
            alert(errorMessage);
            that.setState({isLoading: false});
        });
    },
    render: function(){
        var {isLoading, temp, location} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>
            }else if(temp && location){
                return <WeatherMessage temp={temp} location={location}/>
            }
        }
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;

//http://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&APPID=ae1e26d3a511f5058a8fc9ff40ffe2ad
//http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=ae1e26d3a511f5058a8fc9ff40ffe2ad&q=Kyiv