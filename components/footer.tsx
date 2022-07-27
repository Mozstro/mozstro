import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin, faTwitterSquare, faYoutubeSquare, faFacebookSquare, faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import mozstro from '../public/mozstro_logo.png';
import Link from 'next/link';

const Footer = function Component() {
  return (
    <footer className="container mt-4 rounded p-4 bg-ebonyclay mx-auto mb-4">
      <hr className="my-2 text-sundance" />
      <div className="flex flex-wrap md:flex-nowrap justify-around">
        <div className="mb-6 d:mb-0">
          <div className="flex mb-4 mt-6">
             <Image
              className="object-contain"
              src={mozstro}
              alt="Mozstro logo"
              width={40}
              height={40}
            />
            <p className="text-hippiegreen ml-4">Mozstro Limited. Registered in England with company number 13653603.</p>
          </div>
          <ul className="text-center flex-wrap lg:flex-nowrap flex justify-between text-lg">
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
              <a target="_blank" aria-label='Mozstro Linkedin' href="https://www.linkedin.com/company/mozstro/" rel="noreferrer">
                <FontAwesomeIcon
                  className="text-sundance hover:text-hippiegreen w-8 inline"
                  width="48"
                  icon={faLinkedin}
                />
              </a>
            </li>
            <li>
              <a target="_blank" aria-label='Mozstro Linkedin' href="https://instagram.com/mozstro" rel="noreferrer">
                <FontAwesomeIcon
                  className="text-sundance hover:text-hippiegreen ml-3 w-8 inline"
                  width="48"
                  icon={faInstagramSquare}
                />
              </a>
            </li>
            <li>
              <a target="_blank" aria-label='Mozstro Twitter' href="https://twitter.com/mozstro_" rel="noreferrer">
                <FontAwesomeIcon
                  className="text-sundance ml-3 hover:text-hippiegreen w-8 inline"
                  width="48"
                  icon={faTwitterSquare}
                />
              </a>
            </li>
            <li>
              <a target="_blank" aria-label='Mozstro Youtube' href="https://www.youtube.com/channel/UCCRAvf8iziQdd1LDv2MZBiQ" rel="noreferrer">
                <FontAwesomeIcon
                  className="text-sundance ml-3 hover:text-hippiegreen w-8 inline"
                  width="48"
                  icon={faYoutubeSquare}
                />
              </a>
            </li>
          </ul>
          <div className="flex flex-wrap flex-col lg:flex-row justify-between">
            <ul className="mt-2">
              <li>
                <a className="text-sundance text-lg hover:text-hippiegreen" href="/Mozstro_Policy_Modern_Slavery_and_Human_Trafficking.pdf" rel="noreferrer">Modern Slavery Statement</a>
              </li>
              <li>
                <Link href="/service-model">
                <a className="text-sundance text-lg hover:text-hippiegreen" rel="noreferrer">Service model</a>
                </Link>
              </li>
              <li>
                 <Link href="/services">
                <a className="text-sundance text-lg hover:text-hippiegreen" rel="noreferrer">Services</a>
                </Link>
              </li>
            </ul>
            <ul className="mt-2">
              <li>
                 <Link href="/about">
                <a className="text-sundance text-lg hover:text-hippiegreen"  rel="noreferrer">About us</a>
              </Link>
              </li>
              <li>
                <Link href="/contact-us">
                <a className="text-sundance text-lg hover:text-hippiegreen"  rel="noreferrer">Contact us</a>
                </Link>
              </li>
               <li>
                <Link href="/privacy-policy">
                <a className="text-sundance text-lg hover:text-hippiegreen"  rel="noreferrer">Privacy policy</a>
                </Link>
              </li>
            </ul>
          </div>

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
            . Powered by AWS Amplify.
            Find my source
            <a
              className="text-sundance hover:text-hippiegreen"
              href="https://github.com/mozstro/mozstro"
            >
              {' '}
              here!
            </a>
          </p>
          <ul className="flex flex-wrap md:flex-nowrap items-center my-4 justify-around">
            <li><img className='w-40' src="/css.png" alt="CCS" /></li>
           <li><img className='w-40 p-2 bg-white' src="/apn.png" alt="CCS" /></li>
           <li><img className='w-40 p-2 bg-white' src="/ttc.png" alt="CCS" /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
