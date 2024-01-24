import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './components/Login/Login.jsx';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
//if (session is active){
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      {/*<LoginPage />*/}
    </BrowserRouter>
  </Provider>
);
// <<<<<<< frontend

// function hasAccount(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <App />;
//   }
//   return <LoginPage />;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Provider store={store}><BrowserRouter><hasAccount isLoggedIn={false} /> </BrowserRouter> </Provider>);
// =======
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
// >>>>>>> dev
