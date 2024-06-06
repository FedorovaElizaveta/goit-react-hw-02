const Feedback = ({ feedback, totalFeedback, positiveFeedbackRate }) => {
  return (
    <>
      {Object.entries(feedback).map(([key, value]) => (
        <p key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
        </p>
      ))}
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedbackRate}%</p>
    </>
  );
};

export default Feedback;
