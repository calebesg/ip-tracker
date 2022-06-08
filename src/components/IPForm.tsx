import iconArrow from '../assets/icon-arrow.svg';

function IPForm() {
  return (
    <form className="flex items-center h-14 max-w-lg w-full rounded-xl overflow-hidden translate-y-7">
      <input
        type="text"
        aria-label="enter a ip address"
        placeholder="Search any a IP address or domain"
        className="flex-1 h-full text-lg px-5"
      />
      <button className="bg-black flex items-center justify-center h-full w-14 text-lg">
        <img src={iconArrow} alt="arrow right" />
      </button>
    </form>
  );
}

export default IPForm;
