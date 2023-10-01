import React from 'react';
import headerimg from '../../assets/imgs/header-img.png';
import "./header.css";


function header() {
    return (
        <div className='header-sec '>
            <div className="container mx-auto relative">
                <div className="header-contant grid-1 grid gap-4 md:grid-cols-2 lg:grid-cols-2 ">
                    <div className="header-desc">
                        <h1>اختار يلي  <span>بخلصك <br></br></span>من مره وحده!</h1>
                        <p>ما تشيل هم كلمنا بنساعدك <br></br>احجز خدمة مضمونة بكبسة زر</p>
                        <div className=" ms-auto " >
                        <a href="#" className="header-btn items-center  "> تواصل معنا </a>
                    </div>
                    </div>
                    <div className="header-img">
                      <img src={headerimg}></img>
                    </div>
                </div>
                 <div className="header-color"></div>

            </div>
        </div>

    )
}

export default header;