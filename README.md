
  

# Introduction

  

Welcome to my Boilerplate for React projects.

First and foremost, it is important to mention that all sites can and should build with an accessibility first mindset.
[https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/](https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/)
  

This project contains everything needed to quickly bootstrap a new UI project. You only need to pull it down and replace the naming and URLs in a few areas, but otherwise it will work out of the box.

  

You will need Node installed locally. You can use any OS and IDE that you wish.

  

The following steps in this guide will show you how to create a new project using this boilerplate as a template, and give an overview of the structure and architecture of the application itself.

  

# Getting Started


1. Open `package.json` and replace the following fields with the name and location of your new project instead: `(name, description, repository)`

2. Open `webpack.config.js` and change the `title` from R/R Boilerplate to your new project name.

3. Build and run locally to test everything is working correctly. Refer to the Build and Test section.

4. Finally, check this in to your master branch as the initial commit for the repository.

  

# Build and Test

  

1. Make sure you have node and NPM installed

2. Update your node modules by running `npm install`

3. Run `npm run dev` to start up the dev server

4. Navigate to `localhost:3002` in order to verify the project is up and running without issues

  

# Project Structure

  

## Configuration

  

### Project

  

The project configuration consists of the main `package.json`, `webpack.config.js`, `babel.config.js`, and `.npmrc`

  

1. The `package.json` is the main entry point for an NPM project, consisting of basic project information, the compile time and run time dependencies used in the project, miscellaneous configuration, and a scripts object. The scripts are used to build, lint, and test the application.

* The `dev` script should be used to run the application locally, spinning up a local development server hosting your built react project

* The `build` script is an environment agnostic build using Webpack that will generate files in the `dist` folder for deploy.

* The lint scripts are used for linting the JavaScript and SCSS/CSS in the project

* Other script in there can be inferred by their content

2. Packages in the `package.json` are used for various reasons. The runtime, meaning needed for the app while running, should be located in the `dependencies` section, and the compile time in the other section.

3. The `webpack.config.js` file contains all the configuration needs to run the app locally and build for production. The `module.exports` section contains the entry point of the application, the output variables for building the app, and modules used to transpile, load resources, and translate.

4. The `babel.config.js` file is used by any scripts running babel, which is used for transpiling the code, to run through presets and plugins, as well as target environments such as react and browser versions. The browser versions are listed in the `.browserslistrc` file.

5. The `.npmrc` file is used to connect to our private NPM feed on Azure.

  

### Linting

  

Linting is used to ensure common standards are being followed for our JavaScript and style code within the project. The linters use eslint and stylelint with plugins to work. The scripts in the `package.json` can be used to run them manually on your code. The linters will also run automatically on commit locally, as well as when you have a pull request up against an official branch.

  

1. The `.eslintrc` file contains rules that inherit from the standard and standard-jsx JavaScript rule sets. There is also a plugin for `a11y` to ensure adherence to accessibility rules.

2. The `.stylelintrc` file contains rules extending the `stylelint-config-standard` rule set. There are a few extra rules defined as well. This will ensure standards followed on SCSS and CSS code written.

  

## Application

### Folder Structure

  

1. The react code is all housed in the `app` folder.

2. Inside this folder, all the rest of the folders are organized in a flat structure with regard to function and a clear separation of concerns between libraries for ease of extension and replacement.

3. The main functions in the app are `state management`, `side-effects`, `services`, `translations`, and `react code`.

4. The store and reducers folders contain the state management.

5. The sagas folder contains the means for capturing side effects as a middleware.

6. The components folder holds all of the react code that is not entry and set up.

7. The rest of the folders should be intuitive enough to decipher, as everything is laid out to be as easy to find as possible.

  

### Entry and Setup

  

1. The entry of the react project occurs in the `index.js` of the main app folder. In this file, top level configuration is being created and the react app itself is being mounted.

* The `whatwg-fetch` is a polyfill for the fetch API on browsers, used in our services.

* The store is imported from the store folder. The store folder contains the create file which is used to combine the reducers and middleware together to form a single store for state management. The middleware file is to separate the concern of middleware creation and contains set up for the sagas, and some development helpers for logging redux actions and invariant trackers.

* The service index is imported to mount all the service files and have them register themselves, which will be touched upon in the services section.

* The sagas are imported in a similar fashion so they can all mount before component render.

