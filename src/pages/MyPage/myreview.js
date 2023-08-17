import { useState,useEffect } from "react";
import OffcanvasExample from "../../component/bar/bar";
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

function MyReview() {
    //user_id 임시 구현 - 리뷰 data에서 아이디에 맞는 리뷰들만 골라오기 
    let user_id = 2;
    const [ reviews, setReviews ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3005/notes')
            .then(response => {
                setReviews(response.data);
            });
    }, []);
    
    function reviewList(reviews) {
        return reviews.map((review,index) =>{   
            if (review.user_id === user_id)
                return (
                    <ListGroup.Item key={index}>
                        <div>{index+1}</div>
                        <div>title : {review.title}</div>
                        <div>text : {review.text}</div>
                    </ListGroup.Item>
                );
        });
    };
    
  return (
    <>  
        <div id='searchbar'>
            <OffcanvasExample />
        </div>
        <h1>리뷰 작성 내역</h1>
        <ListGroup variant="flush">
                {reviewList(reviews)}
        </ListGroup>
    </>
  );
    
}

export default MyReview;