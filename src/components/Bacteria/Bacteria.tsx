import * as React from 'react';

export const Bacteria = ():React.ReactElement => {
  const movement = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>, bodyName: string) => {
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
      x: prevPos.x ? `${direction.x ? prevPos.x + move.x : prevPos.x - move.x}px` : `${document.documentElement.clientWidth / 2 + move.x}px`,
      y: prevPos.y ? `${direction.y ? prevPos.y + move.y : prevPos.y - move.y}px` : `${document.documentElement.clientHeight / 2 + move.y}px`,
    }

    document!.getElementById(bodyName)!.style.top = newPos.y;
    document!.getElementById(bodyName)!.style.left = newPos.x;

    setTimeout(() => movement(ev, bodyName), 300);
  }

  return (<div id="bacteria" className="bacteria rotating resizing" onClick={(ev) => movement(ev, 'bacteria')} />);
};

Bacteria.displayName = 'Bacteria';
