import { useState } from "react";
import OffcanvasExample from "../../component/bar/bar";

function MyReview() {
    const [reviews,setReviews] = useState([
        {
            title : "좋아요",
            text : "깨끗해여"
        },
        {
            title : "굿",
            text : "ㄱㄱ"
        }
      ]);
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
        <div id='searchbar'>
            <OffcanvasExample />
        </div>
        <h1>리뷰 리스트</h1>
        <div>
            <ul>
                {reviewList(reviews)}
            </ul>
        </div>
    </>
  );
    
}

export default MyReview;