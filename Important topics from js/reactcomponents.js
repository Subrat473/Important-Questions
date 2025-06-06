// What is the difference between an Element and a Component?
// Element:

// A React Element is a plain JavaScript object that describes what you want to see on the UI. It represents a DOM node or a component at a specific point in time.

// Elements are immutable: once created, you cannot change their properties. Instead, you create new elements to reflect updates.

// Elements can be nested within other elements through their props.

// Creating an element is a fast, lightweight operation—it does not create any actual DOM nodes or render anything to the screen directly.

// Example (without JSX):

// const element = React.createElement("button", { id: "login-btn" }, "Login");
// Equivalent JSX syntax:

// <button id="login-btn">Login</button>
// The object returned by React.createElement:

// {
//   type: 'button',
//   props: {
//     id: 'login-btn',
//     children: 'Login'
//   }
// }
// Elements are then passed to the React DOM renderer (e.g., ReactDOM.render()), which translates them to actual DOM nodes.

// Component:

// A Component is a function or class that returns an element (or a tree of elements) to describe part of the UI. Components can accept inputs (called props) and manage their own state (in case of class or function components with hooks).

// Components allow you to split the UI into independent, reusable pieces, each isolated and composable.

// You can define a component using a function or a class:

// Example (Function Component with JSX):

// const Button = ({ handleLogin }) => (
//   <button id="login-btn" onClick={handleLogin}>
//     Login
//   </button>
// );
// When JSX is compiled, it's transformed into a tree of React.createElement calls:

// const Button = ({ handleLogin }) =>
//   React.createElement(
//     "button",
//     { id: "login-btn", onClick: handleLogin },
//     "Login"
//   );
// In summary:

// Elements are the smallest building blocks in React—objects that describe what you want to see.
// Components are functions or classes that return elements and encapsulate logic, structure, and behavior for parts of your UI.
// Think of elements as the instructions for creating UI, and components as reusable blueprints that combine logic and structure to generate those instructions.