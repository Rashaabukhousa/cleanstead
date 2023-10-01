import './footer.css';
import React from 'react'
import phone from "../../assets/imgs/Phone.png";
import message from "../../assets/imgs/Message_duotone.png"
import facebook from "../../assets/imgs/Facebook.png"
import twitter from "../../assets/imgs/twitter.png"
import youtube from "../../assets/imgs/youtube.png"
import whatspp from "../../assets/imgs/whatspp.png"
import instagram from "../../assets/imgs/intagram.png"
import google from "../../assets/imgs/google.png"
import logoname from "../../assets/imgs/logo-name.png"
import logo from "../../assets/imgs/logo.png"
import pin from "../../assets/imgs/Pin.png"
import map from "../../assets/imgs/map.png"


const footer = () => {
  return (

    <footer className=" container  text-center lg:text-left mx-auto" >
    
    
      <div className="mx-6  text-center md:text-left">
        <div className="grid-1 grid gap-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="footer-col ">
            <div className='footer-logo '>
               <img   src={logoname} alt="logo name"  ></img>
               <img   src={logo} alt=" logo" ></img>
            </div>
            <p className= " clean-desc text-right "> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.</p>
          </div>
          <div className="footer-col ">
            <h6 className="col-header mb-4  flex justify-center font-semibold uppercase md:justify-start">
              خدماتنا
            </h6>
            <p className="mb-2 item flex items-center justify-center md:justify-start">
              <a href="#!" className="col-item">تنظيف المنازل</a>
            </p>
            <p className="mb-2 item flex items-center justify-center md:justify-start">
              <a href="#!" className="col-item">التنظيف التجاري</a>
            </p>
            <p className="mb-2 item flex items-center justify-center md:justify-start">
              <a href="#!" className="col-item">تنظيف السجاد</a>
            </p>
            <p className="mb-2 item flex items-center justify-center md:justify-start">
              <a href="#!" className="col-item">تنظيف النوافذ</a>
            </p>
            <p className="mb-2 item flex items-center justify-center md:justify-start">
              <a href="#!" className="col-item">تنظيف السيارات</a>
            </p>
            <p className="mb-2 item flex items-center justify-center md:justify-start">
              <a href="#!" className="col-item">تنظيف بعد البناء</a>
            </p>
          </div>
          <div className="footer-col">
           <a href="#!"> <h6 className="col-header mb-4 flex justify-center font-semibold uppercase md:justify-start">تواصل معنا  </h6></a>
              <div className="info-box mb-2 flex justify-between md:justify-start ">
              <img className=" me-1" src={phone} alt="phone-image"></img>
                <span  className=' phone-num'>0592700722</span>
              </div>
              <div className="info-box mb-2 flex justify-between md:justify-start ">
              <img className=" me-1 " src={message} alt="message-image"></img>
                <span className='email'>eng.mohammadal@gmail.com</span>
              </div>
         
          </div>

          <div className='footer-col'>
          <a href="#!"> <h6 className="col-header mb-4 flex justify-center font-semibold uppercase md:justify-start">تابعنا على</h6></a>
            <div className="social-icon mb-4 flex items-center  md:justify-start">
            <a href="#!">  <img src={facebook} alt="facebook logo" className=' '></img></a>
            <a href="#!">  <img src={twitter} alt="twitter logo" className=' me-1' ></img></a>
            <a href="#!">  <img src={youtube} alt="youtube logo" className=' me-1'></img></a>
            <a href="#!">  <img src={whatspp} alt="whatspp logo" className=' me-1'></img></a>
            <a href="#!"> <img src={instagram} alt="instagram logo" className=' me-1'></img></a>
            <a href="#!"><img src={google} alt="google logo" className=' me-1'></img></a>

           
            </div>
           <div className="map-sec mt-3 flex justify-between items-center">
           <img className="pin me-1 " src={pin} alt="pin-image"></img>
           <img className="map me-1 " src={map} alt="map-image"></img>
           </div>
        
           
          </div>
        </div>
      </div>
    

      <div className="line flex items-center  justify-center border-b-2 border-neutral-100 p-6 dark:border-neutral-200 lg:justify-between">
       </div>

      <div className="end-footer p-6 text-center ">
        <span>جميع الحقوق محفوظة © 2022</span>    
      </div>
    </footer>
    );
}

export default footer