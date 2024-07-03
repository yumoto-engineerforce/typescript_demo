import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './state/store';
import GlobalStyle from './assets/styles/GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea',
    },
  },
});

root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </>
);