* The translator used in the application is initialize.

* The history object is created to give access to all components rendered within the provider.

* Finally, `ReactDOM.render` is called on the imported App component, with Provider and Router wrapped around it, and mounting on the div with the id `app` in the `index.html.ejs` file. The Provider is used to provide the store to all components it wraps. The Router provides access to the router for all child components as well.

  

2. The `index.html.ejs` file is the main wrapper for the application, where the react components are mounted.

* This file contains global styles and static assets used such as the font awesome library, bootstrap css, the bundles styling for the react app.

* The `core-js` and `runtime` JS files are imported as polyfills.

* The `config.js` is referenced here as a deployed file, for runtime configuration values.

* The app's bundled JS code is imported based on the generated hash file created by the webpack build process.

  

3. The main routing in the application occurs in the `App` component, with declarative routing using `useRouteMatch` or the `Route` component.

* The paths should be exact unless you require multiple components rendered using routes, such as a persistent header or side navigation along with the content of other components.

* Each component that should update on route change is provided a key that is the pathname of the current location in order to force re-render.

* The app is wrapped in the `main` tag as per accessibility guidelines, followed by a bootstrap `container`. All direct children of a bootstrap container need to be `rows` and all direct children of rows need to be `cols`. This is to ensure proper containerization and responsiveness that bootstrap handles out of the box.

* Further Rows and Columns are optional beyond that point, but the same rules will apply. They can be used to create responsive views on a more granular level as needed.

  

### Authentication

  

1. The authentication process relies on the user logging in through the main log in process and stores the authentication and refresh tokens in cache in the fetch.js utility file.

  

2. The services reference the `getAuth` function and set the result into the request header when making API calls.

* The function will check for the token in local storage first. If it's not there, and you're not on your local environment, it will redirect you to the log in page.

* If all is well by now, it will return that token back to the service or whatever called it to fetch the token.

  

3. There are other helper functions in here as well, such as the logout function to easily log the user out programmatically.

  

### Services

  

1. The service functions are located in the `service` folder.

* Each service is a standalone, with the same structure. They contain an export of their own name for reference, the URL they call out to, a mock function, the service function itself, and a default export registering itself using the `async-operations` library.

* The `async-operations` library is used to unify the creation and use of services. It provides a `registerOperation` function which accepts the service name, function, and mock function, and returns an object representation for use in dispatching it as an action, invoking it directly, and reference it's named actions for side effects. Refer to the [documentation](https://github.com/NetchexDev/async-ops#simplified-api)

* The service function contains the logic for the service call using the fetch API. It constructs the options using the helper function `getDefaultOptions` from the `fetch.js` file, which calls the helper function in the `auhtentication.js` file for the token.

* The method and body (if necessary) are also outlined in the options.

* The fetch API is called using the URL and options.

* The helper function `deserializeJsonResponse` is used on the response to get a usable JSON object.

* Any errors are propagated using the `throwExceptionErrors` helper function.

* Finally the de-serialized response is returned to the caller.

* The mock function can be used in any number of ways to mock data as needed on success and failure responses using the `enableMock` function from the `async-operations` library. This function is exposed on the `window` object for ease of access when testing locally.

  

2. The services are utilized in the container files of the components. There are hooks in the hooks folder called `useService` and `useServiceCommand` to help.

* In the container, to call the service on render, you can utilize the `useService` hook. It will mount a `useEffect` with the provided service function and parameters, and return a loading and error variable that will change as the service processes and completes.

* The `useServiceCommand` hook can be use to set up a service that you can invoke as needed, in case of use in a side effect or click handler in the container.

  

### State Management with Redux

  

