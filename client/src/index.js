import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './containers/main';
import Auth from './containers/auth';
import Protected from './Routes/protectedRoutes';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import NotFound from './containers/NotFound';
import Feed from './containers/feed';
const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="" element={<Auth />} />
          <Route path="owns" element={<Protected Component={Main} />} />
          <Route path="feed" element={<Protected Component={Feed} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
