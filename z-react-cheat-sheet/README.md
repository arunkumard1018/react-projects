#react-Nots
- --

What is React
1. React JS is a JavaScript library for creating user interfaces
2. ReactJS Optimizes the DOM manipulation by writing very simple code
3. React is used for applications where the data keeps changing very frequently

Features
1. Component based architecture
2. Virtual DOM 
3. Unidirectional data flow
4. JSX
5. SEO performance

>*npx create-react-app my-app* { to Create React App }

####StrictMode
React.StrictMode: It is a helper component which helps the developers in identifying the problems in the application.The React.StrictMode, component does not render any visible UI

StrictMode helps with the below :
1. Identifying components with unsafe lifecycles
2. Warning about legacy string ref API usage
3. Warning about deprecated findDOMNode usage
4. Detecting unexpected side effects
5. Detecting legacy context API

###What is React Component?
A React component is the fundamental unit of any React application. They are capable of encapsulating data and view as a single unit. These components can work in conjunction with each other.

Components make code reusable, testing easy, and can take care of separation of concerns.
The capability of creating own components is a major productivity boost to any web application development.

Here, in ReactJS, components reside in virtual DOM and these components will be available as nodes in actual DOM.

**what is Virtual DOM and why React uses Virtual DOM.**

Virtual DOM is an abstraction of actual DOM, where components are the nodes. We can programmatically modify virtual DOM by updating components. These updates are internally handled by React and in turn, updated in actual DOM.

As we all know, DOM manipulation is expensive, because it requires traversal through entire DOM tree to find the element to be updated. If these updates are very frequent, this leads to a poor performance of an application.

Different frameworks handle above scenario in different ways like dirty checking, data-binding etc.

React, rather than updating DOM directly, builds an abstract version of it called Virtual DOM.
- --
Whenever any updates happens in the application, the virtual DOM gets modified. React computes the difference between the previous virtual tree and the current virtual tree

Based on these differences React will figure out how to make updates to the actual DOM efficiently

React does all the computations in its abstracted DOM and updates the DOM tree accordingly

Virtual DOM enhances performance and efficiency by minimizing expensive updates in the actual DOM

Hence React is said to be a great performer because it manages a Virtual DOM
- --
**There are 2 types of components that can be created in React**
1. Class based components
2. Functional components

Functional Components

* Created as a simple JavaScript function
* It just returns the HTML elements
 
####Why Props and State?
n a real-time application, components must deal with dynamic data.

This data could be something internal to the component or may be the data that is passed from another component. To bind the data to the component, you need two JS objects i.e. state and props.

**What is State?**

The state is an initial value set for a component, which is used for interactivity.

Let's see how to set the state of a component.
```
class Timer extends React.Component {
    constructor() {
        super ()
        this.state = {
            counter: 0
        }
    }
    handleClick = (e) => {
    this.setState({counter:this.state.counter+1})
    }
    render() {
        return(<React.Fragment>
            <h2> Seconds Elapsed: {this.state.counter} </h2>
            <button onClick = {this.handleClick}> Increment Counter </button>
        </React.Fragment>)
    }
}
```
#What is State?

State is a JavaScript object used to manage the data of an application

To associate state with components you can use useState hook

useState():

useState hook is used to add or initialize state value within a functional component. This hook helps to preserve the state value of a component.
```const [count, setCount] = useState(0); ```

useState() is a function which takes ‘initialState’ as the initial value for any state variable and returns 2 values.

In the above code snippet, count is a state variable which is initialized with value 0 and setCount is the function used to update the state count

Whenever state is updated, the component is re-rendered, and updated value is displayed on the UI. React remembers the current value of state between re-renders and provides the most recent value to the function.

Observe the usage of  useState() from the below example:
```
import {useState} from 'react';
function App() {
  const [name,setName] = useState("Jack")
  return (
    <div>
      Your Name is: {name}<br/>
      <button onClick={()=>setName("Tom")}>Change</button>
    </div>
  );
}
export default App;
```
* In the above example useState() hook helps to set the initial value as "Jack".
* ‘name’ is the state of the component ‘App’. useState() returns a state ‘name’ with its initial value ‘Jack’ and ‘setName’ method.
* When user clicks on the button, click event is fired and the value of ‘name’ state is updated to 'Tom' through setName method.

```import {useState} from 'react';
function App() {
  const [name,setName] = useState("Jack")
    const handleChange = () => {
      setName("Jill")
    }
  return (
    <div>
      Your Name is: {name}<br/>    
      <button onClick={handleChange}>Change</button>
    </div>
  );
}
export default App;
```
#Key points to be remembered while handling data in a component:

* States are mutable and only used on top level component
* They are reserved for interactivity. The component's event handlers may update the state and trigger a UI update
* The state will be set with a default value when component mounts and will mutate in time based on user events generated

#How to use Props?
When you want to pass data from parent component to child component, it can be achieved using props.

How to pass and access props?

<App data= {10} />

Here, the property 'data' with a value '10' is passed to the component App.

The props are passed as arguments to functional components and can be accessed within the components as shown below
```import { useState} from 'react';
import Employee from './Employee';
const Employees = () => {
        const [employees, setEmployees] = useState([
                { empId: 1234, name: 'John', designation: 'SE' },
                { empId: 4567, name: 'Tom', designation: 'SSE' },
                { empId: 8910, name: 'Kevin', designation: 'TA' }
        ])
        return (
            <Employee employees={employees}/>
        )
}
export default Employees;
```
* Employees is a parent component
* Employee child component is rendered, and employees state is passed as props
```import 'bootstrap/dist/css/bootstrap.min.css';
const Employee = (props) => {
        return (<>
                <table style={{ width: '60%' }} className='table'>
                        <thead className="thead-light">
                                <tr key={props.employees.empId}>
                                        <th>EmpID</th>
                                        <th>Name</th>
                                        <th>Designation</th>
                                </tr>
                        </thead>
                        <tbody>
                                {props.employees.map(employee => {
                                        return (<tr>
                                                <td>{employee.empId}</td>
                                                <td>{employee.name}</td>
                                                <td>{employee.designation}</td>
                                        </tr>)
                                })
                                }
                        </tbody>
                </table><br/><br/>
        </>)
}
export default Employee;
```
* The props are passed to the child component
* employees props is accessed within the Employee component to display the employee details
 
> ![Note]
> You can access the props directly through de-structuring as shown below

```
import 'bootstrap/dist/css/bootstrap.min.css';
const Employee = ({employees}) => {
        return (<>
                <table style={{ width: '60%' }} className='table'>
                        <thead className="thead-light">
                                <tr key={employees.empId}>
                                        <th>EmpID</th>
                                        <th>Name</th>
                                        <th>Designation</th>
                                </tr>
                        </thead>
                        <tbody>
                                {employees.map(employee => {
                                        return (<tr>
                                                <td>{employee.empId}</td>
                                                <td>{employee.name}</td>
                                                <td>{employee.designation}</td>
                                        </tr>)
                                })
                                }
                        </tbody>
                </table><br/><br/>
        </>)
}
export default Employee;
```
1. Props are immutable – The child component cannot modify the props. However, when parent component updates the data that is passed as props then the Child component gets updated props.

2. Whenever props are updated the component gets re-rendered and displays the latest value in the UI.


