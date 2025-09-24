# Task

When a user interacts with your React app, this will trigger events. You've learned how to handle user-generated events, so now you can reinforce what you've learned by practicing event handling. To make this more fun, in this exercise, you'll be building a simple number-guessing game.

## Instructions

### **Step 1**

The starting point for this task is the `App` component, which currently includes an `h1` element that reads: "Task: Add a button and handle a click event".

Add a `button` element with opening and closing button tags below the `h1` element.

### **Step 2**

In between the opening and closing button tags, add the following text: `Guess the number between 1 and 3`.

### **Step 3**

Inside the opening button tag, add the onClick event-handling attribute, and pass it the following JSX expression: `{handleClick}`.

### **Step 4**

Above the return statement of the App component - but still inside the App function - add the following ES5 function declaration: 
```js
function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1
    console.log(randomNum)
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`)
}
```

### **Step 5**

- At the top of the lab environment, locate the Terminal menu. Click on it to open a dropdown, then select New Terminal.  Use the  `npm start` command to start the development server.  
- If you encounter errors like File not found or Unexpected token, stop the server with `Ctrl+C` in the terminal and restart it using npm start.  
- You can now view the App in your browser by navigating to localhost:3000. To view the output, click on the Browser Preview icon located on the left panel. It is the last icon in the panel.
- In your browser, enter: http://localhost:3000 to see the output. 
- Ensure the button and prompt are visible. If not, check the component code to confirm everything is rendered correctly.   
- Click the button, Enter a number in the prompt dialog,See the generated number and your guess in the alert box. Close the alert and click the button again to play another round.  

## **Tip**

If you’re having trouble with this lab, please review the "User events" video lesson item.  This video covers all of the basics of event handling that you need to solve this ungraded lab.
