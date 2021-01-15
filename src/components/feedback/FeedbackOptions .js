import React from "react";

const FeedbackOptions = ({ good, neutral, bad, onHandleClick }) => {
  return (
    <>
      <button type="button" data-name={good} onClick={onHandleClick}>
        {good[0].toUpperCase() + good.slice(1)}
      </button>
      <button type="button" data-name={neutral} onClick={onHandleClick}>
        {neutral[0].toUpperCase() + neutral.slice(1)}
      </button>
      <button type="button" data-name={bad} onClick={onHandleClick}>
        {bad[0].toUpperCase() + bad.slice(1)}
      </button>
    </>
  );
};

export default FeedbackOptions;
