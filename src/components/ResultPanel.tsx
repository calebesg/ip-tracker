function ResultPanel() {
  const renderCard = function () {
    return (
      <>
        <li className="text-center sm:text-left">
          <span className="text-gray-400 font-medium text-xs tracking-widest">
            IP ADDRESS
          </span>
          <p className="text-gray-800 font-medium text-2xl sm:mt-3 sm:pr-16">
            192.212.174.101
          </p>
        </li>
        <li className="px-4 sm:border-l sm:border-gray-300  text-center sm:text-left">
          <span className="text-gray-400 font-medium text-xs tracking-widest">
            LOCATION
          </span>
          <p className="text-gray-800 font-medium text-2xl sm:mt-3 sm:pr-16">
            Brooklyn, NY 10001
          </p>
        </li>
        <li className="px-4 sm:border-l sm:border-gray-300 text-center sm:text-left">
          <span className="text-gray-400 font-medium text-xs tracking-widest">
            TIMEZONE
          </span>
          <p className="text-gray-800 font-medium text-2xl sm:mt-3 sm:pr-16">
            UTC -5:00
          </p>
        </li>
        <li className="px-4 sm:border-l sm:border-gray-300 text-center sm:text-left">
          <span className="text-gray-400 font-medium text-xs tracking-widest">
            ISP
          </span>
          <p className="text-gray-800 font-medium text-2xl sm:mt-3 sm:pr-16">
            SpaceX Starlink
          </p>
        </li>
      </>
    );
  };

  return (
    <ul className="grid gap-4 grid-cols-1 grid-rows-4 sm:grid-cols-4 sm:grid-rows-1 max-w-6xl w-11/12 xl:w-full bg-white rounded-xl px-8 py-9 absolute bottom-0 translate-y-52 sm:translate-y-1/2">
      {renderCard()}
    </ul>
  );
}

export default ResultPanel;
