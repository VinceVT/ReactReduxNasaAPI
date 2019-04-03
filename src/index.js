import './assets/stylesheets/styles.scss';

import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import App from './app/App'; // import the main app component
import {Provider} from 'react-redux';
import Store from './store';

ReactDOM.render(
    <Provider store={Store}> {/*glue for react and redux*/}  
        <App />
    </Provider>, 
    document.getElementById('root')); // mount it to our #root element
