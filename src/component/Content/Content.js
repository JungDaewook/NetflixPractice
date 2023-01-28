import React, { useState } from 'react';
import './Content.scss'
import ContentDetail from './ContentDetail/ContentDetail';
import Qna from './Qna/Qna';

function Content(props) {

    const [qnaList, setQnaList] = useState([
        { title: '넷플릭스란 무엇인가 ?', data: 'asdasdsaaadsdassadasdads', isOpen: false },
        { title: '넷플릭스란 무엇인가 ?', data: 'asdasdsaaadsdassadasdads', isOpen: false },
        { title: '넷플릭스란 무엇인가 ?', data: 'asdasdsaaadsdassadasdads', isOpen: false },
    ]);




    return (
        <div id='Content'>
            <div className="content-start-wrapper">
                <div className="start-header-wrapper">
                    <div className="logo-wrapper">
                        NETFLIX
                    </div>
                    <div className="btn-wrapper">
                        <div className="language-btn">한국어</div>
                        <div className="login-btn">로그인</div>
                    </div>
                </div>
                <div className="input-text-wrapper">
                    <div className="text-row big">영화와 시리즈를</div>
                    <div className="text-row big">무제한으로.</div>
                    <div className="text-row">다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</div>
                    <div className="text-row">시청할 준비가 되셨나요? 블라블라블라</div>
                </div>
                <div className="input-wrapper">
                    <input type="text" className="email-input" placeholder='이메일 주소' />
                    <div className="start-btn">시작하기</div>
                </div>
            </div>
            <div className="content-detail-wrapper">
                <ContentDetail way='normal' />
                <ContentDetail way='reverse' />
            </div>
            <div className="content-qna-wrapper">
                <div className="qna-title-wrapper">
                    자주 묻는 질문
                </div>
                <div className="qna-component-wrapper">
                    {
                        qnaList.map((li, index) => {
                            return (
                                <Qna key={index} index={index} qnaList={qnaList} setQnaList={setQnaList} />
                            )
                        })
                    }
                </div>
                <div className="readytext-wrapper">
                    시청할 준비가 되셧나요? 멤버십을 등록하거나 재시작하면 이메일 주소를 입력하세요.
                </div>
                <div className="input-email-wrapper">
                    <input type="text" className="email-input" placeholder='이메일 주소' />
                    <div className="start-btn">시작하기</div>
                </div>

            </div>
        </div>
    );
}

export default Content;