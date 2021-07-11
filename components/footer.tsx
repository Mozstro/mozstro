const Footer = function Component() {
  return (
    <footer className="container mx-auto ">
      <p className="text-center text-hippiegreen">
        Made with <span className="text-sundance">♡</span>.
        Built with Next.js & TypeScript. Hosted on Netlify.
        Find my source
        <a className="text-ebonyclay hover:text-hippiegreen"
           href="https://github.com/elliotrpmorris/mozstro"> here! </a>
      </p>
    </footer>
  );
};

export default Footer;
