import React, { useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { ChartData } from '../components/ChartData';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

const Macrowatch = () => {
  const [landCover, setLandCover] = useState(false);

  return (
    <div className="absolute flex flex-col ml-3 font-opensans top-12 left-40">
      <div className="flex flex-col w-56 py-3 pl-5 mt-3 text-white bg-black border border-blue-500 rounded-md shadow-lg bg-opacity-70">
        <div className="flex flex-col -ml-3">
          <div className="flex flex-row">
            <Switch size="small" onChange={() => setLandCover(!landCover)} />
            <div className="text-[13px] pl-1">Land Cover</div>
          </div>
          <div className="text-[9px] -mt-1 pl-[45px]">Yearly 10m</div>
        </div>
        <div className="flex flex-col pt-3 -ml-3">
          <div className="flex flex-row">
            <Switch size="small" />
            <div className="text-[13px] pl-1">Forest Cover Change</div>
          </div>
          <div className="text-[9px] -mt-1 pl-[45px]">Yearly 10m</div>
        </div>
        <div className="flex flex-col pt-3 -ml-3">
          <div className="flex flex-row">
            <Switch size="small" />
            <div className="text-[13px] pl-1">Forest Cover Type</div>
          </div>
          <div className="text-[9px] -mt-1 pl-[45px]">Yearly 10m</div>
        </div>
      </div>
      <div className="flex flex-col w-56 h-48 pt-3 mt-3 bg-black border border-blue-500 rounded-md shadow-lg bg-opacity-70">
        <ChartData />
      </div>
      {landCover ? (
        <div className="flex flex-col w-40 pt-3 mt-3 bg-white rounded-md h-[200px] ">
          <div className="flex flex-row pt-1 pl-3">
            <div>
              <FaCircle className="text-[#d2a965] w-3 h-3" />
            </div>
            <div className="pl-1 -mt-[2px] text-[10px] font-opensans">
              Agriculture
            </div>
          </div>
          <div className="flex flex-row pt-1 pl-3">
            <div>
              <FaCircle className="text-[#157764] w-3 h-3" />
            </div>
            <div className="pl-1 -mt-[2px] text-[10px] font-opensans">
              Forest
            </div>
          </div>
          <div className="flex flex-row pt-1 pl-3">
            <div>
              <FaCircle className="text-[#ccdb98] w-3 h-3" />
            </div>
            <div className="pl-1 -mt-[2px] text-[10px] font-opensans">
              Grassland
            </div>
          </div>
          <div className="flex flex-row pt-1 pl-3">
            <div>
              <FaCircle className="text-[#596b2c] w-3 h-3" />
            </div>
            <div className="pl-1 -mt-[2px] text-[10px] font-opensans">
              Shrubland
            </div>
          </div>
          <div className="flex flex-row pt-1 pl-3">
            <div>
              <FaCircle className="text-[#d5c998] w-3 h-3" />
            </div>
            <div className="pl-1 -mt-[2px] text-[10px] font-opensans">
              Sparse vegetation
            </div>
          </div>
          <div className="flex flex-row pt-1 pl-3">
            <div>
              <FaCircle className="text-[#2789d4] w-3 h-3" />
            </div>
            <div className="pl-1 -mt-[2px] text-[10px] font-opensans">
              Wetland
            </div>
          </div>
          <div className="flex flex-row pt-1 pl-3">
            <div>
              <FaCircle className="text-[#e9462b] w-3 h-3" />
            </div>
            <div className="pl-1 -mt-[2px] text-[10px] font-opensans">
              Settlement
            </div>
          </div>
          <div className="flex flex-row pt-1 pl-3">
            <div>
              <FaCircle className="text-[#f6f0ea] w-3 h-3" />
            </div>
            <div className="pl-1 -mt-[2px] text-[10px] font-opensans">Bare</div>
          </div>
          <div className="flex flex-row pt-1 pl-3">
            <div>
              <FaCircle className="text-[#a3dcff] w-3 h-3" />
            </div>
            <div className="pl-1 -mt-[2px] text-[10px] font-opensans">
              Water
            </div>
          </div>
          <div className="flex flex-row pt-1 pl-3">
            <div>
              <FaCircle className="text-[#ffffff] w-3 h-3" />
            </div>
            <div className="pl-1 -mt-[2px] text-[10px] font-opensans truncate">
              Permanent snow and ice
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Macrowatch;
