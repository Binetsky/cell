import * as React from 'react';

export const Bacteria = ():React.ReactElement => {
  const movement = (bodyName: string) => {
    const movementX = Math.floor(Math.random() * Math.floor(10));
    const movementY = Math.floor(Math.random() * Math.floor(10));
    const body = document.getElementById(bodyName);
    if (!body) return null;

    const previousPosY = body.style.top;
    const previousPosX = body.style.left;
    console.log(previousPosY, previousPosX)
    return (null);
  }

  return (<div id="bacteria" className="bacteria rotating resizing" onClick={() => movement('bacteria')} />);
};

Bacteria.displayName = 'Bacteria';
