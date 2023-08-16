import React from 'react';
import OffcanvasExample from '../../component/Iconbar/IconBar';
import './Gym.css';
function GymPage() {
    return (
        <div>
            <OffcanvasExample />
            <div className="map-container">
                <div className="map-box">
                    <img src="/img/map-image.jpg" alt="지도 이미지" />
                </div>
            </div>
            <div className="place-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>장소 이름</th>
                            <th>주소</th>
                            <th>전화번호</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>체육관 1</td>
                            <td>서울시 강남구</td>
                            <td>02-123-4567</td>
                        </tr>
                        <tr>
                            <td>체육관 2</td>
                            <td>서울시 종로구</td>
                            <td>02-987-6543</td>
                        </tr>
                        {/* 다른 장소 정보도 추가 가능 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GymPage;
