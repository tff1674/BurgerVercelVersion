import React, { Component } from 'react'
import './style.css'

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startIndex: 0
        }
    }
    /**
   * 点击评分
   */
  doEva(i) {
    this.setState({
      startIndex: i + 1
    });
  }
  /**
   * 渲染评分用的星
   */
  renderStar() {
    let array = []
    for (let i = 0; i < 5; i++) {
      let cls = i >= this.state.startIndex ? "star-item" : "star-item-light"
      array.push(
        <div onClick={() => this.doEva(i)} key={i} className={cls}></div>
      )
    }
    return array
  }
  render() {
    return (
      <div className="content">
        <div className="star-area">
            {this.renderStar()}
        </div>
      </div>
    );
  }
}

export default Comment
