import React, { Component } from 'react'
import './style.css'

class Detail extends Component {
    render() {
        const {
          businessHour,
          location  
        } = this.props.data
        return (
            <div className="detail">
                <div className="detail__info">
                    <div className="detail__item">Business Hour: {businessHour}</div>
                    <div className="detail__item">Location: {location}</div>
                </div>
            </div>
        )
    }
}

export default Detail
