import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class HomeHeader extends Component {
    render() {
        return (
            <div className="homeHeader">
                <header className="homeHeader__wrapper">
                    <Link to="/search" className="homeHeader__search">Find burger places</Link>
                    <Link to="/login" className="homeHeader__self">
                        <div className="homeHeader__portrait" />
                    </Link>
                </header>
            </div>
        )
    }
}

export default HomeHeader
