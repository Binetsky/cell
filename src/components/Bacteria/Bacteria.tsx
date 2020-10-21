import * as React from 'react';
import { movement } from "./helpers";

export interface BacteriaProps {
  id: number,
  itemName: string,
}

export const Bacteria = (props: BacteriaProps):React.ReactElement => {
  const {id, itemName} = props;

  return (<div id={`${itemName}-${id}`} className="bacteria rotating resizing" onAnimationStart={() => movement(`${itemName}-${id}`)} />);
};

Bacteria.displayName = 'Bacteria';
