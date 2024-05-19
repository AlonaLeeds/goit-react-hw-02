
import css from "./Options.module.css"

export default function Options ({ onFeedback, totalFeedback, onReset }) {
  return (
    <div className={css.button}>
      <h2>Give Feedback</h2>
      <button onClick={() => onFeedback('good')}>Good</button>
      <button onClick={() => onFeedback('neutral')}>Neutral</button>
      <button onClick={() => onFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}

