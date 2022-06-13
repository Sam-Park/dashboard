// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './index.css';

// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(`ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkNiWn5YcnVQRGdYVkw=`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
