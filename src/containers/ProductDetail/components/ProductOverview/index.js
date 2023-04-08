import React, { Component } from 'react'
import './style.css'

class ProductOverview extends Component {
    render() {
        const {
            id,
            picture,
            shop,
            product,
            averagePrice,
            phoneNumber,
            specialty
        } = this.props.data
        return (
            <div className="productOverview">
                <div className="productOverview__header">
                    <div className="productOverview__imgContainer">
                        <img
                            alt=""
                            className="productOverview__img"
                            src={picture}
                        />
                        <div className="productOverview__info">
                            <div className="productOverview__item">
                                <div className="productOverview__cell">Average Price:</div>
                                <div>{averagePrice}</div>
                            </div>
                            <div className="productOverview__item">
                                <div className="productOverview__cell">Phone Number:</div>
                                <div>{phoneNumber}</div>
                            </div>
                            <div className="productOverview__item">
                                <div className="productOverview__cell">specialty:</div>
                                <div>{specialty}</div>
                            </div>
                        </div>
                    </div>
                    <div className="productOverview__baseInfo">
                        <div className="productOverview__title">{shop}</div>
                        <div className="productOverview__content">
                            {product}
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ProductOverview
