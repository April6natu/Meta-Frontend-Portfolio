# Task
You are using the code similar to the lesson item titled *The Navbar*. Your goal is to add another link to the existing code. This link should show a brand new component, named Contact.

## Instructions

### **Step 1**

Add a new file, `Contact.js`, to the root of the `src` folder.

### **Step 2**

Inside the `Contact.js` file, create a functional component named `Contact`.Add the `export default Contact` after the Contact function's closing curly brace. 

### **Step 3**

Inside the body of the `Contact` function, add a return statement with the following code: `<h1>Contact Little Lemon on this page.</h1>`.

### **Step 4**

Inside the App.js file, import the newly-built Contact component.

### **Step 5**

Inside the App.js file's App function's return statement, locate the `nav` element, and inside of it, add another `<Link>` element, with the `to` attribute pointing to `contact`, the `className` set to `"nav-item"`, and the the text inside the Link element's opening and closing tags set to `Contact`.

### **Step 6** 

Inside the `Routes` element, add a third route, with the `path` attribute pointing to `"/contact"`, and the `element` attribute set to `{<Contact />}`.

### **Step 7**

- At the top of the lab environment, locate the Terminal menu. Click on it to open a dropdown, then select New Terminal.  Use the  `npm start` command to start the development server.  
- If you encounter errors like File not found or Unexpected token, stop the server with `Ctrl+C` in the terminal and restart it using npm start.  
- Ensure react-router-dom is installed in the lab environment. If not, run below comand in terminal: 
`npm install react-router-dom`
- You can now view the App in your browser by navigating to localhost:3000. To view the output, click on the Browser Preview icon located on the left panel. It is the last icon in the panel.
- In your browser, enter: http://localhost:3000 to see the output. The navigation bar displays three links: Home, About, and Contact. Clicking the `Contact` link updates the page content to show the message:"Contact Little Lemon on this page."  

## Tip

If you’re having trouble with this lab, please review the "The Navbar" video lesson item.  That video explains how to work with routes in React.
