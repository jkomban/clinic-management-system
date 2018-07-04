import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import AppRoutes from './routes'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App>
        <AppRoutes />
    </App>,
    document.getElementById('root'));
registerServiceWorker();
