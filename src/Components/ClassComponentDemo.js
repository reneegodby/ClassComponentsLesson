import React, { Component } from "react";
// import {FiThumbsUp, FiThumbsDown} from 'react-icons';

export default class ClassComponentDemo extends Component {
  constructor(props) {
    super(props); //we call super so we can use the this keyword in the constructor.
    this.state = { incrementCount: 0, decrementCount: 0 }; //creates the initial state of this component.
    //State is reserved only for interactivity, that is, data that changes over time.
  }
  incrementCount = () => {
    // console.log("increment called");
    this.setState({ incrementCount: this.state.incrementCount + 1 });
    //the primary method you would use to update the user interface in response to event handlers and server responses is setState
  };
  decrementCount = () => {
    // console.log("decrement called");
    this.setState({ decrementCount: this.state.decrementCount - 1 });
  };

  render() {  
      //in all class components in React, a render method is req'd
    return (
    // console.log("render called")
  
      <div className="main">
        <div className="mainDiv">
          <ClassComponentNotes />
          <hr />
          <h3>Smash that like button!</h3>
          <button onClick={this.incrementCount}>
              {/* <FiThumbsUp /> */}
            Likes: {this.state.incrementCount}
          </button>
          <h3>Or smash this button to resolve your anger issues!</h3>
          <button onClick={this.decrementCount}>
              {/* <FiThumbsDown /> */}
            Dislikes: {this.state.decrementCount}
          </button>
        </div>
      </div>
    );
  }
}

const ClassComponentNotes = function () {
  return (
    <div>
      <h1>Class Components</h1>
      <p>
        Class components are considered the "React way" of writing components.
      </p>
      <dl>
        <dt>ES6 JS Classes</dt>
        <dd>Built on these, must understand them</dd>
        <dt>Must extend Component</dt>
        <dd>Class components need to extend the React Component.</dd>
        <dt>Render()</dt>
        <dd>Class components must always have a render method.</dd>
        <dt>Export</dt>
        <dd>Only one class component exported per file.</dd>
        <dt>and more!</dt>
        <dd>Will often have a constructor.</dd>
        <dd>Have lifecycle hooks/methods, different phases in the lifecycle of the component where different event can/should happen. </dd>
        <dd>Multiple class components can be in one file, but only one class component should be exported for each file.</dd>
    </dl>
    <ul>
        <h3>Props</h3>
        <li>not the same as state</li>
        <li>are received from above from a 'parent' component</li>
        <li>are immutable (unable to be changed) </li>
        <li>are properties, a way to configure a component</li>
        <li>can think of them like parameters to a function</li>
    </ul>
    <h3>Life Cycle Overview</h3>

    <h4>Birth Phase of Component</h4>
    <p>The birth/Mounting of the component is where the component starts initializing and the props and state are defined and configured.</p>
    <p> The mounting phase only occurs once. </p>
    <p>***Methods: constructor(); render(); componentDidMount()***</p>

    <h4>Growth/Update Phase of Component</h4>
    <p>Majority of action happens here.</p>
    <p>This is where users are interacting with the app and the component is changing in response.</p>
    <p>ex: changing state, new props, handling user interactions and input, and communicating with other components.</p>
    <p>***Methods: shouldComponentUpdate(); render(); componentDidUpdate()***</p>

    <h4>Death/Unmounting Phase of a Component</h4>
    <p>This phase occurs when the user navigates away,</p>
    <p>the UI page changes,</p>
    <p>new props and/or</p>
    <p>handling user interactions/input</p>
    <p>Unmounting only occurs once and readies the Component for Garbage Collection</p>
    <p>***Methods: componentWillUnmount()***</p>

    </div>
  );
};


// A React Component kicks off the life cycle during the initial application ex: ReactDOM.render(). With the initialization of the component instance, we start moving through the mounting phase of the life cycle. The biggest focus of the mounting phase is the initial configuration for our Component instance. This is where we pass in the props, configure the default state and get access to the initial UI display. This also starts the mounting process for any children of the Component.

//render()
// The render() method starts in the mounting phase and continues to exist in the update phases. One important thing to note about the render() method is all it should be doing is rendering, do not have any calculations or anything in this method that will change the state or props. Do not call setState() in render(). Doing so will cause the render() method to trigger infinitely, as react re-renders on state change. Luckily, react is great about pointing problems like these out if you do unintentionally do this.

//componentDidMount()
// The last step in the Mount life cycle phase is componentDidMount(). This method is called once all of the component's children are mounted. Important to know is that componentDidMount() is only called one time. Unlike our other Mount methods, where we start at the top and work down, componentDidMount() works from the bottom up, starting from the children components and working upward. So by the time our parent component hits componentDidMount() we know that children components have all gone through it as well.

// Useful things to do in this life cycle method include:
// Making API Calls (this is common and important to remember)
// Initializing 3rd party libraries
// Setting up listeners/subscriptions

// shouldComponentUpdate()
// Use shouldComponentUpdate() to let React know if it shouldn't re-render a component. The default behavior in React for rendering, is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior. You can use this method to prevent unnecessary re-renders, when a component’s output is not affected by the current change in state or props. This method is not often used, unless you know for specific instances where you would not want a re-render on. React may treat shouldComponentUpdate() as a hint rather than a strict directive, and returning false may still result in a re-rendering of the component.

// componentDidUpdate()
// componentDidUpdate() is invoked immediately after updating occurs, think of it as similar to componentDidUpdate(), but for the update phase. This method is not called for the initial render. The most common uses of componentDidUpdate() is managing 3rd party libraries to update the information, or doing network requests as long as you compare the current props to previous props to determine if it's necessary to do one.

//componentWillUnmount()
//componentWillUnmount() is called right before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentWillUnmount(). If we don't take the time to remove events we can create memory leaks in our system which will slow down your application and make performance terrible. React will often do a good job of telling you that you're trying to update something that is no longer mounted if you forget to do this, so if you see this message make sure you've cleaned up everything in componentWillUnmount() for your components.