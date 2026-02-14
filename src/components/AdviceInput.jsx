import { useState } from "react";
import { getAdvice } from "../services/api";

const AdviceInput = ({ onAdviceReceived, onError, onLoading }) => {
  const [problem, setProblem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!problem.trim()) {
      onError("Please enter a problem or situation");
      return;
    }

    if (!window.puter) {
      onError("Puter.js is still loading. Please wait.");
      return;
    }

    onError(null);
    onLoading(true);

    try {
      const data = await getAdvice(problem);
      onAdviceReceived(data.advice);
      setProblem("");
    } catch (err) {
      onError(err.message);
    } finally {
      onLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-6 sm:mb-8 fade-in">
      <form onSubmit={handleSubmit} className="card">
        <label
          htmlFor="problem"
          className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base"
        >
          What's on your mind?
        </label>
        <textarea
          id="problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="Share your problem, challenge, or situation..."
          className="input-field resize-none h-28 sm:h-32 outline-none text-sm sm:text-base"
          maxLength={500}
        />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mt-3 sm:mt-4">
          <span className="text-xs sm:text-sm text-gray-500">
            {problem.length}/500
          </span>
          <button
            type="submit"
            className="btn-primary w-full sm:w-auto text-sm sm:text-base"
          >
            Get Advice
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdviceInput;
