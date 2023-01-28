import React, { useEffect, useState } from 'react';
import './Qna.scss';

function Qna(props) {
    const { qnaList, setQnaList, index } = props || {};



    const listHandler = () => {
        let target = qnaList[index];
        if (!target.isOpen) {
            target.isOpen = true;
        }
        let temp = qnaList;
        temp[index].isOpen = target.isOpen;
        console.log(temp);
        setQnaList(temp);
    }

    useEffect(() => {
        console.log(qnaList);
    }, [qnaList[index].isOpen])

    return (
        <div id='Qna'>
            <div className="qna-header">
                <div className="qna-text-wrapper">{qnaList[index].title}</div>
                {
                    qnaList[index].isOpen ?
                        <div className="qna-button-wrapper">x</div>
                        :
                        <div className="qna-button-wrapper" onClick={() => listHandler()}>+</div>
                }
            </div>
            {
                qnaList[index].isOpen &&
                <div className="qna-answer">
                    {qnaList[index].data}
                </div>
            }
        </div>
    );
};

export default Qna;