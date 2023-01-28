import React from 'react';
import Banner from '../Banner/Banner';
import Content from '../Content/Content';
import './Main.scss'
function Main(props) {
    return (
        <div id='Main'>
            <div className="banner-wrapper">
                <Banner />
            </div>
            <div className="content-wrapper">
                <Content />
            </div>
            <div className="footer-wrapper"></div>
        </div>
    );
}

export default Main;