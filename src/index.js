import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './redux/usersReducer';
import GlobalStyle from './styles/globalStyles';

export const store = configureStore({
  reducer: { users:usersReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <App />
  </Provider>,
  document.getElementById("root")
);
