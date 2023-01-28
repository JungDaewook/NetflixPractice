import React, { useEffect, useState } from 'react';
import "./ContentDetail.scss"

function ContentDetail(props) {

    const [way, setWay] = useState('row');

    useEffect(() => {
        if (props.way === 'reverse') {
            setWay('row-reverse');
        }
    }, [props.way]);

    return (
        <div id='ContentDetail' style={{ flexDirection: way }}>
            <div className="content-text-wrapper">
                <div className="content-text big">TV로 즐기세요.</div>
                <div className="content-text small">스마트 TV, PlayStaion,Xbox, Chromecast, AppleTc, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</div>
            </div>
            <div className="content-image">
                사진
            </div>
        </div>
    );
}

export default ContentDetail;