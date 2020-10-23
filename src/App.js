import * as React from 'react';
import svg4everybody from 'svg4everybody';
import { Bacteria } from './components';
import '@styles/app.scss';
export const App = () => {
    const [cellList, setCellList] = React.useState(['bacteria', 'bacteria', 'bacteria', 'bacteria', 'bacteria']);
    const createCell = () => {
        setCellList([...cellList, 'bacteria']);
    };
    React.useEffect(() => {
        svg4everybody({ polyfill: true });
    }, []);
    return (React.createElement("div", { className: "petri-cup", id: "petri-cup", onClick: () => createCell() }, cellList.map((item, index) => (React.createElement(Bacteria, { id: index, itemName: item, key: index.toString() })))));
};
//# sourceMappingURL=App.js.map
