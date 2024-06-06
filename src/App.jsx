import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useState } from "react";

function App() {
  const feedbackTypes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(feedbackTypes);

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setFeedback(feedbackTypes);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedbackRate = Math.round(
    (feedback.good / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        feedbackTypes={feedbackTypes}
        update={updateFeedback}
        reset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedbackRate={positiveFeedbackRate}
        />
      )}
    </>
  );
}

export default App;
