import React from 'react';
import DarkModeStatus from './DarkModeStatus';
import DarkModeCommands from './DarkModeCommands';

const Content = () => (
  <div className="content">
    <h1>YouTube App with Light and Dark Mode</h1>
    <p>
      This is an example of a <code>YouTube Application</code> that allows users
      to switch between <code>Light Mode</code> and <code>Dark mode</code>.
    </p>
    {/* <p>
      It persists across sessions (i.e., uses <code>localStorage</code>) and
      shares state across instances and even tabs and/or browser windows.
    </p> */}

    <p>
      The current mode is:{' '}
      <code>
        <DarkModeStatus />
      </code>
    </p>
    <p>
      <DarkModeCommands />
    </p>
  </div>
);

export default Content;
