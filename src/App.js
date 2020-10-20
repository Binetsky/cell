import * as React from 'react';
import svg4everybody from 'svg4everybody';
import '@styles/app.scss';
export const App = () => {
    React.useEffect(() => {
        svg4everybody({ polyfill: true });
    }, []);
    return (React.createElement("div", { className: "padding-left-8" },
        React.createElement("h1", null, "Application is working")));
};
//# sourceMappingURL=App.js.map