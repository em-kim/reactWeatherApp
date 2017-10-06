import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'; 
import "./IconWidget.css";
var FontAwesome = require('react-fontawesome');
// This exercise is getting building a component different from the weather table
// that will utilize the api data. Based on weather description found in the 
// api response, render the following icons:
//  http://fontawesome.io/icon/umbrella/
//  http://fontawesome.io/icon/cloud/
//  http://fontawesome.io/icon/sun-o/
// Try to support some of these descriptions: https://openweathermap.org/weather-conditions
// Don't feel like you have to support them all, just a few, some that reflect the icons.
// Display them next to weather description, and put them inside a react-strap card.
// In the title of the card, display the city. 
// We're going to have this rendered beneath the table.

// tips:
//  First, lets get the react-strap card working. Go to https://reactstrap.github.io/components/card/,
//  copy and paste their example into your render() method.Put some 
//  sample data inside and mess around with it to get a feel how it works. 
//  Next, get the proper props passed in, the weather data through the weather API.
//  Next, let's get font awesome working - I've imported the library "react-fontawesome"
//  Go to the readme located at https://github.com/danawoodman/react-fontawesome
//  to see some ways in which it is used. 
//  Here's an example of how I used the card and the fontawesome libs:
//  <Card>
//    <CardBody>
//     <CardTitle>{title}</CardTitle>
//       <CardSubtitle>Clear sky</CardSubtitle>
//       <FontAwesome
//         className ="{font awesome classes}"
//         name="{name}"
//         size="2x"
//        />
//      </CardBody>
//    </Card>   
// So now get it working to render the proper font-awesome icon! There's many
// ways to do this. 
// Here's a screenshot of what mine looks like. (It's stand alone, no table in it yet)

class WeatherComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      initialized: false
    };
  }

  componentDidMount() {
    var jeanineapi = 'e6ea27b1c535e375f2f3ab9cfeab7df6';
    var markapi = '3d6b633422451393e953dab4052ea0e4';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=Bozeman&appid=' + jeanineapi;
    fetch(url).then(function (response) {
      return response.json();
    }).then((weatherObj) => {
      console.log(weatherObj)
      this.weatherData = weatherObj;
      this.setState({
        initialized: true
      });
    });
  }

  render() {
    if (this.state.initialized) {
      return (
        <div>
          <h1>{this.weatherData.name}</h1>
          <IconWidget weatherData={this.weatherData} />
        </div>
      );
    } else {
      return (
        <h2>
          Loading...
        </h2>
      );
    }
  }
}
class IconWidget extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle><ConvertToF tempK={this.props.weatherData.main.temp} /></CardTitle>
            <CardSubtitle>{this.props.weatherData.weather[0].description}</CardSubtitle>
            <WeatherIcon desc={this.props.weatherData.weather[0].description}/>
            <CardText>Humidity: {this.props.weatherData.main.humidity}%<br />Pressure: {this.props.weatherData.main.pressure} in.</CardText>
          </CardBody>
        </Card>
      </div>


    );
  }
}

class WeatherTable extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <WeatherTBody weatherData={this.props.weatherData} />

      </table>
    );
  }
}
class WeatherTBody extends Component {
  render() {
    return (

      <tbody>
        <tr>
          <td>
            <ConvertToF tempK={this.props.weatherData.main.temp} />
          </td>
          <td>
            {this.props.weatherData.main.pressure} in.
          </td>
          <td>
            {this.props.weatherData.main.humidity}%
          </td>
        </tr>
      </tbody>
    );
  }
}
class ConvertToF extends Component {
  constructor() {
    super();
  }
  render() {
    var tempK = this.props.tempK;
    var farTemp = Math.round(tempK * 9 / 5 - 459.67);
    return (
      <div>{farTemp}&deg;F</div>
    );
  }
}
class WeatherIcon extends Component {
  constructor() {
    super();
    this.raintypes = ["thunderstorm with light rain","thunderstorm with rain","thunderstorm with heavy rain","light thunderstorm","thunderstorm","heavy thunderstorm","ragged thunderstorm","thunderstorm with light drizzle","thunderstorm with drizzle","thunderstorm with heavy drizzle","light intensity drizzle","drizzle","heavy intensity drizzle","light intensity drizzle rain","drizzle rain","heavy intensity drizzle rain","shower rain and drizzle","heavy shower rain and drizzle","shower drizzle","light rain","moderate rain","heavy intensity rain","very heavy rain","extreme rain","freezing rain","light intensity shower rain","shower rain","heavy intensity shower rain","ragged shower rain","light snow","snow","heavy snow","sleet","shower sleet","light rain and snow","rain and snow","light shower snow","shower snow","heavy shower snow","mist","smoke","haze","sand, dust whirls","fog","sand","dust","volcanic ash","squalls","tornado"];
    this.suntypes =["clear sky","calm","light breeze","gentle breeze","moderate breeze","fresh breeze"];
    this.cloudtypes=["few clouds","scattered clouds","broken clouds","overcast clouds","tornado","tropical storm","hurricane","cold","hot","windy","hail",,"strong breeze","high wind, near gale","gale","severe gale","storm","violent storm","hurricane"];

  }
  render() {
    var icon = "sun-o";
    var spin = '';
    if (this.raintypes.indexOf(this.props.desc) !== -1) {
      icon = 'umbrella';
    } if (this.cloudtypes.indexOf(this.props.desc) !== -1) {
      icon = 'cloud';
    } else {
      spin = 'spin';
    }
    return (
      <FontAwesome
        className='super-crazy-colors'
        name={icon}
        size='4x' spin={spin} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />

    );
  }

}
export default WeatherComponent;