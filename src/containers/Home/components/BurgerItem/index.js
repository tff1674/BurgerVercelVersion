import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class BurgerItem extends Component {
    render() {
        const {
            id,
            shop,
            tag,
            picture,
            product,
            score,
            comment,
            distance,
            saleDesc
        } = this.props.data
        return (
            <Link className="Item" to={`/detail/${id}`}>
                <div className="Item__picContainer">
                    <div className="Item__picTag">{tag}</div>
                    <img className="Item__pic" src={picture} alt="加载"/>
                </div>
                <div className="Item__content">
                    <div className="Item__shop">{shop}</div>
                    <div className="Item__product">{product}</div>
                    <div className="Item__distance">{distance} away from you</div>
                    <div className="Item__detail">
                        <div className="Item__info">
                            <div className="Item__score">{score}</div>
                            <div className="Item__comment">"{comment}"</div>
                        </div>
                        <div className="Item__sale">{saleDesc}</div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default BurgerItem
