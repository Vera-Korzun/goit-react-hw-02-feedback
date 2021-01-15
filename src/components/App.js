import React, { Component } from "react";
import FeedbackOptions from "./feedback/FeedbackOptions ";
import Notification from "./notification/Notification";
import Sections from "./sections/Sections";
import Statistics from "./statistic/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = (e) => {
    const key = e.target.dataset.name;
    this.setState((prev) => ({ [key]: prev[key] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalPositive = good ? good / this.countTotalFeedback() : 0;
    return Math.round(totalPositive * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Sections title="Please leave feedback">
          <FeedbackOptions
            good="good"
            neutral="neutral"
            bad="bad"
            onHandleClick={this.onHandleClick}
          />
        </Sections>
        <Sections title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Sections>
      </div>
    );
  }
}

export default App;
