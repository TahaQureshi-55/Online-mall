
import React from 'react';

function HeaderTop() {
  return (
    <>
    <div>

      <div className="border-b border-gray-700 bg-gray-800 hidden sm:block ">
        
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <div className="hidden lg:flex gap-1 w-full justify-between">
              <div className="text-gray-400 text-[12px] md:pl-0 relative left-96 ">
                <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
              </div>
              <div className="flex gap-4 pl-0 lg:pl-80">
                <select
                  className="text-gray-400 text-[12px] w-[70px] cursor-pointer rounded-xl bg-gray-800"
                  name="currency"
                  id="currency"
                >
                  <option value="USD $">USD $</option>
                  <option value="EUR €">EUR €</option>
                  <option value="INR">INR</option>
                </select>

                <select
                  className="text-gray-400 text-[12px] w-[70px] cursor-pointer rounded-xl bg-gray-800"
                  name="languages"
                  id="languages"
                  >
                  <option value="English">English</option>
                  <option value="French">French</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default HeaderTop;
