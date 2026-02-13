const Loader = () => (
  <div className="flex flex-col items-center justify-center py-12">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-indigo-200 rounded-full"></div>
      <div className="w-16 h-16 border-4 border-indigo-600 rounded-full animate-spin border-t-transparent absolute top-0 left-0"></div>
    </div>
    <p className="mt-4 text-gray-600 animate-pulse">Generating advice...</p>
  </div>
);

export default Loader;
