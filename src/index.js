import './assets/stylesheets/styles.scss';

import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import App from './app/App.jsx'; // import the main app component
import {Provider} from 'react-redux';

ReactDOM.render(<Provider>  
                <App />
                </Provider>, 
                document.getElementById('root')); // render our App component and mount it to our #root element
