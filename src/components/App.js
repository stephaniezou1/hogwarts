import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
// import hogs from "../porkers_data";
import HogContainer from './HogContainer'
import Button from './Button'

class App extends Component {
  
  state = {
    hogs: [],
    filterTerm: "All the Hogs"
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

  handleFilter = (selectedFilter) => {
    this.setState({
      filterTerm: selectedFilter
    })
  }

  filteredHogs = () => {
    let anArray = this.state.hogs
    if (this.state.filterTerm === "Greased Hogs") {
      anArray = this.state.hogs.filter(hog => hog.greased)
    } else if (this.state.filterTerm === "Non-greased Hogs") {
      anArray = this.state.hogs.filter(hog => !hog.greased)
    } else if (this.state.filterTerm === "All the Hogs") {
      anArray = [...this.state.hogs]
    }
    return anArray
  }

  render() {
    console.log(this.state, "APP STATE");
    return (
      <div className="App">
        <Nav />
        <Button 
          filterTerm={this.state.filterTerm}
          handleFilter={this.handleFilter}
        />
        <HogContainer 
          hogs={this.filteredHogs}
        />
      </div>
    );
  }
}

export default App;
