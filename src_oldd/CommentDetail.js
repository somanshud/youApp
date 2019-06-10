import React from 'react';
//import faker from 'faker';

const CommentDetail = (props)=>{
    console.log(props);
    return(
        <div className="commment">
            <a href="/" className="avatar">
                <img alt="Sam" src={ props.avtar }/>
            </a>
            <div className="content">
                <a href="/" className="author">{props.author}</a>
            </div>
            <div className="metadata">
                <span className="date">{ props.timeAgo}</span>
            </div>
            <div className="text">
                {props.userComment}
            </div>
        </div>
    );
};

export default CommentDetail;