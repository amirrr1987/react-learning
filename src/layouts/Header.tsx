const Header = () => {
  return (
    <header>
      <nav className="bg-blue-900 text-white shadow fixed inset-x-0">
        <div className="container mx-auto px-3 flex justify-between items-center py-1">
          <div>
            <button className="bg-blue-50 text-blue-900 w-20 h-8 rounded">
              Login
            </button>
          </div>
          <ul className="flex gap-x-3">
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">home</a>
            </li>
          </ul>
          <a href="">
            <img className="rounded-full" src="https://picsum.photos/id/637/45/45" alt="" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
