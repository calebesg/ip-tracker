import { FormEvent, FormEventHandler, useState } from 'react';
import iconArrow from '../assets/icon-arrow.svg';

interface HeaderProps {
  onSubmitForm: (props: string) => void;
}

function Header({ onSubmitForm }: HeaderProps) {
  const [ip, setIp] = useState('');

  const handlerSubmit = function (event: FormEvent) {
    event.preventDefault();
    onSubmitForm(ip);
  };

  return (
    <header className="bg-location-pattern bg-cover h-80 sm:h-72 flex flex-col items-center pt-8 px-4 relative">
      <h1 className="text-white font-medium text-3xl">IP Address Tracker</h1>

      <form
        onSubmit={handlerSubmit}
        className="flex items-center h-14 max-w-lg w-full rounded-xl overflow-hidden mt-7"
      >
        <input
          type="text"
          value={ip}
          onChange={e => setIp(e.target.value)}
          aria-label="enter a ip address"
          placeholder="Search any a IP address or domain"
          className="flex-1 h-full text-lg px-5 cursor-pointer outline-none"
        />
        <button className="bg-black flex items-center justify-center h-full w-14 text-lg hover:bg-gray-800 transition-all">
          <img src={iconArrow} alt="arrow right" />
        </button>
      </form>
    </header>
  );
}

export default Header;
