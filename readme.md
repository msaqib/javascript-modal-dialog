## A modal Yes / No dialog client-side library in JavaScript
This is a light weight modal dialog library written in vanilla JS. It is for times when you want to use a modal dialog on the client-side without using Node.js or any such complications.

### How to use 
Just copy and paste the style.css and modal.js files into your project directory, import the CSS file into your HTML file using the <link> tag, and the modal.js file into your HTML file using the <script> tag. Make sure that the <script> tag for the modal.js file appears before your own application's Javascript.

An example application is given in the example directory. In your JavaScript, call the showModal() function like:

```
const result = await showModal('Are you sure you want to continue?', preModal, postModal)
```

The second argument is a function that disables all other active elements on your web page. You need to write that function. The third argument is a function the enables those functions.

The above function call returns a JavaScript Promise. Handle that promise in your favorite way. For example, if you were to use the `async-await` syntax, you'd write your calling function with an `async` prefix. 

When the promise resolves, in the `result` variable you get a value of `true` if the user presses "Yes", otherwise it returns `false`. So, you can follow this with a simple `if-else`.