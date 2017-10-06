import React, { Component } from 'react';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import WeatherComponent from '../iconWidget/IconWidget.js';
var FontAwesome = require('react-fontawesome');

<<<<<<< HEAD
//So hopefully we have a bunch of components and our 'state' is being managed in only
//one of them (the 'top' most, the one making the api call). Now lets build a 
//new component that has an <input> and <button> that can be clicked. Use
//react-strap for the button and input. Now go to the 'top' most component and wrap your
//logic fetching all the weather api data into a method. Pass that method down
//into this new component and call it when the user clicks on the button. 

//Before the function calls the api, you'll
//need to generate a new url string where you inject the city name into
//the url string (look "bozeman" is, the "url" var in Weather.js)
//Use react "state" in this function to automatically update the table and iconWidget
//to reflect the changes. 

//the user will type a city name into the <input> and when
//the user clicks the button, you'll generate a new url using their input.
//call the api and render the table and iconWidget. Hopefully, you won't have to
//update anything on either component. 
 
//render the search bar above the table and icon widget

//tips: you'll need to use react-strap, so import the react-strap components you want to grab
// we're not doing in validation, so the user can input the incorrect value. 
// if you have time, make a new react state that accounts for this. The table and
// icon could be omitted from the page and instead it says "you did not input a real city"

//You've pretty much built a react app!!!!
=======
// So hopefully we have a bunch of components and our 'state' is being managed in only
// one of them (the 'top' most, the one making the api call). Now lets build a 
// new component that has an <input> and <button> that can be clicked. Use
// react strap for the button and input. Now go to the 'top' most component and wrap your
// logic fetching all the weather api data into a method. Pass that method down
// into this new component and call it when the user clicks on the button. 

// This function will construct a new url string where you inject the city into
// the proper place (where bozeman is, look at the url var in Weather.js)
// Use state in this function to automatically update the table and iconWidget
// to reflect the changes. 

// You've pretty much a react app!!!!

class SearchBar extends Component {
  constructor () {
    super();
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
>>>>>>> 7bc122f52d9939896f99200b08a06203d3f6b858

  handleChange (event) {
    console.log('handle change called');
   this.setState({value: event.target.value});
  }

  handleClick() {
   // console.log('helloooooo')
   // console.log(this.state.value)
   if (this.state.value !== '') {
    this.props.updateClick(this.state.value);
   }
  }


  render () {
    //console.log(this.props);
    return (
      <div className="cityform">
        <InputGroup>
          <Input placeholder='City Name' value={this.state.value} onChange={this.handleChange} />
        </InputGroup>
        <Button onClick={this.handleClick} color='primary'>Update</Button>
      </div>
    );
  }
}

export default SearchBar;
