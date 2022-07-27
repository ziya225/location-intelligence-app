import React from 'react';
import { FaChevronCircleRight, FaSearch } from 'react-icons/fa';
import { TbSquareRotated } from 'react-icons/tb';

const Forest = () => {
  return (
    <div className="absolute flex flex-col ml-3 font-opensans top-12 left-40">
      <div className="flex flex-col w-56 py-3 pl-3 mt-3 text-white bg-black border border-blue-500 rounded-md shadow-lg bg-opacity-70">
        <div className="text-[13px] font-semibold border border-b-blue-500 border-l-transparent border-r-transparent border-t-transparent -ml-3 pl-3">
          <input
            type="text"
            className="z-0 w-48 h-8 pl-3 mb-3 bg-black rounded-md bg-opacity-40 focus:shadow-md focus:outline-none"
            placeholder="Forest search here... "
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row pt-3">
            <div className="h-12 border w-14"></div>
            <div className="flex flex-col pl-2 font-opensans">
              <div className="text-[12px]">AOI 1234</div>
              <div className="text-[9px]">unknown tree species,</div>
              <div className="text-[9px]">Sarojni,south delhi</div>
            </div>
            <div className="pt-8 pl-8">
              <FaChevronCircleRight className="w-3 h-3 text-[#10b4cc]" />
            </div>
          </div>
          <div className="flex flex-row pt-3">
            <div className="h-12 border w-14"></div>
            <div className="flex flex-col pl-2 font-opensans">
              <div className="text-[12px]">AOI 1234</div>
              <div className="text-[9px]">unknown tree species,</div>
              <div className="text-[9px]">Sarojni,south delhi</div>
            </div>
            <div className="pt-8 pl-8">
              <FaChevronCircleRight className="w-3 h-3 text-[#10b4cc]" />
            </div>
          </div>
          <div className="flex flex-row pt-3">
            <div className="h-12 border w-14"></div>
            <div className="flex flex-col pl-2 font-opensans">
              <div className="text-[12px]">AOI 1234</div>
              <div className="text-[9px]">unknown tree species,</div>
              <div className="text-[9px]">Sarojni,south delhi</div>
            </div>
            <div className="pt-8 pl-8">
              <FaChevronCircleRight className="w-3 h-3 text-[#10b4cc]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forest;
