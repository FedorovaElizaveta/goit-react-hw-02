import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useEffect, useState } from "react";

function App() {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const currentFeedback = localStorage.getItem("feedback");
    return currentFeedback ? JSON.parse(currentFeedback) : initialFeedback;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setFeedback(initialFeedback);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedbackRate = Math.round(
    (feedback.good / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        feedbackTypes={initialFeedback}
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
