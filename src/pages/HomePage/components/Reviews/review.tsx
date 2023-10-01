import React from 'react'
import lines from '../../../../assets/imgs/lines.png';
import rightlines from '../../../../assets/imgs/Group.png';
import clint1 from '../../../../assets/imgs/clint1.jpeg';
import clint2 from '../../../../assets/imgs/clint2.jpeg';
import clint3 from '../../../../assets/imgs/clint3.jpeg';
import qute1 from '../../../../assets/imgs/qute1.png';
import qute2 from '../../../../assets/imgs/qute2.png';


import './review.css';



function review() {
    return (
        <div className='review-sec '>
            <div className="container mx-auto ">
                <div className="main-title text-center">
                    <img src={rightlines} alt="lines"></img>
                    <h1>ماذا يقولون عملائنا     </h1>
                    <img src={lines} alt="lines"></img>
                </div>
                <div className="review-cards    grid lg:grid-cols-3 md:grid-cols-2  gap-16">
                    <div className="review-card ">
                        <img className="review-img  m-auto" src={clint1} alt="clint"></img>
                            <div className="review-desc px-6 py-4">
                                <p className="">
                                ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
                                </p>
                                <h6 className=" ">محمد احمد</h6>
                            </div>
                            <img className="qute1  m-auto" src={qute1 } alt="qute"></img>
                            <img className="qute2  m-auto" src={qute2 } alt="qute"></img>
                    </div>
                    <div className="review-card ">
                        <img className="review-img  m-auto" src={clint2} alt="clint"></img>
                            <div className="review-desc px-6 py-4">
                                <p className="">
                                ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
                                </p>
                                <h6 className=" ">محمد احمد</h6>
                            </div>
                            <img className="qute1  m-auto" src={qute1 } alt="qute"></img>
                            <img className="qute2  m-auto" src={qute2 } alt="qute"></img>
                    </div>
                    <div className="review-card ">
                        <img className="review-img  m-auto" src={clint3} alt="clint"></img>
                            <div className="review-desc px-6 py-4">
                                <p className="">
                                ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
                                </p>
                                <h6 className=" ">محمد احمد</h6>
                            </div>
                            <img className="qute1  m-auto" src={qute1 } alt="qute"></img>
                            <img className="qute2  m-auto" src={qute2 } alt="qute"></img>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default review