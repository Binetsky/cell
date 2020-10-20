import * as React from 'react';
import svg4everybody from 'svg4everybody';

import '@styles/app.scss';

export const App = () => {
  React.useEffect(() => {
    svg4everybody({ polyfill: true });
  }, []);

  return (
    <div className="padding-left-8">
      <h1>Application is working</h1>
    </div>
  );
};
