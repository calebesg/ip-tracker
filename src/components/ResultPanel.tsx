import { IPData } from './App';

interface ResultPanelProps {
  info: IPData | null;
}

function ResultPanel({ info }: ResultPanelProps) {
  return (
    <ul className="grid gap-4 grid-cols-1 grid-rows-4 sm:grid-cols-4 sm:grid-rows-1 max-w-6xl w-full bg-white rounded-xl px-8 py-9 mx-auto">
      <li className="text-center sm:text-left">
        <span className="text-gray-400 font-medium text-xs tracking-widest">
          IP ADDRESS
        </span>
        <p className="text-gray-800 font-medium text-2xl sm:mt-3 sm:pr-16">
          {info ? info?.ip : '_'}
        </p>
      </li>
      <li className="px-4 sm:border-l sm:border-gray-300  text-center sm:text-left">
        <span className="text-gray-400 font-medium text-xs tracking-widest">
          LOCATION
        </span>
        <p className="text-gray-800 font-medium text-2xl sm:mt-3 sm:pr-16">
          {info ? `${info?.location.region}, ${info?.location.country}` : '_'}
        </p>
      </li>
      <li className="px-4 sm:border-l sm:border-gray-300 text-center sm:text-left">
        <span className="text-gray-400 font-medium text-xs tracking-widest">
          TIMEZONE
        </span>
        <p className="text-gray-800 font-medium text-2xl sm:mt-3 sm:pr-16">
          {info ? ` UTC ${info?.location.timezone}` : '_'}
        </p>
      </li>
      <li className="px-4 sm:border-l sm:border-gray-300 text-center sm:text-left">
        <span className="text-gray-400 font-medium text-xs tracking-widest">
          ISP
        </span>
        <p className="text-gray-800 font-medium text-2xl sm:mt-3 sm:pr-16">
          {info ? info?.isp : '_'}
        </p>
      </li>
    </ul>
  );
}

export default ResultPanel;
