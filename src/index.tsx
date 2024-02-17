import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './context/CardContext';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './context/UsersContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ContextProvider>
    <UsersProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UsersProvider>
  </ContextProvider >
);