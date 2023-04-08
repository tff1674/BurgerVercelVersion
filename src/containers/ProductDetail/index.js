import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductOverview from './components/ProductOverview';
import Detail from './components/Detail';
import Comment from './components/Comment';
import Header from '../../components/Header'
import UploadImg from './components/UploadImg';
import OtherComment from './components/OtherComment';
import dataSource from './dataSource'
import { actions, getProduct, getRelatedShop } from '../../redux/modules/detail'
import './style.css'

class ProductDetail extends Component {
    submit() {
        // post comments and picture url to server
    }
    render() {
        const { product } = this.props

        return (
            <div>
                <Header title={"detail"} onBack={this.handleClick}/>
                {product && <ProductOverview data={dataSource.find((item)=>item.id === this.props.match.params.id)} />}
                {product && (<div>
                    <Detail data={dataSource.find((item)=>item.id === this.props.match.params.id)}/>
                    <div className="comment__taste">
                        <div>Taste: </div>
                        <Comment />
                    </div>
                    <div className="comment__taste">
                        <div>Texture: </div>
                        <Comment />
                    </div>
                    <div className="comment__taste">
                        <div>Appearance: </div>
                        <Comment />
                    </div>
                </div>) }
                <UploadImg />
                <div className="submit" onClick={this.submit}>Submit</div>
                <OtherComment data={dataSource.find((item)=>item.id === this.props.match.params.id)}/>
            </div>
        )
    }

    handleClick = () => {
        this.props.history.goBack();
    }

    componentDidMount() {
        const { product } = this.props
        if (!product) {
            const productId = this.props.match.params.id
            this.props.loadProductDetail(productId)
        }
    }

}

const mapStateToProps = (state, props) => {
    const productId = props.match.params.id
    return {
        product: getProduct(state, productId),
        relatedShop: getRelatedShop(state, productId)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadProductDetail: (id) => {
            dispatch(actions.loadProductDetail(id))
        },
        loadRelatedShop: (id) => {
            dispatch(actions.loadRelatedShop(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
