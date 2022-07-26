import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18';
import ThemeContextProvider from './context/ThemeContext';
import { Provider } from "react-redux"
import { store } from "./store/store"
import { ApolloProvider } from "@apollo/client"
import { client } from 'services/apollo';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Provider store={store}>
        <ApolloProvider client={ client }>
          <App />
        </ApolloProvider>
      </Provider>
    </ThemeContextProvider>
  </React.StrictMode>
);

