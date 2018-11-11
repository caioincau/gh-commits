Project with Github integration


## ES6 Use cases

- I used arrow functions to keep the context and avoid the use of binding methods
- Another case is the destructuring operator on setState, to merge two objects into a new one
- Use of import alias like this: BrowserRouter as Router
- Template strings to make an easier interpolation

## Github API limitations
Since Github limits the number of requests without authentication, I recommend you to add your credentials in the .env.development and .env.production files(https://developer.github.com/v3/guides/basics-of-authentication/)

## Lighthouse audit using 3G connection
![Lighthouse](Lighthouse.png?raw=true "Lighthouse")

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

