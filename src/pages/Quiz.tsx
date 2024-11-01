import { useState } from "react";
import Confetti from "react-confetti";

const QuizPage = () => {
  const [add, setAdd] = useState(false);
  return (
    <>
      {add && <Confetti width={1720} height={500} recycle={true} />}
      <button onClick={() => setAdd(true)}>Add</button>
      <button onClick={() => setAdd(false)}>Remove</button>
    </>
  );
};

export default QuizPage;
