import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {
    BrowserRouter, 
    Switch, 
    Route,
} from 'react-router-dom'
import SectionEdit from './components/SectionEdit'


if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
                <Switch>
                    <Route exact path="/:id/edit" component={SectionEdit} />
                    <App />
                </ Switch>
        </BrowserRouter>,
        document.getElementById('root'))
}