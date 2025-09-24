## Task

You've learned that you can export a component either as a default export or as a named export. You've also learned how to import such components.  

Let's demonstrate this with a basic example. In this exercise, you'll practice saving a component to its own file and importing it into its parent component so that it can be rendered on the screen. 

## Instructions

### **Step 1** 

Move the `Heading` function from App to a separate component file, named "Heading.js". 

Create a new file:
- Right-click on the *src* folder in your project.
- Select the *New File* option.
- Name the file `Heading.js` and press ENTER.

Move the Heading function:
- Copy the Heading function code from `App.js`.
- Paste it into the new `Heading.js` file.

### **Step 2**

Import the `Heading` component into the `App` component.
And export the `Heading.js`file to use in App component.

### **Step 3**

Remove the sentence that reads: *This is the starting code for “Your first component” ungraded lab* - so that only the `Heading` JSX element remains in the return statement of the App component.

### **Step 4**

- At the top of the lab environment, locate the Terminal menu. Click on it to open a dropdown, then select New Terminal.  
- Once the new terminal is opened, it automatically navigates to the default project directory. 
- Use the  `npm start` command to start the development server.  
- You can now view the App in your browser by navigating to localhost:3000.  
- To view the output, click on the Browser Preview icon located on the left panel. It is the last icon in the panel.  
- In your browser, enter http://localhost:3000to see the output.  

### **Tips**

If you're having trouble with this lab, please review the "Importing components" video. This video covers all the concepts that you'll need to successfully complete this lab. 