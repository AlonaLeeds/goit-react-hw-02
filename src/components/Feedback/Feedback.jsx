import React from 'react';
import css from '../Feedback/Feedback.module.css'

export default function Feedback({ feedback, totalFeedback, positiveFeedbackPercentage }) {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedbackPercentage}%</p>
    </div>
  );
}


