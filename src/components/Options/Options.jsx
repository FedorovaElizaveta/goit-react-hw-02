import css from "./Options.module.css";

const Options = ({ feedbackTypes, update, reset, totalFeedback }) => {
  return (
    <div className={css.optionButtonWrapper}>
      {Object.keys(feedbackTypes).map((key) => (
        <button
          onClick={() => update(key)}
          className={css.optionButton}
          type="button"
          key={key}
        >
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </button>
      ))}
      {totalFeedback === 0 ? (
        false
      ) : (
        <button onClick={reset} className={css.optionButton} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
