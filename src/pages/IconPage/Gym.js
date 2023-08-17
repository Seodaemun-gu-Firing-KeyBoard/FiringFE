import React from 'react';
import OffcanvasExample from '../../component/Iconbar/IconBar';
import './Gym.css';
import data from '../../data.json';
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
                        {data.locs.map((place) => (
                            <tr key={place.id}>
                            <td>{place.name}</td>
                            <td>{place.method}</td>
                            <td>{place.info}</td>
                        </tr>
                        
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GymPage;
