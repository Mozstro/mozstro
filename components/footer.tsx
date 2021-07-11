const Footer = function Component() {
  return (
    <footer className="container mx-auto mb-4">
      <hr className="border-palesky mx-12 mt-2 lg:mb-4 mb-4"/>
      <p className="text-center text-hippiegreen">
        Made with
        <span className="text-sundance">♡</span>.
        Built with
        <span className="text-sundance"> Next.js </span>
        &
        <span className="text-sundance"> TypeScript</span>
        . Hosted on Netlify.
        Find my source
        <a className="text-ebonyclay hover:text-hippiegreen"
           href="https://github.com/elliotrpmorris/mozstro"> here! </a>
      </p>
    </footer>
  );
};

export default Footer;
