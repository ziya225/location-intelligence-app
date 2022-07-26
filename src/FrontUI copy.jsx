import { AiOutlineBell, AiOutlineEye } from 'react-icons/ai';
import { TbMap2 } from 'react-icons/tb';
import { BsCloudSun } from 'react-icons/bs';
import { TiLeaf } from 'react-icons/ti';
import { useState } from 'react';
import clsx from 'clsx';
import Div1 from './components/Div1';
import { MdOutlineFilterCenterFocus } from 'react-icons/md';
import SearchBar from './components/SearchBar';
const FrontUI = () => {
  const [div1, setDiv1] = useState(false);
  const [activeMacro, setActiveMacro] = useState(false);
  const [activeLogging, setActiveLogging] = useState(false);
  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        zIndex: '99',
      }}
    >
      <SearchBar activeMacro={activeMacro} />
      {div1 ? (
        <Div1
          div1Changer={setDiv1}
          activeMacroChanger={setActiveMacro}
          activeLoggingChanger={setActiveLogging}
          div1={div1}
          activeMacro={activeMacro}
          activeLogging={activeLogging}
        />
      ) : (
        <div className="flex flex-col w-12 pt-3 mt-3 text-white bg-black rounded-md bg-opacity-70">
          <div
            className="relative pl-3 hover-trigger"
            onClick={() => {
              setDiv1(!div1);
              setActiveMacro(!activeMacro);
            }}
          >
            <MdOutlineFilterCenterFocus className="w-6 h-6 cursor-pointer" />
            <AiOutlineEye className="cursor-pointer h-3 w-3 -mt-[18px] ml-1.5" />
            <div className="absolute bg-blue-500 border border-grey-100 ml-[36px] -mt-5 px-4 rounded-r-md hover-target">
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
            <div className="absolute bg-blue-500 border border-grey-100 ml-[36px] -mt-5 px-4 rounded-r-md hover-target">
              Logging Alerts
            </div>
          </div>
          <div className="relative pt-3 pl-3 hover-trigger">
            <TbMap2 className="w-6 h-6 text-white cursor-pointer" />
            <div className="truncate absolute bg-blue-500 border border-grey-100 ml-[36px] -mt-5 px-4 rounded-r-md hover-target">
              Detect Enroachmen
            </div>
          </div>
          <hr className="w-10 mt-1 ml-1" />
          <div className="relative pt-3 pl-3 hover-trigger">
            <BsCloudSun className="w-6 h-6 cursor-pointer" />
            <div className="absolute bg-blue-500 border border-grey-100 ml-[36px] -mt-5 px-4 rounded-r-md hover-target">
              Weather
            </div>
          </div>
          <div className="relative pt-3 pb-3 pl-3 hover-trigger">
            <TiLeaf className="w-6 h-6 cursor-pointer" />
            <div className="absolute bg-blue-500 border border-grey-100 ml-[36px] -mt-5 px-4 rounded-r-md hover-target">
              Forest AOI
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrontUI;
