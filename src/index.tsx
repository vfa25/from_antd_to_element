import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducer'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './style/layout.less'

// declare var window: Window & { devToolsExtension: any }

export * from 'redux'
export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk, logger)
        // window.devToolsExtension ? window.devToolsExtension() : () => {}
    )
)

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
