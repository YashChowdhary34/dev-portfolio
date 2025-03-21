export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 boder border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Projects
        </a>
        <a href="#" className="nav-item">
          About
        </a>
        <a
          href="#"
          className="nav-item bg-gradient-to-r from-red-500 to-rose-400 text-white hover:opacity-80"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
