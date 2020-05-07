import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import "normalize.css";
import './index.scss';
import "../api/firebase";
import App from './App';
import store from "./store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// if (module.hot) {
//     module.hot.accept();
// }
