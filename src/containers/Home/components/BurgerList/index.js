import React, { Component } from 'react'
import BurgerItem from '../BurgerItem'
import dataSource from './dataSource'
import './style.css'
import Loading from '../../../../components/Loading';

class BurgerList extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
            data: dataSource,
            loadCounts: 1,
        }
        this.removeListener = false
    }

    render() {
        const { pageCount } = this.props
        return (
            <div className="likeList" ref={this.myRef}>
                <div className="likeList__header">Burger Restaurant Nearby</div>
                <div className="likeList__list">
                    {this.state.data.map((item, index) => {
                        return <BurgerItem key={index} id={item.id} data={item} />
                    })}
                </div>
                <a className="likeList__viewAll" href="/">view more</a>
            </div>
        )
    }

    componentDidMount() {
        const { pageCount } = this.props
        if (pageCount < 3) {
            document.addEventListener('scroll', this.handleScroll)
        } else {
            this.removeListener = true
        }
        if (this.props.pageCount === 0) {
            this.props.loadLikes()
        }
    }

    handleScroll = () => {
        // 组件首页可视高度 = 当前窗口高度 - 组件offsetTop
        const visibleHeight =
        document.documentElement.clientHeight - this.myRef.current.offsetTop
        // 组件实际高度
        const actualHeight = this.myRef.current.offsetHeight
        // 滚动高度
        const scrollHeight = document.documentElement.scrollTop
        // 可视高度 + 滚动高度 >= 组件实际高度时就加载
        if (scrollHeight + visibleHeight >= actualHeight) {
            this.props.loadLikes()
        }
    }

    componentDidUpdate() {
        const { pageCount } = this.props
        if (!this.removeListener && pageCount >= 3) {
            document.removeEventListener('scroll', this.handleScroll)
            this.removeListener = true
        }
    }

    componentWillUnmount() {
        if (!this.removeListener) {
            document.removeEventListener('scroll', this.handleScroll)
            this.removeListener = true
        }
    }
}

export default BurgerList
