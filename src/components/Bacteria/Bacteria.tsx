import * as React from 'react';

export const Bacteria = ():React.ReactElement => {
  const movement = (bodyName: string) => {
    const body = document.getElementById(bodyName);

    if (!body) return null;

    const move = {
      x: Math.floor(Math.random() * Math.floor(10)),
      y: Math.floor(Math.random() * Math.floor(10)),
    }
    const direction = {
      x: move.x % 2 === 0,
      y: move.y % 2 === 0,
    }
    const prevPos = {
      x: body.style.left ? Number(body.style.left.slice(0, -2)) : 0,
      y: body.style.top ? Number(body.style.top.slice(0, -2)) : 0,
    }

    const newPos = {
      x: prevPos.x ? direction.x ? prevPos.x + move.x : prevPos.x - move.x : document.documentElement.clientWidth / 2 + move.x,
      y: prevPos.y ? direction.y ? prevPos.y + move.y : prevPos.y - move.y : document.documentElement.clientHeight / 2 + move.y,
    }

    const shouldKillBacteria = newPos.x < 10
        || newPos.y < 10
        || newPos.x > document.documentElement.clientWidth - 10
        || newPos.y > document.documentElement.clientHeight - 10;

    document!.getElementById(bodyName)!.style.top = newPos.y + 'px';
    document!.getElementById(bodyName)!.style.left = newPos.x + 'px';

    if (shouldKillBacteria) {
      document!.getElementById(bodyName)!.style.opacity = '0';
      setTimeout(() => {
        document!.getElementById(bodyName)!.style.display = 'none';
        return null;
      }, 300);
    }

    setTimeout(() => movement(bodyName), 300);
  }

  return (<div id="bacteria" className="bacteria rotating resizing" onClick={(ev) => movement('bacteria')} />);
};

Bacteria.displayName = 'Bacteria';
