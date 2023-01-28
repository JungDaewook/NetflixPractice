import React from 'react';
import './Banner.scss'
function Banner(props) {
    return (
        <div id='Banner'>
            <div className="banner-content-wrapper">
                <div className="new-text">New!</div>
                <div className="price-text"><b>5,500원</b>이면 지금 시작할 수 있습니다.</div>
                <div className="detail-text">자세히 알아보기 --</div>
            </div>
        </div>
    );
}

export default Banner;