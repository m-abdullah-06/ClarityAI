import { createContext, useContext, useState } from 'react';

const AdviceContext = createContext();

export const useAdvice = () => {
  const context = useContext(AdviceContext);
  if (!context) {
    throw new Error('useAdvice must be used within AdviceProvider');
  }
  return context;
};

export const AdviceProvider = ({ children }) => {
  const [adviceList, setAdviceList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addAdvice = (advice) => {
    setAdviceList(prev => [...advice, ...prev]);
  };

  const clearAdvice = () => {
    setAdviceList([]);
  };

  const value = {
    adviceList,
    isLoading,
    error,
    setIsLoading,
    setError,
    addAdvice,
    clearAdvice,
  };

  return (
    <AdviceContext.Provider value={value}>
      {children}
    </AdviceContext.Provider>
  );
};
