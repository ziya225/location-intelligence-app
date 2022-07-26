import React, { useState } from 'react';
import { MdOutlineFilterCenterFocus } from 'react-icons/md';
import clsx from 'clsx';
import { AiOutlineBell, AiOutlineEye } from 'react-icons/ai';
import { TbMap2 } from 'react-icons/tb';
import { BsCloudSun } from 'react-icons/bs';
import { TiLeaf } from 'react-icons/ti';
import Macrowatch from './Macrowatch';

const Div1 = ({
  div1Changer,
  activeMacroChanger,
  activeLoggingChanger,
  div1,
  activeMacro,
  activeLogging,
}) => {
  return (
    <>
      <div className="flex flex-col w-40 pt-3 mt-3 text-white bg-black rounded-md bg-opacity-70">
        <div
          className={clsx('flex flex-row', {
            'text-blue-500 ': activeMacro === true,
          })}
        >
          <div
            className="relative pl-3 hover-trigger"
            onClick={() => {
              activeLoggingChanger(!activeLogging);
              activeMacroChanger(!activeMacro);
            }}
          >
            <MdOutlineFilterCenterFocus className="w-6 h-6 cursor-pointer" />
            <AiOutlineEye className="cursor-pointer h-3 w-3 -mt-[18px] ml-1.5" />
          </div>
          <div className="pl-2">Macrowatch</div>
        </div>
        <div
          className={clsx('flex flex-row', {
            'text-blue-500 ': activeLogging === true,
          })}
        >
          <div
            className="relative pt-3 pl-3 hover-trigger"
            onClick={() => {
              activeMacroChanger(!activeMacro);
              activeLoggingChanger(!activeLogging);
            }}
          >
            <AiOutlineBell className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="pt-3 pl-2 truncate">Logging Alerts</div>
        </div>
        <div className="flex flex-row">
          <div className="relative pt-3 pl-3 hover-trigger">
            <TbMap2 className="w-6 h-6 text-white cursor-pointer" />
          </div>
          <div className="pt-3 pl-2 ">Detect Enroachment</div>
        </div>
        <hr className="mt-1 ml-2 w-36" />
        <div className="flex flex-row">
          <div className="relative pt-3 pl-3 hover-trigger">
            <BsCloudSun className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="pt-4 pl-2 truncate">Weather</div>
        </div>
        <div className="flex flex-row">
          <div className="relative pt-3 pb-3 pl-3 hover-trigger">
            <TiLeaf className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="pt-3 pl-2 truncate">Forest AOI</div>
        </div>
      </div>
      {activeMacro ? <Macrowatch /> : ''}
    </>
  );
};
export default Div1;
