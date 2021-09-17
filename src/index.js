import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { ThemeContext, ThemeContextProvider } from './contexts/ThemeContext';

const { isPartyMode, partyMode, basic } = useContext(ThemeContext);
const theme = isPartyMode ? partyMode : basic;

ReactDOM.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <React.StrictMode>
        <div style={{ backgroundColor: theme.mainBG }}>
          <App />
        </div>
      </React.StrictMode>
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
