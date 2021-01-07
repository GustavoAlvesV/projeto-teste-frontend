import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import Home from '../home/home'
import Services from '../services/services'
import Employees from '../employees/employees'
import Customers from '../customers/customers'
import AuthOrApp from './authOrapp'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Home} />
            <Route path='services' component={Services} />
            <Route path='customers' component={Customers} />
            <Route path='employees' component={Employees} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)