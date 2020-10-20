import * as React from 'react';
import svg4everybody from 'svg4everybody';

import '@styles/app.scss';

export const App = (): React.ReactElement => {
  React.useEffect(() => {
    svg4everybody({ polyfill: true });
  }, []);

  return (
    <div className="petri-cup" id="petri-cup">
      <div className="bacteria rotating resizing" />
    </div>
  );
};
