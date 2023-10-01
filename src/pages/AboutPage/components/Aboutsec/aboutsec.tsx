
import React from "react";
import mainimg from "../../../../assets/imgs/main.png";
import lines from "../../../../assets/imgs/lines.png";
import "./aboutsec.css"; 
import { Link } from "react-router-dom";


const aboutsec = () => {
    return (
        <div className=" about-sec ">
            <div className="container mx-auto grid-1 grid gap-4 md:grid-cols-2 lg:grid-cols-2 ">
                <div className="description ">
                    <div className="secondary-title">
                        <h1>  من نحن </h1>
                        <img src={lines} alt="lines"></img>
                    </div>
                    <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. <br></br> إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة</p>
                    <div className=" ms-auto " >
                    <Link to ='/contact' className="des-btn items-center  "> تواصل معنا </Link>
                    </div>
                </div>

                <div className="main-img grid grid-cols-1 ">
                    <img src={mainimg} alt="girl-img" className=""></img>
                </div>


            </div>
        </div >
    );
};

export default aboutsec;
