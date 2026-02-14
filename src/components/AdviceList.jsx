import AdviceCard from "./AdviceCard";

const AdviceList = ({ adviceList }) => {
  if (adviceList.length === 0) return null;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 px-2 sm:px-0">
        Your Advice
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {adviceList.map((advice, index) => (
          <AdviceCard key={`${advice}-${index}`} advice={advice} />
        ))}
      </div>
    </div>
  );
};

export default AdviceList;
