import { useState } from 'react';
import { getAdvice } from '../services/api';

const AdviceInput = ({ onAdviceReceived, onError, onLoading }) => {
  const [problem, setProblem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!problem.trim()) {
      onError('Please enter a problem or situation');
      return;
    }

    if (!window.puter) {
      onError('Puter.js is still loading. Please wait.');
      return;
    }

    onError(null);
    onLoading(true);

    try {
      const data = await getAdvice(problem);
      onAdviceReceived(data.advice);
      setProblem('');
    } catch (err) {
      onError(err.message);
    } finally {
      onLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-8 fade-in">
      <form onSubmit={handleSubmit} className="card">
        <label htmlFor="problem" className="block text-gray-700 font-medium mb-3">
          What's on your mind?
        </label>
        <textarea
          id="problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="Share your problem, challenge, or situation..."
          className="input-field resize-none h-32"
          maxLength={500}
        />
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">{problem.length}/500</span>
          <button type="submit" className="btn-primary">
            Get Advice
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdviceInput;
