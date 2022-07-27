import React, { useState } from 'react';
import {
  FaChevronDown,
  FaClipboardCheck,
  FaFeather,
  FaRoad,
} from 'react-icons/fa';
import { Switch } from '@mui/material';

const Detect = () => {
  const [forestPolygon, setForestPolygon] = useState(false);

  return (
    <div className="absolute flex flex-col ml-3 font-opensans top-12 left-40">
      <div className="flex flex-col w-56 py-3 pl-5 mt-3 text-white bg-black border border-blue-500 rounded-md shadow-lg bg-opacity-70">
        <div className="flex flex-col -ml-3">
          <div className="flex flex-row">
            <Switch
              size="small"
              onChange={() => setForestPolygon(!forestPolygon)}
            />
            <div className="text-[13px] pl-1">Forest Polygons</div>
          </div>
          <div className="text-[9px] -mt-1 pl-[45px]">Yearly </div>
        </div>
      </div>
      {forestPolygon ? (
        <>
          <div className="flex flex-col w-56 py-3 pl-5 mt-3 text-white bg-black border border-blue-500 rounded-md shadow-lg bg-opacity-70">
            <div className="flex flex-row">
              <div className="text-[11px] -ml-3 ">Time selection</div>
              <div className="flex flex-row text-[11px] text-blue-500 pl-20">
                <div>Jan 2022 </div>
                <FaChevronDown className="w-3 h-3 pt-1" />
              </div>
            </div>
            <div className="flex flex-col pt-2 -ml-3">
              <div className="flex flex-row">
                <Switch size="small" />
                <div className="text-[13px] pl-1">Enroachment Layer</div>
              </div>
              <div className="text-[9px] -mt-1 pl-[45px]">monthly 10m </div>
            </div>
          </div>
          <div className="flex flex-col w-56 py-3 pl-3 mt-3 text-white bg-black border border-blue-500 rounded-md shadow-lg bg-opacity-70">
            <div className="text-[13px] font-semibold">Enroachment Type</div>

            <div className="flex flex-col">
              <div className="flex flex-row pt-3 ">
                <div>
                  <FaClipboardCheck className="w-3 h-3 text-blue-500" />
                </div>
                <div className="pl-2 -mt-[3px] text-[12px] text-blue-500 font-opensans">
                  Settlements
                </div>
              </div>
              <div className="flex flex-row pt-3 ">
                <div>
                  <FaRoad className="w-3 h-3 " />
                </div>
                <div className="pl-2 -mt-[3px] text-[12px]  font-opensans">
                  Road
                </div>
              </div>
              <div className="flex flex-row pt-3 ">
                <div>
                  <FaFeather className="w-3 h-3 " />
                </div>
                <div className="pl-2 -mt-[3px] text-[12px] font-opensans">
                  Agriculture Patch
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-56 py-3 pl-3 mt-3 text-white bg-black border border-blue-500 rounded-md shadow-lg bg-opacity-70">
            <div className="text-[13px] font-semibold border border-b-blue-500 border-l-transparent border-r-transparent border-t-transparent -ml-3 pl-3">
              Metrics
            </div>

            <div className="flex flex-col">
              <div className="pt-2 text-[13px] text-blue-500">12 sq.Km</div>
              <div className="text-[12px]">Enroachment land area size</div>
              <div className="pt-2 text-[13px] text-blue-500">Settlements</div>
              <div className="text-[12px]">Enroachment category</div>
              <div className="pt-2 text-[13px] text-blue-500">Jan 2022</div>
              <div className="text-[12px]">Vintage</div>
              <div className="pt-2 text-[13px] text-blue-500">2%</div>
              <div className="text-[12px]">Rate of change</div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Detect;
