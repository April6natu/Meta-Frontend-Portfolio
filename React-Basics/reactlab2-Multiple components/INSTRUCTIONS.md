## Task

You've learned that components in React allow for modularity and reuse, with the ability to make data more dynamic by passing it from the parent to the child using props.

In this exercise, you'll render one component multiple times, to practice using different props and observing what exactly "reusing" components means.


## Instructions

### **Step 1**

Start with the `App` component's existing code, which includes an `h1` element that reads: "Task: Add three Card elements"

However, there’s no Card component file yet. The first task is to create a new `Card.js` file and define the `Card` function inside it.

### **Step 2**

Inside the `Card.js` file's `Card` function, add a `return` statement with two parentheses after it, to allow the `return` statement to spread onto several lines.

### **Step 3** 

Within the `return` statement, add a `div` element that will wrap the content of the Card component.

### **Step 4** 

Inside the wrapping `div` element, add an `h2` element. Below the h2, add an `h3` element.

### **Step 5** 

In the `h2` element, add the JSX expression `{props.h2}`. This will allow the parent component to pass a h2 value to the `Card` component.

### **Step 6** 

Inside the `h3` element you've already added, add the JSX expression of: `{props.h3}`.

### **Step 7** 

At the bottom of the `Card.js` file, add the line `export default Card`; to export the component so it can be imported into other files.

### **Step 8** 

Back inside the App component, import the `Card` component by adding the necessary import statement at the top.

### **Step 9** 

Inside the App component's `return` statement, under the `h1` element, add three `<Card />` JSX elements.

### **Step 10** 

Add the `h2` prop to the first `<Card />` element, like this: `h2="First card's h2"`.

### **Step 11** 

Also for the first <Card />, pass the h3 prop like this:`h3= "First card's h3"`.

### **Step 12** 

Add the `h2` and `h3` props to the second `<Card />` element, with the `h2` reading: "Second card's h2", and the `h3` reading "Second card's h3".

### **Step 13** 

Add the `h2` and `h3` props to the third `<Card />` element, with the `h2` reading: "Third card's h2", and the `h3` reading "Third card's h3".

### **Step 14** 

In the `Card.js` file, inside the wrapping `div` element, add the className attribute with a value of `card`. This class will allow you to apply styling to the Card component.  

### **S​tep 15**

- At the top of the lab environment, locate the Terminal menu. Click on it to open a dropdown, then select New Terminal.  Use the  `npm start` command to start the development server.  
- If you encounter errors like File not found or Unexpected token, stop the server with Ctrl+C in the terminal and restart it using npm start.  
- You can now view the App in your browser by navigating to `localhost:3000`. To view the output, click on the Browser Preview icon located on the left panel. It is the last icon in the panel.
- In your browser, enter: http://localhost:3000 to see the output.  
You should now see three Card components, each displaying different h2 and h3 values as specified in the props.  If the app does not load, refresh the browser or check the terminal for error logs.  

### **Tip**

If you’re having trouble with this lab, please review the "Expressions as props" video lesson item.
