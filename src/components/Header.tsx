import IPForm from './IPForm';

function Header() {
  return (
    <header className="bg-location-pattern bg-cover h-80 sm:h-72 flex flex-col items-center pt-8 px-4 relative">
      <h1 className="text-white font-medium text-3xl">IP Address Tracker</h1>

      <IPForm />
    </header>
  );
}

export default Header;
