import React from "react";
import PropTypes from "prop-types";
import StatisticsList from "./StatisticsStyled";

const Statistics = ({ state, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <ul className="list statistic__list">
        {Object.keys(state).map((item) => (
          <li className="statistic__list-item" key={item}>
            <p className="statistic__list-titel" key={item}>
              {item[0].toUpperCase() + item.slice(1)}:{" "}
              <span className="statistic__list-titel-item">{state[item]}</span>
            </p>
          </li>
        ))}
      </ul>
      <p className="statistic__titel">Total: {total}</p>
      <p className="statistic__titel">
        Positive feedback: {positivePercentage}%
      </p>
    </StatisticsList>
  );
};

export default Statistics;

StatisticsList.propTypes = {
  state: PropTypes.object,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

// import React from "react";

// const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
//   return (
//     <>
//       <p>Cood: {good}</p>
//       <p>Neutral:{neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>Total: {total}</p>
//       <p>Positive feedback: {positivePercentage}%</p>
//     </>
//   );
// };

// export default Statistics;
