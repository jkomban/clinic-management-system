import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import AppRoutes from './routes'
import registerServiceWorker from './registerServiceWorker';
import store from './store/configureStore'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App>
            <AppRoutes />
        </App>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
