import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function homepage() {
  return (
    <div>
        
        <Carousel>
            <Carousel.Item>
                <div className='slidercontents'>
                    <div className='wrapText'>
                        <h1>Organic fresh fruits for your health</h1>
                        <div className="d-none d-md-block">
                            <p>Interdum et malesuada fames ac ante ipsum primis in 
                            faucibus. Mauris eleifend sagittis mollis. 
                            Nulla finibus arcu eu tortor gravida aliquet</p>
                        </div>
                        <Link to="/p/1">
                            <button>즉시 예약하기</button>
                        </Link>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='slidercontents2'>
                    <div className='wrapText'>
                        <h1>Organic fresh fruits for your health</h1>
                        <div className="d-none d-md-block">
                            <p>Interdum et malesuada fames ac ante ipsum primis in 
                            faucibus. Mauris eleifend sagittis mollis. 
                            Nulla finibus arcu eu tortor gravida aliquet</p>
                        </div>
                        <Link to="/p/2">
                            <button>즉시 예약하기</button>
                        </Link>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='slidercontents3'>
                    <div className='wrapText'>
                        <h1>Organic fresh fruits for your health</h1>
                        <div className="d-none d-md-block">
                            <p>Interdum et malesuada fames ac ante ipsum primis in 
                            faucibus. Mauris eleifend sagittis mollis. 
                            Nulla finibus arcu eu tortor gravida aliquet</p>
                        </div>
                        <Link to="/p/3">
                            <button>즉시 예약하기</button>
                        </Link>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>

        <br></br>
        <br></br>
        <br></br>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <Link to="/gym" style={{ textDecoration: 'none' }}>
                        <ul className="gym">
                            <img src="img/gym.png" />
                            <p>체육시설</p>
                        </ul>
                    </Link>
                </div>

                <div class="col">
                    <Link to="/space">
                        <ul className="space" style={{ textDecoration: 'none' }}>
                            <img src="img/meething-room.png" />
                            <p>공간시설</p>
                        </ul>
                    </Link>
                </div>

                <div class="col">
                    <Link to="/culture" style={{ textDecoration: 'none' }}>
                        <ul className="culture">
                            <img src="img/theatre.png" />
                            <p>문화시설</p>
                        </ul>
                    </Link>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default homepage;