import * as React from 'react';
import svg4everybody from 'svg4everybody';

import '@styles/app.scss';
import { Bacteria } from './components';

export const App = () => {
  React.useEffect(() => {
    svg4everybody({ polyfill: true });
  }, []);

  return (
    <div className="petri-cup" id="petri-cup">
      <Bacteria />
    </div>
  );
};
