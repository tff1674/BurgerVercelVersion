import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AsyncComponent from '../../utils/AsyncComponent'
const Home = AsyncComponent(() => import('../Home'))
const ProductDetail = AsyncComponent(() => import('../ProductDetail'))
const Search = AsyncComponent(() => import('../Search'))
const SearchResult = AsyncComponent(() => import('../SearchResult'))
const Login = AsyncComponent(() => import('../Login'))
const User = AsyncComponent(() => import('../User'))

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router basename="/burger">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/detail/:id" component={ProductDetail} />
                        <Route path="/search" component={Search} />
                        <Route path="/search_result" component={SearchResult} />
                        <Route path="/user" component={User} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
