import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
// import hogs from "../porkers_data";
import HogContainer from './HogContainer'

class App extends Component {
  
  state = {
    hogs: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/hogs")
      .then(resp => resp.json())
      .then((listOfHogs) => {
        // console.log(listOfHogs)
        this.setState({
          hogs: listOfHogs
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HogContainer 
          allHogs={this.state.hogs}
        />
      </div>
    );
  }
}

export default App;
