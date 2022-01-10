import React, { Component } from "react";


//PARENT CLASS COMPONENT
export default class ClassComponentProps extends Component {
  constructor(props) {
    super(props); //we call super so we can use the this keyword in the constructor.
    this.state = {  //creates the initial state of this component.
      fruitBowl: ["apples", "bananas", "oranges", "mangoes", "kiwis"],
      newFruit: "",
    };//fruitBowl and newFruit are the props
    this.addFruit = this.addFruit.bind(this);  //method to update newFruit prop ?
  }

  addFruit(event){      //method to update newFruit value to the array and reset the value of input to be empty?
      event.preventDefault();
      this.setState({
          fruitBowl: [...this.state.fruitBowl, this.state.newFruit], newFruit: "",
      })
  }

  changeHandler(event){
      this.setState({newFruit: event.target.value});
  }

  render() {        //in all class components in React, a render method is req'd
    return (
      <div className="main">
        <div className="mainDiv">
          <form onSubmit={this.addFruit}>
            <input type="text" value={this.state.newFruit} onChange={(event) => this.changeHandler(event)}/>
            <button type="submit">Add Fruit</button>
          </form>
          <FruitBowl fruits={this.state.fruitBowl}/> 
        {/* calling FruitBowl class component and passing it into the fruitBowl array */}
        </div>
      </div>
    );
  }
}

//ANOTHER CLASS COMPONENT TO PASS OUR PROPS TO. Since there is no logic or hold any state, no constructor is needed.
class FruitBowl extends Component {
    render(){
        return (
            <div>
                {this.props.fruits.map((fruit) => {
                    return <Fruit passingFruit={fruit}/> //called the Fruit functional component
                })}
            </div>
        );
    }
}
//FUNCTIONAL COMPONENT: purpose to display elements. No logic or state store in functional components.
const Fruit = (props) => {  //We make sure we pass in props as a parameter into the functional component. This makes it available for access throughout the component.
    return (
        <div>
            <h3>{props.passingFruit}</h3> 
            {/* We access the property called passingFruit in the props object and display the value as an h3 tag */}
        </div>
    );
};