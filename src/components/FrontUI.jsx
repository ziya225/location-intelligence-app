import {
  AiOutlineBell,
  AiOutlineEye,
  AiOutlineInfoCircle,
  AiOutlineCloudUpload,
  AiOutlineCloudDownload,
  AiOutlineShareAlt,
  AiOutlineMessage,
} from 'react-icons/ai';
import { TbMap2 } from 'react-icons/tb';
import { BsCloudSun, BsPeople } from 'react-icons/bs';
import { TiLeaf } from 'react-icons/ti';
import { RiMapPin2Line } from 'react-icons/ri';

import { GiEarthAfricaEurope } from 'react-icons/gi';
import { useState } from 'react';
import Div1 from './Div1';
import { MdOutlineFilterCenterFocus } from 'react-icons/md';
import SearchBar from './SearchBar';
import {
  FaChevronUp,
  FaInfo,
  FaInfoCircle,
  FaUserCircle,
} from 'react-icons/fa';
const FrontUI = () => {
  const [div1, setDiv1] = useState(false);
  const [activeMacro, setActiveMacro] = useState(false);
  const [activeLogging, setActiveLogging] = useState(false);
  const [activeDetect, setActiveDetect] = useState(false);
  const [activeWeather, setActiveWeather] = useState(false);
  const [activeForest, setActiveForest] = useState(false);
  return (
    <>
      <div className="absolute top-[10px] left-[10px] z-50">
        <SearchBar activeMacro={activeMacro} activeLogging={activeLogging} />
        {div1 ? (
          <Div1
            div1Changer={setDiv1}
            activeMacroChanger={setActiveMacro}
            activeLoggingChanger={setActiveLogging}
            activeDetectChanger={setActiveDetect}
            activeWeatherChanger={setActiveWeather}
            activeForestChanger={setActiveForest}
            div1={div1}
            activeMacro={activeMacro}
            activeLogging={activeLogging}
            activeDetect={activeDetect}
            activeWeather={activeWeather}
            activeForest={activeForest}
          />
        ) : (
          <div className="font-opensans text-[13px] flex flex-col w-12 pt-3 mt-3 text-white bg-black rounded-md bg-opacity-70">
            <div
              className="relative pl-3 hover-trigger"
              onClick={() => {
                setDiv1(!div1);
                setActiveMacro(!activeMacro);
              }}
            >
              <MdOutlineFilterCenterFocus className="w-6 h-6 cursor-pointer" />
              <AiOutlineEye className="cursor-pointer h-3 w-3 -mt-[18px] ml-1.5" />
              <div className="absolute bg-blue-500 border border-grey-100 ml-[36px] -mt-5 py-1 px-4 rounded-r-md hover-target">
                Macrowatch
              </div>
            </div>
            <div
              className="relative pt-3 pl-3 hover-trigger"
              onClick={() => {
                setDiv1(!div1);
                setActiveLogging(!activeLogging);
              }}
            >
              <AiOutlineBell className="w-6 h-6 cursor-pointer" />
              <div className="truncate absolute bg-blue-500 border border-grey-100 py-1 ml-[36px] -mt-5 px-4 rounded-r-md hover-target">
                Logging Alerts
              </div>
            </div>
            <div
              className="relative pt-3 pl-3 hover-trigger"
              onClick={() => {
                setDiv1(!div1);
                setActiveDetect(!activeDetect);
              }}
            >
              <TbMap2 className="w-6 h-6 text-white cursor-pointer" />
              <div className="truncate absolute bg-blue-500 border border-grey-100 py-1  ml-[36px] -mt-5 px-4 rounded-r-md hover-target">
                Detect Enroachmen
              </div>
            </div>
            <hr className="w-10 mt-1 ml-1" />
            <div
              className="relative pt-3 pl-3 hover-trigger"
              onClick={() => {
                setDiv1(!div1);
                setActiveWeather(!activeWeather);
              }}
            >
              <BsCloudSun className="w-6 h-6 cursor-pointer" />
              <div className="truncate absolute bg-blue-500 border border-grey-100 py-1 ml-[36px] -mt-5 px-4 rounded-r-md hover-target">
                Weather
              </div>
            </div>
            <div
              className="relative pt-3 pb-3 pl-3 hover-trigger"
              onClick={() => {
                setDiv1(!div1);
                setActiveForest(!activeForest);
              }}
            >
              <TiLeaf className="w-6 h-6 cursor-pointer" />
              <div className="truncate absolute bg-blue-500 border border-grey-100 py-1 ml-[36px] -mt-5 px-4 rounded-r-md hover-target ">
                Forest AOI
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute flex flex-col top-[20px] right-[80px] z-50">
        <div>
          <img
            className="border border-blue-500 rounded-full cursor-pointer w-9 h-9"
            src={require('../img/user.jpg')}
            alt="user"
          />
        </div>
        <div className="mt-3 py-1 cursor-pointer px-1.5 bg-black rounded-md bg-opacity-40">
          <AiOutlineInfoCircle className="w-6 h-6 text-white " />
        </div>
        <div className="mt-3 py-1 cursor-pointer px-1.5 bg-black rounded-md bg-opacity-40">
          <RiMapPin2Line className="w-6 h-6 text-white " />
        </div>
        <div className="mt-3 py-1 cursor-pointer px-1.5 bg-black rounded-md bg-opacity-40">
          <AiOutlineCloudUpload className="w-6 h-6 text-white " />
        </div>
        <div className="mt-3 py-1 cursor-pointer px-1.5 bg-black rounded-md bg-opacity-40">
          <AiOutlineCloudDownload className="w-6 h-6 text-white " />
        </div>
        <div className="mt-3 py-1 cursor-pointer px-1.5 bg-black rounded-md bg-opacity-40">
          <AiOutlineShareAlt className="w-6 h-6 text-white " />
        </div>
        <div className="mt-3 py-1 cursor-pointer px-1.5 bg-black rounded-md bg-opacity-40">
          <AiOutlineMessage className="w-6 h-6 text-white " />
        </div>
        <div className="mt-3 py-1 cursor-pointer px-1.5 bg-black rounded-md bg-opacity-40">
          <GiEarthAfricaEurope className="w-6 h-6 text-white " />
        </div>
        <div className="mt-3 py-1 cursor-pointer px-1.5 bg-black rounded-md bg-opacity-40">
          <BsPeople className="w-6 h-6 text-white " />
        </div>
        <div className="pl-2.5 pt-2">
          <FaChevronUp className="w-4 h-4 text-blue-500 " />
        </div>
      </div>
    </>
  );
};

export default FrontUI;
