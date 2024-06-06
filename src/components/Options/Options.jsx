const Options = ({ feedbackTypes, update, reset, totalFeedback }) => {
  return (
    <>
      {Object.keys(feedbackTypes).map((key) => (
        <button onClick={() => update(key)} type="button" key={key}>
          {key}
        </button>
      ))}
      {totalFeedback === 0 ? (
        false
      ) : (
        <button onClick={reset} type="button">
          Reset
        </button>
      )}
    </>
  );
};

export default Options;
