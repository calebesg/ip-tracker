import ResultPanel from './ResultPanel';
import IPForm from './IPForm';

function Header() {
  return (
    <header className="bg-location-pattern bg-cover flex flex-col items-center pt-8 px-4 sm:px-0">
      <h1 className="text-white font-medium text-3xl">IP Address Tracker</h1>

      <IPForm />

      <ResultPanel />
    </header>
  );
}

export default Header;
