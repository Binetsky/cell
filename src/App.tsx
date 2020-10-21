import * as React from 'react';
import svg4everybody from 'svg4everybody';
import { Bacteria } from './components';

import '@styles/app.scss';

export const App = (): React.ReactElement => {
  const [cellList, setCellList] = React.useState<string[]>(['bacteria', 'bacteria', 'bacteria', 'bacteria', 'bacteria']);

  const createCell = () => {
    setCellList([...cellList, 'bacteria']);
  };

  React.useEffect(() => {
    svg4everybody({ polyfill: true });
  }, []);

  return (
    <div className="petri-cup" id="petri-cup" onClick={() => createCell()}>
      {cellList.map((item, index) => (<Bacteria id={index} itemName={item} key={index.toString()} />))}
    </div>
  );
};
