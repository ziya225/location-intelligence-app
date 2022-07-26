import clsx from 'clsx';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ activeMacro }) => {
  return (
    <div class="container flex justify-center items-center ">
      <div
        className={clsx('relative ', {
          '-ml-14 ': activeMacro === true,
        })}
      >
        <input
          type="text"
          class="h-12 w-80 pr-8 pl-10 rounded-md z-0 focus:shadow-md focus:outline-none"
          placeholder="Search your location here "
        />

        <div class="absolute top-4 left-3">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
