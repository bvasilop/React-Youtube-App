import React from 'react';

import useDarkMode from 'use-dark-mode';
// import Toggle from './Toggle';

const DarkModeCommands = () => {
  const darkMode = useDarkMode(false);

  return (
    <span>
      Use slider above or button to switch to{' '}
      <button onClick={darkMode.toggle} type="button">
        {darkMode.value ? 'Light Mode' : 'Dark Mode'}
      </button>
      .
    </span>
  );
};

export default DarkModeCommands;
