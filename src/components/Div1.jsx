import React, { useState } from 'react';
import { MdOutlineFilterCenterFocus } from 'react-icons/md';
import clsx from 'clsx';
import { AiOutlineBell, AiOutlineEye } from 'react-icons/ai';
import { TbMap2 } from 'react-icons/tb';
import { BsCloudSun } from 'react-icons/bs';
import { TiLeaf } from 'react-icons/ti';
import Macrowatch from './Macrowatch';
import Logging from './Logging';
import Detect from './Detect';
import Weather from './Weather';
import Forest from './Forest';

const Div1 = ({
  div1Changer,
  activeMacroChanger,
  activeLoggingChanger,
  activeDetectChanger,
  activeWeatherChanger,
  activeForestChanger,
  div1,
  activeMacro,
  activeLogging,
  activeDetect,
  activeWeather,
  activeForest,
}) => {
  return (
    <>
      <div className="flex flex-col w-40 pt-3 mt-3 text-white bg-black rounded-md font-opensans bg-opacity-70">
        <div
          className={clsx('flex flex-row', {
            'text-blue-500 ': activeMacro === true,
          })}
          onClick={() => {
            activeMacroChanger(true);
            activeLoggingChanger(false);
            activeDetectChanger(false);
            activeWeatherChanger(false);
            activeForestChanger(false);
          }}
        >
          <div className="relative pl-3 hover-trigger">
            <MdOutlineFilterCenterFocus className="w-6 h-6 cursor-pointer" />
            <AiOutlineEye className="cursor-pointer h-3 w-3 -mt-[18px] ml-1.5" />
          </div>
          <div className="cursor-pointer text-[13px] pl-2 pt-[2px]">
            Macrowatch
          </div>
        </div>
        <div
          className={clsx('flex flex-row', {
            'text-blue-500 ': activeLogging === true,
          })}
          onClick={() => {
            activeMacroChanger(false);
            activeLoggingChanger(true);
            activeDetectChanger(false);
            activeWeatherChanger(false);
            activeForestChanger(false);
          }}
        >
          <div className="relative pt-3 pl-3 hover-trigger">
            <AiOutlineBell className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="cursor-pointer text-[13px] pt-3.5 pl-2 truncate">
            Logging Alerts
          </div>
        </div>
        <div
          className={clsx('flex flex-row', {
            'text-blue-500 ': activeDetect === true,
          })}
          onClick={() => {
            activeMacroChanger(false);
            activeLoggingChanger(false);
            activeDetectChanger(true);
            activeWeatherChanger(false);
            activeForestChanger(false);
          }}
        >
          <div className="relative pt-3 pl-3 hover-trigger">
            <TbMap2 className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="cursor-pointer text-[13px] pt-3 pl-2 ">
            Detect Enroachment
          </div>
        </div>
        <hr className="mt-1 ml-2 w-36" />
        <div
          className={clsx('flex flex-row', {
            'text-blue-500 ': activeWeather === true,
          })}
          onClick={() => {
            activeMacroChanger(false);
            activeLoggingChanger(false);
            activeDetectChanger(false);
            activeWeatherChanger(true);
            activeForestChanger(false);
          }}
        >
          <div className="relative pt-3 pl-3 hover-trigger">
            <BsCloudSun className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="cursor-pointer text-[13px] pt-5 pl-2 truncate">
            Weather
          </div>
        </div>
        <div
          className={clsx('flex flex-row', {
            'text-blue-500 ': activeForest === true,
          })}
          onClick={() => {
            activeMacroChanger(false);
            activeLoggingChanger(false);
            activeDetectChanger(false);
            activeWeatherChanger(false);
            activeForestChanger(true);
          }}
        >
          <div className="relative pt-3 pb-3 pl-3 hover-trigger">
            <TiLeaf className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="cursor-pointer text-[13px] pt-3 pl-2 truncate">
            Forest AOI
          </div>
        </div>
      </div>
      {activeMacro ? (
        <Macrowatch />
      ) : activeLogging ? (
        <Logging />
      ) : activeDetect ? (
        <Detect />
      ) : activeWeather ? (
        <Weather />
      ) : activeForest ? (
        <Forest />
      ) : (
        ''
      )}
    </>
  );
};
export default Div1;
