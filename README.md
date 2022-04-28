# Interview Questions for React Developers

### What is React JS? What are the advantages compared to other JavaScript frameworks?
React is an efficient, declarative, and flexible open-source front-end JavaScript library for building simple, fast and scalable front-ends. It is developed by Facebook in 2011.

- ##### Use of Virtual DOM to improve efficiency
React uses virtual DOM to render the view. As the name suggests, virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves.
- ##### Gentle learning curve
React has a gentle learning curve when compared to frameworks like Angular. Anyone with little knowledge of javascript can start building web applications using React.
- ##### SEO friendly
React allows developers to develop engaging user interfaces that can be easily navigated in various search engines. It also allows server-side rendering, which boosts the SEO of an app.
- ##### Reusable components
React uses component-based architecture for developing applications. Components are independent and reusable bits of code. These components can be shared across various applications having similar functionality. The re-use of components increases the pace of development.
- ##### Huge ecosystem of libraries to choose from
React provides you the freedom to choose the tools, libraries, and architecture for developing an application based on your requirement.
```
Short Answer to React features:
- It uses the virtual DOM instead of the real DOM.
- It follows the component based approach which helps in building reusable UI components.
- It is used for developing complex and interactive web and mobile UI.
- Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.
- It follows uni-directional data flow or data binding
```
---
### What is the virtual DOM? How does react use the virtual DOM to render the UI?
Virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced with the real DOM by a library such as ReactDOM.

This Virtual DOM works in three simple steps:

1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
2. Then the difference between the previous DOM representation and the new one is calculated.
3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.
<center>
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--rorQuVGd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/d5amy5j4ly0ruq1inyet.png" alt="VirtualDOM" width="80%"/>
</center>
### What are React components? What is a state in React?
When it comes to using React, everything boils down to components. In simple words, “Components are the construction blocks of a React application’s UI. These components split up the entire UI into several small, independent, and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.”

Then again, “States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via `this.state()`.”
### What are stateless components?
Stateless components are nothing more than pure functions that render DOM-based solely on the properties provided to them. They do not have the authority to change the state.
### What is a JSX?
JSX stands for JavaScript XML.

It allows us to write HTML inside JavaScript and place them in the DOM without using functions like `appendChild( )` or `createElement( )`.

As stated in the official docs of React, JSX provides syntactic sugar for `React.createElement( )` function.
### What do you understand by refs in React?
Refs are a way for you to get a handle back to the component you've created

It makes it possible to store a reference to a particular React element or component returned by the component render() configuration function. 
### When you need refs?
- Managing focus, text selection, or media playback.
- Integrating with third-party DOM libraries.
- Triggering imperative animations.
### What are the different phases of React component’s lifecycle?
There are three different phases of React component’s lifecycle:

> - ???
> - ???
> - ???

### What is the difference between a Container and a Component?
> ???
---
---
<center>🤘🏼🤘🏼🤘🏼🤘🏼🤘🏼🤘🏼🤘🏼🤘🏼🤘🏼🤘🏼</center>
---
---
---
# Interview Challenges for React Developers

### A) Add and Delete Items From the List 
In this challenge, the developer has to create an input field with a button.

When the button is clicked, the text in the input field should be added below in a list. Moreover, whenever any list item is clicked, it should be removed from the list. 

The motive of this challenge is to check how good the developer is with forms, state, and lists. 
### B) Displaying Data Coming From an API
In this coding challenge, you will be provided with an API that will return some data, maybe, an array of objects. You have to display the data in the UI.

The main motive here is to check how and where the API is called by the developer. In React, there are two ways to call APIs.

- Axios
- fetch API
### C) Create a Higher-Order Component to reuse component logic
In this coding challenge, you might be asked to create three different components that have similar component logic. So you have to create a Higher-Order Component that will have the component logic and it will be reused by the other three components. 

For this challenge, you have three components, each containing a button that increments the value in the state by a specific number. Suppose, three components are:

- “ComponentA” where the button increments the value by two.
- “ComponentB” where the button increments the value by twenty.
- “ComponentC” where the button increments the value by two hundred.

### D) Implementing and using Redux 
In this coding challenge, the interviewer wants to check how you implement and use Redux. So, you might be provided with a basic React application with two components - one that will contain the buttons to increment and decrement the global state and another to display the value.

### E) **Share data among components without using props and Redux
In this coding challenge, the interview might give you a React application with multiple nested components like the following.

<pre style="background-color: lightblue">

A ──► B ─────► C
      │
      └──────► D
</pre>

Suppose there is an object in component “A” and it is required in “C” and “D”.