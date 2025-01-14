//import { useSelector } from 'react-redux';

import style from './DiagramTab.module.scss';
import db from 'db/db';
const DiagramTab = ({ diagramData }) => {
  const { categoriesSummary, expenseSummary, incomeSummary } = diagramData;
  const colorsData = db.categories[1].category;
  categoriesSummary.map(
    (item, index) => (item.color = colorsData[index].color)
  );

  return (
    <div className={style.DiagramTab}>
      <ul className={style.DiagramTab__titleBackground}>
        <li className={style.DiagramTab__title}>Category</li>
        <li className={style.DiagramTab__title}>Sum</li>
      </ul>
      <ul className={style.DiagramTab__body}>
        {categoriesSummary.map((item, index) => (
          <li key={index} className={style.DiagramTab__item}>
            <div className={style.DiagramTab__itemCategory}>
              <div
                style={{
                  backgroundColor: `${item.color}`,
                }}
                className={style.DiagramTab__categoryColor}
              />
              <span className={style.DiagramTab__text}>{item.name}</span>
            </div>
            <span className={style.DiagramTab__number}>{item.total}</span>
          </li>
        ))}
      </ul>
      <ul>
        <li className={style.DiagramTab__itemStat}>
          <div className={style.DiagramTab__title}>Expenses:</div>
          <div className={style.DiagramTab__numberRed}>{expenseSummary}</div>
        </li>
        <li className={style.DiagramTab__itemStat}>
          <div className={style.DiagramTab__title}>Income: </div>
          <div className={style.DiagramTab__numberGreen}>{incomeSummary}</div>
        </li>
      </ul>
    </div>
  );
};

export default DiagramTab;
