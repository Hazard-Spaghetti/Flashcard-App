import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
//if (session is active){
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
//}
//else if (session is not active){
// root.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <Login />
//     </BrowserRouter>
//   </Provider>
// );
//}
