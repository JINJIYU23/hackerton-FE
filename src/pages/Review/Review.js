import { useState }  from 'react';
import React from 'react';

let [userName] = useState('user');
let [review, setReview] = useState('');
let [feedReviews, setFeedReviews] = useState([]);
let [isvalid, setIsValid] = useState(false);

let post = e => {
    const copyFeedReveiws = [...feedReviews];
    copyFeedReveiws.push(review);
    setFeedReviews(copyFeedReveiws);
    setReview('');
}

//리뷰 창
<div>
    <Input
        type = "text"
        className = "inputComment"
        placeholder="리뷰 작성..."
        onChange = {e => {
            setReview(e.target.value);
        }}
        onKeyUp={e => {
            e.target.value.length > 0
                ? setIsValid(true)
                : setIsValid(false);
        }}
    />

    <button
        type="button"
        className={
            review.length > 0
            ? 'submitReviewActive'
            : 'submitReviewActive'
        }
        onClick={post}
        disabled={isvalid ? false : true}
        >
        게시
        </button>
</div>

{feedReviews.map((reviewArr, i) => {
    return (
        <ReviewList
            userName={userName}
            userReview={reviewArr}
            key = {i}
            />
    );
})}

//반복적 리뷰들 컴포넌트화
const ReviewList = props => {
    return (
        <div className='userReviewBox'>
            <p className='userName'>{props.userName}</p>
            <div className='userReview'>{props.userReview}</div>
            <p className='userHeart'>
                <FaHeart/>
            </p>
        </div>
    );
};