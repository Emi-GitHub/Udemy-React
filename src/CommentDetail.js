import React from 'react'

function CommentDetail(props) {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.img} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.name}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.text}</div>
            </div>
        </div>
    );
}

export default CommentDetail;
