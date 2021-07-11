const Nav = function Component() {
  return (
    <nav className="container mx-auto">
      <ul className="flex justify-evenly mt-6">
        <li>
          <a
            className="text-xl cursor-pointer font-bold text-ebonyclay"
            href="/"
            rel="noopener noreferrer"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-xl font-bold text-ebonyclay"
            href="/about"
            rel="noopener noreferrer"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-xl font-bold text-ebonyclay"
            href="/work"
            rel="noopener noreferrer"
          >
            Work
          </a>
        </li>
        <li>
          <a
            className="text-xl font-bold text-ebonyclay"
            href="/posts"
            rel="noopener noreferrer"
          >
            Posts
          </a>
        </li>
        <li>
          <a
            className="text-xl font-bold text-ebonyclay"
            href="/videos"
            rel="noopener noreferrer"
          >
            Videos
          </a>
        </li>
        <li>
          <a
            className="text-xl font-bold text-ebonyclay"
            href="/team"
            rel="noopener noreferrer"
          >
            Team
          </a>
        </li>
      </ul>
      <hr className="border-ebonyclay border-1  mt-2 lg:mb-12 mb-4"/>
    </nav>
  );
};

export default Nav;
