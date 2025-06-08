// //  What is React Hooks?
// // React Hooks are the built-in functions that permit developers for using the state and lifecycle methods within React components. These are newly added features made available in React 16.8 version. Each lifecycle of a component is having 3 phases which include mount, unmount, and update. Along with that, components have properties and states. Hooks will allow using these methods by developers for improving the reuse of code with higher flexibility navigating the component tree.

// // Using Hook, all features of React can be used without writing class components. For example, before React version 16.8, it required a class component for managing the state of a component. But now using the useState hook, we can keep the state in a functional component.

// // 16. Explain React Hooks.

// What are Hooks? Hooks are functions that let us “hook into” React state and lifecycle features from a functional component.

// React Hooks cannot be used in class components. They let us write components without class.

// Why were Hooks introduced in React?

// React hooks were introduced in the 16.8 version of React. Previously, functional components were called stateless components. Only class components were used for state management and lifecycle methods. The need to change a functional component to a class component, whenever state management or lifecycle methods were to be used, led to the development of Hooks.

// Example of a hook: useState hook:

// In functional components, the useState hook lets us define a state for a component:

// function Person(props) {
// // We are declaring a state variable called name.
// // setName is a function to update/change the value of name
// let [name, setName] = useState('');
// }
// The state variable “name” can be directly used inside the HTML. 

// 17. What are the rules that must be followed while using React Hooks?
// There are 2 rules which must be followed while you code with Hooks:

// React Hooks must be called only at the top level. It is not allowed to call them inside the nested functions, loops, or conditions.
// It is allowed to call the Hooks only from the React Function Components.
// 18. What is the use of useEffect React Hooks?
// The useEffect React Hook is used for performing the side effects in functional components. With the help of useEffect, you will inform React that your component requires something to be done after rendering the component or after a state change. The function you have passed(can be referred to as “effect”) will be remembered by React and call afterwards the performance of DOM updates is over. Using this, we can perform various calculations such as data fetching, setting up document title, manipulating DOM directly, etc, that don’t target the output value. The useEffect hook will run by default after the first render and also after each update of the component. React will guarantee that the DOM will be updated by the time when the effect has run by it.

// The useEffect React Hook will accept 2 arguments: useEffect(callback,[dependencies]);

// Where the first argument callback represents the function having the logic of side-effect and it will be immediately executed after changes were being pushed to DOM. The second argument dependencies represent an optional array of dependencies. The useEffect() will execute the callback only if there is a change in dependencies in between renderings.

// Example:

// import { useEffect } from 'react';
// function WelcomeGreetings({ name }) {
//  const msg = `Hi, ${name}!`;     // Calculates output
//  useEffect(() => {
//    document.title = `Welcome to you ${name}`;    // Side-effect!
//  }, [name]);
//  return <div>{msg}</div>;         // Calculates output
// }
// The above code will update the document title which is considered to be a side-effect as it will not calculate the component output directly. That is why updating of document title has been placed in a callback and provided to useEffect().

// Consider you don’t want to execute document title update each time on rendering of WelcomeGreetings component and you want it to be executed only when the name prop changes then you need to supply name as a dependency to useEffect(callback, [name]).

// 19. Why do React Hooks make use of refs?
// Earlier, refs were only limited to class components but now it can also be accessible in function components through the useRef Hook in React.

// The refs are used for:

// Managing focus, media playback, or text selection.
// Integrating with DOM libraries by third-party.
// Triggering the imperative animations.
// 20. What are Custom Hooks?
// A Custom Hook is a function in Javascript whose name begins with ‘use’ and which calls other hooks. It is a part of React v16.8 hook update and permits you for reusing the stateful logic without any need for component hierarchy restructuring.

// In almost all of the cases, custom hooks are considered to be sufficient for replacing render props and HoCs (Higher-Order components) and reducing the amount of nesting required. Custom Hooks will allow you for avoiding multiple layers of abstraction or wrapper hell that might come along with Render Props and HoCs.

// The disadvantage of Custom Hooks is it cannot be used inside of the classes.