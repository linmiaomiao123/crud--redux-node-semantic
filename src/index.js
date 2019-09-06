import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
/**redux工具调试 */
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

/**路由 */
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

/**组件 */
import GamesPage from './components/GamesPage'


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
)

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <div className='ui container'>
        <div className='ui three item menu'>
          <NavLink exact activeClassName='active' className='item' to='/'>Home</NavLink>
          <NavLink exact activeClassName='active' className='item' to='/games'>Games</NavLink>
          <NavLink activeClassName='active' className='item' to='/games/new'>Add New Game</NavLink>
        </div>
        <Route exact path='/' component={ App } />
        <Route exact path='/games' component={ GamesPage } />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
