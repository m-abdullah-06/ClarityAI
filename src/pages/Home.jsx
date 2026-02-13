import { useState } from 'react';
import AdviceInput from '../components/AdviceInput';
import AdviceList from '../components/AdviceList';
import Loader from '../components/Loader';

const Home = () => {
  const [adviceList, setAdviceList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAdviceReceived = (advice) => {
    setAdviceList([...advice, ...adviceList]);
  };

  return (
    <div className="w-full px-4 pb-12">
      <AdviceInput
        onAdviceReceived={handleAdviceReceived}
        onError={setError}
        onLoading={setIsLoading}
      />
      
      {error && (
        <div className="max-w-3xl mx-auto mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded fade-in">
          <p className="font-medium">Error</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {isLoading && <Loader />}
      
      {!isLoading && <AdviceList adviceList={adviceList} />}
    </div>
  );
};

export default Home;
