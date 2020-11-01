import * as React from 'react';
import { movement, stopLife } from './helpers';

export interface BacteriaProps {
  id: number,
  itemName: string,
  cursorPosition: { x: number, y: number },
}

export const Bacteria = (props: BacteriaProps):React.ReactElement => {
  const { id, itemName, cursorPosition } = props;

  React.useEffect(() => {
    setInterval(() => stopLife(`${itemName}-${id}`), 30000);
  }, [id, itemName]);

  return (
    <div
      id={`${itemName}-${id}`}
      className="bacteria rotating resizing"
      onAnimationStart={() => movement(`${itemName}-${id}`, cursorPosition)}
    />
  );
};

Bacteria.displayName = 'Bacteria';
