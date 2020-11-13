import React, {Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'

class Router extends Component {
    constructor(){
        super()
        this.state ={
            
        }
    }

    componentDidMount(){}

    render(){
        return(
            <main>
                <h1>HELLO</h1>
            </main>
        )
    }

}

export default withRouter(Router);

