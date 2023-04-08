import React, { Component } from 'react'
import './style.css'

class SearchHeader extends Component {
    render() {
        const { onBack } = this.props
        return (
            <header className="searchHeader">
                <div className="searchHeader__back" onClick={onBack} />
            </header>
        )
    }
}

export default SearchHeader
