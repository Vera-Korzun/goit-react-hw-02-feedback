import React from "react";

const Statistics = ({ state, total, positivePercentage }) => {
  return (
    <>
      {Object.keys(state).map((item) => (
        <p key={item}>
          {item[0].toUpperCase() + item.slice(1)}: <span>{state[item]}</span>
        </p>
      ))}

      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

export default Statistics;

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
