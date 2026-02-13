import AdviceCard from './AdviceCard';

const AdviceList = ({ adviceList }) => {
  if (adviceList.length === 0) return null;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Advice</h2>
      <div className="space-y-4">
        {adviceList.map((advice, index) => (
          <AdviceCard key={`${advice}-${index}`} advice={advice} />
        ))}
      </div>
    </div>
  );
};

export default AdviceList;
