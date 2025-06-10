// What is JSX?
// JSX stands for JavaScript XML and is an XML-like syntax extension to ECMAScript. It allows you to write HTML-like code within JavaScript, making the code more readable and expressive while providing the full power of JavaScript. JSX is not required to use React, but it is widely adopted for its simplicity and clarity. 
// How does JSX differ from HTML?
// JSX is similar to HTML but has some key differences:
// JavaScript Expressions: You can embed JavaScript expressions within JSX using curly braces {}.
// Self-Closing Tags: In JSX, all tags must be closed. For example, <img /> instead of <img>.
// Class Attribute: The class attribute is replaced with className to avoid conflicts with the JavaScript class keyword.
// Style Attribute: Styles are written as JavaScript objects instead of CSS strings. For example, style={{ color: 'red' }}.
// Can you write React without using JSX?
// Yes, you can write React without using JSX. Instead of JSX, you can use React.createElement() to create React elements. However, JSX is preferred for its readability and ease of use. 
// What is the purpose of the key prop in JSX?
// The key prop is a special attribute used in React to uniquely identify elements in a list. When rendering a list of elements, React uses the key prop to keep track of each element's identity and optimize the rendering process. The key prop helps React identify which items have changed, been added, or been removed, allowing it to update the DOM efficiently. 
// How do you conditionally render elements in JSX?
// You can use JavaScript conditional statements or logical operators to conditionally render elements in JSX. Common methods include:
// If Statements: Using if statements within the component's logic.
// Ternary Operators: Using the ternary operator ? : within JSX.
// Logical AND Operator: Using the && operator to conditionally render elements. For example:
// {messages.length > 0 && (
//   <div>You have {messages.length} unread messages.</div>
// )}
// How do you handle comments in JSX?
// Comments in JSX are similar to JavaScript multiline comments but are wrapped in curly braces. For example:
// {/* Single-line comments */}
// {`Welcome ${user}, let's play React`}
// Multi-line comments can also be used similarly:
// {/* 
// Multi-line comments
// */}
// What is the difference between an Element and a Component?
// Element: An element is a plain object that represents a DOM element or a component. It describes what you want to see on the screen. Elements are immutable and are used to create React components.
// Component: A component is a reusable piece of UI that can contain one or more elements. Components can be either functional or class-based. They accept inputs called props and return React elements that describe what should appear on the screen. 
// What is the children prop in React?
// The children prop allows you to pass components as data to other components, just like any other prop. The component tree placed between a component's opening and closing tags will be passed to that component as the children prop. For example:
// function MyDiv({ children }) {
//   return <div>{children}</div>;
// }

// export default function Greeting() {
//   return (
//     <MyDiv>
//       <h1>Hello</h1>
//       <p>World</p>
//     </MyDiv>
//   );
// }
// How do you handle forms in JSX?
// Forms in React can be handled using either controlled or uncontrolled components:
// Controlled Components: In a controlled component, form data is managed by React state and is updated via state changes. The input value is controlled by React, and any changes to the input are handled by React event handlers.
// Uncontrolled Components: In an uncontrolled component, form data is handled by the DOM itself. You can use refs to access the values of form inputs. 
// What is the purpose of the React.Fragment component?
// React.Fragment is a component that allows you to group multiple children elements without adding extra nodes to the DOM. It helps keep the DOM structure clean and avoids unnecessary div wrappers. You can use the shorthand syntax <>...</> to declare a fragment. For example:
// <React.Fragment>
//   <Header />
//   <Main />
//   <Footer />
// </React.Fragment>
// Or using the shorthand:
// <>
//   <Header />
//   <Main />
//   <Footer />
// </>