This is boilerplate code for React Redux web applications

It uses Webpack 4, React 16, Redux, Bootstrap 4, ESLint with StandardJS + a11y, Sagas, and Jest
There is an implmentation for Login using JWT with refresh mechanisms and redux store initializing
This boilerplate is also implementated as a Progressive Web App. Modify the manifest.json and icon in the pwa folder to personalize

Works out of the box, just need to have Node, and NPM installed

To get started run the following commands to run the project locally:
```
npm install
npm run dev
```
then navigate to the localhost:{port}

To run the linter:
```
npm run lint
```
output in the console informing you of issues

To build for production:
```
npm run build
```
output into dist folder main.js, main.css, and index.html

To enable mock data from services, run:
```
window.enableMock() in your console or implement in your javascript
window.disableMock() turns it off
```