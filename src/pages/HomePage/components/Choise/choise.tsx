import React from 'react'
import choiseimg from '../../../../assets/imgs/choise.png';
import chat from '../../../../assets/imgs/Chat.png';
import date from '../../../../assets/imgs/Date.png';
import edit from '../../../../assets/imgs/Edit.png';
import alt from '../../../../assets/imgs/alt.png';
import lines from '../../../../assets/imgs/lines.png';
import rightlines from '../../../../assets/imgs/Group.png';
import './choise.css';




function choise() {
    return (
        <div className=" choise-sec ">
            <div className="container mx-auto">
                <div className="main-title ">
                    <img src={rightlines} alt="lines"></img>
                    <h1> لماذا تختارنا </h1>
                    <img src={lines} alt="lines"></img>
                </div>
                <div className="  grid-1 grid gap-4 md:grid-cols-2 lg:grid-cols-2  ">
                    <div className="choise-img ">
                        <img src={choiseimg}></img>
                    </div>
                    <div className="choise-features ">
                        <div className="features ">
                            <div className="feat-icon">
                                <img src={edit}></img>
                            </div>
                            <div className="feat-desc">
                                <span>الموثقية</span>
                                <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>
                            </div>
                        </div>
                        <div className="features ">
                            <div className="feat-icon">
                                <img src={date}></img>
                            </div>
                            <div className="feat-desc">
                                <span>الحجز اونلاين</span>
                                <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>
                            </div>
                        </div>
                        <div className="features ">
                            <div className="feat-icon">
                                <img src={alt}></img>
                            </div>
                            <div className="feat-desc">
                                <span>خصومات دائمة</span>
                                <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>
                            </div>
                        </div>
                        <div className="features ">
                            <div className="feat-icon">
                                <img src={chat}></img>
                            </div>
                            <div className="feat-desc">
                                <span>دعم متواصل</span>
                                <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div >

    )
}

export default choise;