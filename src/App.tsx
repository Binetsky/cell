import * as React from 'react';
import svg4everybody from 'svg4everybody';
import { Bacteria } from './components';

import '@styles/app.scss';

export const App = (): React.ReactElement => {
  const [cellList, setCellList] = React.useState<string[]>([]);
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });

  const createCell = (event: React.MouseEvent<HTMLDivElement>) => {
    setCellList([...cellList, 'bacteria']);
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  React.useEffect(() => {
    svg4everybody({ polyfill: true });
  }, []);

  return (
    <div className="petri-cup" id="petri-cup" onClick={(event) => createCell(event)}>
      {cellList.map((item, index) => (<Bacteria id={index} itemName={item} cursorPosition={cursorPosition} key={index.toString()} />))}
    </div>
  );
};
