import React from "react";
import "./firstnav.css";
import logo from "../../assets/imgs/logo.png";
import logoname from "../../assets/imgs/logo-name.png";
import { Link } from 'react-router-dom';

const firstnav = () => {
  return (

    <>
      <nav className=" firstnav mt-2 container mx-auto " >
        <div className="mx-auto max-w-7xl  ">
          <div className="relative flex h-16 items-center justify-between">

            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2  text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>

                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-1  justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center  ">
                <a href="#" className="text-white text-2xl font-bold"><img className="logo-img " src={logo} alt="website logo"></img></a>
                <a href="#" className=""><img className=" " src={logoname} alt="website name"></img></a>

              </div>
              <div className="hidden sm:ml-6 sm:block  mt-1 ms-64 ">
                <div className="flex space-x-4">
                  <Link to='/home' className=" px-3 py-2 me-10">الرئيسية</Link>
                  <Link to='/home' className=" px-3 py-2 me-10">الخدمات</Link>
                  <Link to='/about' className=" px-3 py-2 me-10">من نحن</Link>
                  <Link to="/contact" className=" px-3 py-2 me-10">اتصل بنا</Link>
                </div>
              </div>
              <div className="  ms-auto  flex  " >
                 <a  href="#" className="log-btn items-center">تسجيل</a>
                 <a href="#" className="btn items-center  "> احجز الان</a>
              </div>
            </div>

          </div>

        </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1  pb-3 pt-2">
          <a href="#" className=" block rounded-md px-3 py-2 text-base ">الرئيسية</a>
          <a href="#" className=" block rounded-md px-3 py-2 text-base ">الخدمات</a>
          <a href="#" className=" block rounded-md px-3 py-2 text-base ">من نحن</a>
          <a href="#" className=" block rounded-md px-3 py-2 text-base ">اتصل بنا </a>
          <a  href="#" className="log-btn items-center block rounded-md px-3 py-2">تسجيل</a>
          <a href="#" className="btn items-center  block px-3 py-2"> احجز الان</a>
        </div>
      </div>
    </nav >

    </>
  );
}

export default firstnav;
