This is boilerplate code for React Redux web applications

It uses Webpack 4, React 16, Redux, Bootstrap 4, ESLint with StandardJS, Sagas, Jest, and Storybook

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

To run storybook:
```
npm run story
```
then navigate to localhost:9998

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