import Accordion from 'react-bootstrap/Accordion';
import KitchenSinkExample from './MyInfo';
import './accordion.scss';
import { useState } from 'react';

function AlwaysOpenExample() {
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
    <Accordion  defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>회원 정보</Accordion.Header>
        <Accordion.Body className='acco_body'>
            <KitchenSinkExample className="card_"/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>기록</Accordion.Header>
        <Accordion.Body>
            <p>내가 썼던 리뷰</p>
            <ul>
                {reviewList(reviews)}
            </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AlwaysOpenExample;