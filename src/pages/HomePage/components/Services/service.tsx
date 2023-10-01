import React from 'react';
import lines from "../../../../assets/imgs/lines.png";
import rightlines from "../../../../assets/imgs/Group.png"
import service1 from "../../../../assets/imgs/ser1.png";
import service2 from "../../../../assets/imgs/ser2.png";
import service3 from "../../../../assets/imgs/ser3.png";
import service4 from "../../../../assets/imgs/ser4.png";
import service5 from "../../../../assets/imgs/ser5.png";
import service6 from "../../../../assets/imgs/ser6.png";
import vector from "../../../../assets/imgs/vector.png";

import './service.css';



function service() {
    return (
        <div className='service-sec '>
            <div className="container mx-auto  ">
                <div className="main-title text-center">
                    <img src={rightlines} alt="lines"></img>
                    <h1>  الخدمات التي نقدمها  </h1>
                    <img src={lines} alt="lines"></img>
                </div>
                <div className="service-cards grid lg:grid-cols-3 md:grid-cols-2 gap-16 grid-rows-2   ">
                    <div className="service-card  ">
                        <img className="ser-img" src={service1} alt=" "></img>
                        <h3 className="font-bold "> تنظيف المنزل</h3>

                        <div className="card-desc">
                            <p className="">
                                ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..
                            </p>

                        </div>
                        <div className="view">
                            <a href="#" className="view-link  ">رؤية المزيد</a>
                            <img className="vector-img" src={vector} alt="vector " ></img>
                        </div>


                    </div>
                    <div className="service-card  ">
                        <img className="ser-img" src={service2} alt=" "></img>
                        <h3 className="font-bold ">  التنظيف التجاري</h3>

                        <div className="card-desc">
                            <p className="">
                                ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..
                            </p>

                        </div>
                        <div className="view">
                            <a href="#" className="view-link  ">رؤية المزيد</a>
                            <img className="vector-img" src={vector} alt="vector " ></img>
                        </div>


                    </div>
                    <div className="service-card  ">
                        <img className="ser-img" src={service3} alt=" "></img>
                        <h3 className="font-bold ">تنظيف السجاد </h3>

                        <div className="card-desc">
                            <p className="">
                                ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..
                            </p>

                        </div>
                        <div className="view">
                            <a href="#" className="view-link  ">رؤية المزيد</a>
                            <img className="vector-img" src={vector} alt="vector " ></img>
                        </div>


                    </div>
                    <div className="service-card  ">
                        <img className="ser-img" src={service4} alt=" "></img>
                        <h3 className="font-bold "> تنظيف النوافذ</h3>

                        <div className="card-desc">
                            <p className="">
                                ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..
                            </p>

                        </div>
                        <div className="view">
                            <a href="#" className="view-link  ">رؤية المزيد</a>
                            <img className="vector-img" src={vector} alt="vector " ></img>
                        </div>


                    </div>
                    <div className="service-card  ">
                        <img className="ser-img" src={service5} alt=" "></img>
                        <h3 className="font-bold "> تنظيف السيارات</h3>

                        <div className="card-desc">
                            <p className="">
                                ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..
                            </p>

                        </div>
                        <div className="view">
                            <a href="#" className="view-link  ">رؤية المزيد</a>
                            <img className="vector-img" src={vector} alt="vector " ></img>
                        </div>


                    </div>
                    <div className="service-card  ">
                        <img className="ser-img" src={service6} alt=" "></img>
                        <h3 className="font-bold "> تنظيف بعد البناء</h3>

                        <div className="card-desc">
                            <p className="">
                                ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..
                            </p>

                        </div>
                        <div className="view">
                            <a href="#" className="view-link  ">رؤية المزيد</a>
                            <img className="vector-img" src={vector} alt="vector " ></img>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}

export default service;