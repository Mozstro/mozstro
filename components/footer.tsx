import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = function Component() {
  return (
    <footer className="container rounded p-4 bg-ebonyclay mx-auto mb-4">
      <div className="flex flex-wrap md:flex-nowrap justify-around">
        <div className="mb-6 d:mb-0">
          <div className="flex mb-4 mt-6">
            <img className="w-10 object-contain" src="mozstro_logo.png" alt="Mozstro Logo" />
            <p className="text-hippiegreen ml-4">Mozstro Limited. Registered in England with company number 13653603.</p>
          </div>

          <ul className="text-center flex-wrap md:flex-nowrap flex justify-between text-lg">
            <li className="mr-2 text-hippiegreen">
              Email:
              <a
                className="text-sundance hover:text-hippiegreen"
                href="mailto:sales@mozstro.com"
              >
                 &nbsp; sales@mozstro.com
              </a>
            </li>

            <li className="text-hippiegreen">
              Phone:
              <a
                className="text-sundance hover:text-hippiegreen"
                href="tel:07949155434"
              >
                  &nbsp;07949155434
              </a>
            </li>

          </ul>
          <ul className="flex">
            <li>
              <a target="_blank" href="https://www.linkedin.com/company/mozstro/" rel="noreferrer">
                <FontAwesomeIcon
                  className="text-sundance hover:text-hippiegreen w-8 inline"
                  width="48"
                  icon={faLinkedin}
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/mozstro_" rel="noreferrer">
                <FontAwesomeIcon
                  className="text-sundance ml-3 hover:text-hippiegreen w-8 inline"
                  width="48"
                  icon={faTwitterSquare}
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-center mt-6 text-hippiegreen">
            Made with
            <span className="text-sundance">♡</span>
            .
            Built with
            <span className="text-sundance"> Next.js </span>
            &
            <span className="text-sundance"> TypeScript</span>
            . Hosted on Vercel.
            Find my source
            <a
              className="text-sundance hover:text-hippiegreen"
              href="https://github.com/elliotrpmorris/mozstro"
            >
              {' '}
              here!
            </a>
          </p>
          <ul className="flex my-4 justify-center">
            <li><img src="/aws_sa_asso.png" alt="AWS SA Associate certification" /></li>
            <li><img src="/aws_dev_asso.png" alt="AWS Developer Associate certification" /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
