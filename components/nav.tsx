const Nav = function Component() {
  return (
    <nav className="container mx-auto">
      <ul className="flex justify-evenly mt-6">
        <li>
          <a
            className="text-xl cursor-pointer"
            href="/"
            rel="noopener noreferrer"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-xl"
            href="/about"
            rel="noopener noreferrer"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-xl"
            href="/work"
            rel="noopener noreferrer"
          >
            Work
          </a>
        </li>
        <li>
          <a
            className="text-xl"
            href="/posts"
            rel="noopener noreferrer"
          >
            Posts
          </a>
        </li>
        <li>
          <a
            className="text-xl"
            href="/videos"
            rel="noopener noreferrer"
          >
            Videos
          </a>
        </li>
        <li>
          <a
            className="text-xl"
            href="/team"
            rel="noopener noreferrer"
          >
            Team
          </a>
        </li>
      </ul>
      <hr className="mt-2 lg:mb-12 mb-4"/>
    </nav>
  );
};

export default Nav;
