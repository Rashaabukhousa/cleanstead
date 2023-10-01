import React from "react";
import mainimg from "../../../../assets/imgs/main.png";
import lines from "../../../../assets/imgs/lines.png";
import "./contactsec.css";


const contactsec = () => {
  return (
    <div className=" contact-sec ">
      <div className="container mx-auto grid-1 grid gap-4 md:grid-cols-2 lg:grid-cols-2 ">
        <div className="contact-form ">
          <div className="secondary-title">
            <h1> تواصل معنا </h1>
            <img src={lines} alt="lines"></img>
          </div>
          <form >
            <div className="space-y-6  pb-0">
              <div className="   pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                  <div className=" col-span-full ">
                    <label htmlFor="service" className=" block text-sm font-medium ">الخدمة</label>
                    <div className="mt-2  ">
                      <select id="service" name="service" className=" service rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6">
                        <option> </option>
                        <option>تنظيف المنازل</option>
                        <option>التنظيف التجاري</option>
                        <option>تنظيف السجاد</option>
                        <option>تنظيف النوافذ</option>
                        <option>تنظيف السيارات</option>
                        <option>تنظيف بعد البناء</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">الاسم </label>
                    <div className="">
                      <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">رقم الجوال</label>
                    <div className="">
                      <input type="num" name="phone" id="phone" className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div className="col-span-full ">
                    <label className="block text-sm font-medium leading-6 text-gray-900">الرسالة</label>
                    <div className="">
                      <textarea id="massege" name="massege" className="block w-full rounded-md border-0 py-4 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-100 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6">  </textarea>
                    </div>
                  </div>
                  <a href="#" className="btn items-center  ">ارسل</a>

                </div>
              </div>
            </div>
          </form>
        </div>

        <div className=" main-img  grid grid-cols-1 ">
          <img src={mainimg} alt="website logo" className="con-img"></img>
        </div>
      </div>
    </div >
  );
};

export default contactsec;
