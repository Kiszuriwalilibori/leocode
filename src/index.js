import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './redux/usersReducer';

export const store = configureStore({
  reducer: { users:usersReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
