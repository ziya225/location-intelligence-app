import React, { useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { Switch } from '@mui/material';

const Logging = () => {
  const [concessional, setConcessional] = useState(false);

  return (
    <div className="absolute flex flex-col ml-3 font-opensans top-12 left-40">
      <div className="flex flex-col w-56 py-3 pl-5 mt-3 text-white bg-black border border-blue-500 rounded-md shadow-lg bg-opacity-70">
        <div className="flex flex-col -ml-3">
          <div className="flex flex-row">
            <Switch
              size="small"
              onChange={() => setConcessional(!concessional)}
            />
            <div className="text-[13px] pl-1 pt-1">Concessional Logging</div>
          </div>
        </div>
        <div className="flex flex-col pt-3 -ml-3">
          <div className="flex flex-row">
            <Switch size="small" />
            <div className="text-[13px] pl-1 pt-1">
              Non Concessional Logging
            </div>
          </div>
        </div>
      </div>
      {concessional ? (
        <div className="flex flex-col w-56 py-3 pl-3 mt-3 text-white bg-black border border-blue-500 rounded-md shadow-lg bg-opacity-70">
          <div className="text-[13px] font-semibold">Notification Panel</div>
          <div className="text-[11px] pt-2">Logging alert types</div>
          <div className="flex flex-row">
            <div className="flex flex-row pt-2 ">
              <div>
                <FaCircle className="text-[#ff0720] w-3 h-3" />
              </div>
              <div className="pl-1 -mt-[2px] text-[10px] font-opensans">
                High
              </div>
            </div>
            <div className="flex flex-row pt-2 pl-7">
              <div>
                <FaCircle className="text-[#f6f202] w-3 h-3" />
              </div>
              <div className="pl-1 -mt-[2px] text-[10px] font-opensans">
                Medium
              </div>
            </div>
            <div className="flex flex-row pt-2 pl-7">
              <div>
                <FaCircle className="text-[#3fd3ea] w-3 h-3" />
              </div>
              <div className="pl-1 -mt-[2px] text-[10px] font-opensans">
                Low
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Logging;