1. Redux is used as state management middleware for the application. Please refer to the [Redux documentation](https://redux.js.org/basics/data-flow) for information on the lifecycle, as well as structure of reducers and actions.

2. The reducers that represent the state are located in the `reducers` folder. The `index.js` within this folder combines them into a single state object, with each reducer being keyed off the name used.

3. Each reducer has the same layout, which include a default function export that accepts the current state and the action. The type of the action is parsed and if it matches an action the current reducer cares about, we pass the state and action into a function to update the current state.

4. All action creator functions and action constants are exported out of the reducer itself.

5. All selectors are also exported out of the reducer to be used in component containers to access state.

6. Inside a container, you will use `useSelector` from `react-redux` and pass in a function that selects the state you want. This can either be in the form of `state => state.name.value` or importing a previously created selector function from the relevant reducer.

  

### Side Effects and Middleware

  

1. Side effects are mostly handled by utilizing the `useEffect` hook in React and capturing and producing side effects with sagas.

2. Sagas as well as other middleware are set up in the `middleware.js` file. Invariant is used to warn of mutation of state during development. Loggers are used to log redux actions to the console and state change tracking. We also set the `enableMock` and `disableMock` functions on the window object from the `asyncOperations` project.

3. There is a top level saga that is mounted and runs for the `asyncOperations` project, and it listens for the actions of services and dispatches success and failure actions on behalf of the service with top level error handling.

4. Other sagas can be set up to listen for specific actions or other triggers, and produce side effects asynchronously. Sagas use iterator functions, allowing for an `async/await-like` coding pattern using `yield`.

  

### Styling

  

1. Styling is accomplished using SCSS and bootstrap.

2. The `style` folder contains the `variables.scss` file that is imported into all the component style files, in order to reference our custom bootstrap theme with variables correlating to various color palettes. All colors used must be referenced from here as a variable for use in any styles.

3. The components all have their own style files and must reference them as such, with the styles in the file wrapped in a parent class representing the component itself with proper nesting.

  

### Translation

  

1. All written language in the application must be referenced using translations.

2. The `translations` folder contains files correlating to translated languages.

3. The only file we currently have is the `translation.json` file in the `en` folder for English. It uses key values based on the component name, then keys for each translated word or sentence in the file.

4. Within the component file, you can reference the translation by passing in the name of the component key and then get a function you can pass keys for the translations within that component section to get the values.

5. These helper functions are located in the `translate.js` file in the `utils` folder. The main helper you will use is `translateComponent` where you will pass the component name in and get a function back.

  

### Components

  

1. Naming Convention

* Each component has the same structure. The name of the component is the folder that contains the files. Each folder contains at minimum an `index.js`. If you need to access state or produce side effects, you will need a `component.js`. If you need custom styling you will also have an `index.scss`. Other files can be evaluated as needed if they are specific to the component.

* The `index.js` houses the container or "smart component". If there is no prop access or side effects this can simply be the render component.

* The `component.js` contains the render component or "dumb component". It should simply accept props and render, based on those props. Same props in, same rendered component out each time.

  

2. Styling

* Bootstrap accomplishes a lot of styling with automatic responsiveness and helper classes to use for each of margin, padding, and various things.

* If custom styling is needed, it will be housed in the `index.scss` file. Within this file, the `variables.scss` file should be imported to access the custom theme and colors, and all styles will be wrapped in a parent class that is present on the top level tag inside the component file. All styles should be based on classes with proper nesting. If the styles are not nested in a parent class, they could bleed and affect other components across the app as the styles are bundled into a single file.

  

3. Container Structure and Practices

* If needed, the container is housed in the `index.js` file. The name of the component should be the "ComponentName" + Container, e.g. `AppContainer`.

* The render component should be imported from the `component.js` and returned with all necessary props passed into it.

* All state is access using `useSelector` from `react-redux` and state functions. It can also be created and tracked using `useState` as needed.

* Service calls and side effects are handled in here as well using `useService`, `useServiceCommand`, and `useEffect`.

* All handler and callback functions should be set up in here using `useCallback` or simple curried functions.

  

4. Component Structure and Practices

* The `component.js` or the file containing the render component will accept props and use those to render the component. Whatever props are needed for rendering should be outline in the Component.propTypes object at the bottom of the file.

* Utilize bootstrap for styling and responsiveness as needed

* The components should be broken up into small functional units within the file, for ease of extensibility and readability.

  

### Forms

  

1. Forms are handled using a hooks based approach. An example usage is in the Login component.

  

### Loading

  

1. Loading should be done on initial renders and any side effects where the component needs the results or a service call or some other asynchronous function.

2. Pass in a single loading prop into the render component and use a loader. If it is a top level loading sequence, use the `Loader` component. However, if individual components need to load on the page without disruption, use the `ShadowLoader` component with the preferred type. It will automatically scale based on screen size.

  

# Contribute

  

The main branch for this repository is `master`

  

Feel free to submit pull requests for any standards you'd like to see implemented in our front end projects.
