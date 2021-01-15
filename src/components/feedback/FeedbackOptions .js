import React from "react";

const FeedbackOptions = ({ state, onHandleClick }) => {
  return (
    <>
      {Object.keys(state).map((item) => (
        <button
          type="button"
          key={item}
          data-name={item}
          onClick={onHandleClick}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

// import React from "react";

// const FeedbackOptions = ({ good, neutral, bad, onHandleClick }) => {
//   return (
//     <>
//       <button type="button" data-name={good} onClick={onHandleClick}>
//         {good[0].toUpperCase() + good.slice(1)}
//       </button>
//       <button type="button" data-name={neutral} onClick={onHandleClick}>
//         {neutral[0].toUpperCase() + neutral.slice(1)}
//       </button>
//       <button type="button" data-name={bad} onClick={onHandleClick}>
//         {bad[0].toUpperCase() + bad.slice(1)}
//       </button>
//     </>
//   );
// };

// export default FeedbackOptions;
