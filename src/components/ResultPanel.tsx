import { IPData } from './App';

interface ResultPanelProps {
  info: IPData | null;
}

interface ItemProps {
  label: string;
  content: string | undefined;
}

function ResultPanel({ info }: ResultPanelProps) {
  const renderItem = function ({ label, content }: ItemProps) {
    return (
      <li className="text-center sm:text-left sm:pl-8 first:pl-0">
        <span className="text-gray-400 font-medium text-xs tracking-widest">
          {label}
        </span>
        <p
          className="text-gray-800 font-medium text-2xl sm:mt-3 sm:pr-16"
          style={{ lineHeight: '1.5rem' }}
        >
          {content ? content : '_'}
        </p>
      </li>
    );
  };

  return (
    <ul className="grid gap-1 grid-cols-1 grid-rows-4 sm:grid-cols-4 sm:grid-rows-1 max-w-6xl w-full bg-white rounded-xl px-8 py-9 mx-auto sm:divide-x shadow-sm">
      {renderItem({ label: 'IP ADDRESS', content: info?.ip })}
      {renderItem({
        label: 'LOCATION',
        content: info
          ? `${info?.location.region}, ${info?.location.country}`
          : '',
      })}
      {renderItem({
        label: 'TIMEZONE',
        content: info ? `UTC ${info?.location.timezone}` : '',
      })}
      {renderItem({ label: 'ISP', content: info?.isp })}
    </ul>
  );
}

export default ResultPanel;
