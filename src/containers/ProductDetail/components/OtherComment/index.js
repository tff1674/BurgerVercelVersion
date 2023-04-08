import React, { Component } from 'react'
import './style.css'

class OtherComment extends Component {
    render() {
        const { comment } = this.props.data;
        return (
            <div className="comment__wrapper">
                <div className="title">Other Comments</div>
                {comment.map((item) => 
                    <div>
                        <div className="comment__detail">
                            <img src={item.avatar} className="avatar"/>
                            <div className="name">{item.name}</div>
                        </div>
                        <div className="content">{item.content}</div>
                        <div className="seperate"></div>
                    </div>
                )}
            </div>
        )
    }
}

export default OtherComment
