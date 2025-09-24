# Instructions

## Task

In this ungraded lab, your goal is to add an image from the `assets` folder that's already been added to the `src` folder. The image should be added into the App component, under the `h1` heading, inside the `return` statement.

## Steps

### **Step 1**

Open the `App.js` file.Import the image from the assets folder and assign it to a variable named `logo`.Follow below command to Import image
`import logo from './assets/logo.png';`

### **Step 2**

In App component,Inside the `return` statement, add the new `img` element, with the `src` attribute set to the JSX expression evaluating the `logo` value, and the `alt` attribute holding the string of `"Logo"`.

### **Step 3**

- At the top of the lab environment, locate the Terminal menu. Click on it to open a dropdown, then select New Terminal.  Use the  `npm start` command to start the development server.  
- If you encounter errors like File not found or Unexpected token, stop the server with `Ctrl+C` in the terminal and restart it using npm start.  
- You can now view the App in your browser by navigating to localhost:3000. To view the output, click on the Browser Preview icon located on the left panel. It is the last icon in the panel.
- In your browser, enter: http://localhost:3000 to see the output.you can see `Image` below the heading element.

## Tip

If you’re having trouble with this lab, please review the "Using Embedded Assets" video lesson item.
