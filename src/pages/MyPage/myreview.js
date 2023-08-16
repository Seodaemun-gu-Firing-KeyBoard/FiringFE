import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Example from './MyModal';

function MyReview(props) {

    function reviewList(reviews) {
        return reviews.map((review,index) => {
           return (
                <li key={index}>
                    <div>{review.title}</div>
                    <div>{review.text}</div>
                </li>
           );
        });
    };
  return (
    <>
        <h1>리뷰 리스트</h1>
        <div>
            <ul>
                {reviewList(props.reviews)}
            </ul>
        </div>
    </>
  );
    
}

export default MyReview;