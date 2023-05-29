import React from 'react'
import About from './About'
import Error from './Error'
import Home from './Home'
import NavBar from './NavBar'
import People from './People'
import Person from './Person'
import {BrowserRouter as Router,Route,Switch}  from "react-router-dom"
// we have learn another keyword exact path that help to load only that page
function ReactRouterDom() {
    return (
        <Router>
            <NavBar/>
            <Switch>
            <Route exact path='/'>     
                <Home/>
            </Route>
            <Route path='/About'>
                <About/>
            </Route>
            
            <Route path='/People'>
                <People/>
            </Route>
            
            <Route path='/Person/:id' children={<Person/>}/>
            
            <Route path='*'>
                <Error/>
            </Route>
            </Switch>
            
        </Router>
    )
}

export default ReactRouterDom
