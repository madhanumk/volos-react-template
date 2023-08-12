import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import logo from "../assets/images/tallent.png"

import navData from '../data/navbar.json';


type NavbarProps = {
  isLanding: boolean;
};

function Navbar({ isLanding }: NavbarProps) {
  const [navActive, setNavActive] = useState<boolean>(false);
  const [sectionNum, setSectionNum] = useState<number>(1);

  /**
   * Hiding navigation on clicking a nav link (important in mobie view)
   */
  const handleLinkClick = () => {
    setNavActive(false);
  };

  /**
   * Change the number in the navigation depends on the number of section
   *
   * @param numToActivate number of activated section
   */
  const handleActive = (numToActivate: number) => {
    setSectionNum(numToActivate);
  };

  /**
   * Toggle menu on clicking on menu btn
   */
  const handleMenuBtnClick = () => {
    setNavActive(!navActive);
  };

  return (
    <div className="content-left">
      <div className="content-left-wrapper">
        <header>
          <div className="toggle-holder">
            <div
              id="toggle"
              onClick={handleMenuBtnClick}
              className={navActive ? 'on' : ''}>
              <div className="menu-line"></div>
            </div>
          </div>

          <div className="top-pagination">
            <div className="current-num">
              <span>0{sectionNum}</span>
            </div>
            <div className="pagination-div"></div>
            <div className="total-pages-num">0{navData.navLinks.length}</div>
          </div>

          <div className={navActive ? 'menu-holder open' : 'menu-holder'}>
            <div className="menu-wrapper relative">
              <img src={logo} alt="" className='menu-logo'/>
              <nav id="header-main-menu">
                <ul className="main-menu sm sm-clean">
                  {navData.navLinks.map((link, i) => (
                    <li key={'nav-' + i} style={{ cursor: 'pointer' }}>
                      <ScrollLink
                        activeClass="current"
                        smooth
                        spy
                        to={link.to}
                        onClick={handleLinkClick}
                        onSetActive={() => handleActive(i + 1)}>
                        {link.text}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
