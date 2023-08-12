// Data
import homeData from '../../data/home.json';
import tmt from "../../assets/images/Tmt.jpg";
import logo from '../../assets/images/tallent.png'
import homeNew from '../../assets/images/homeNew.jpg'

// ---------------

function Home() {
  return (
    <section id="home" className="section full-width-section">
      <div className="section-wrapper block">
        <div className="home-left-part">
          <img src={logo} alt="logo" className='tallent-logo' />
          <div className='home-main'>

          <div className='home_hide'>
              <img src={homeNew} alt="tmt" className='home_hideImg' />
            </div>

            <div className='home-sec1'>
              <p className='home_content'>
              Incepted in 1994, Tallent Steel Industries India supplies varying grades of TMT rods to meet the diverse residential and commercial construction requirements. We are one of the leading and trusted steel trading and manufacturing companies based in Coimbatore, with 18+ years of experience delivering reliable, durable and efficient TMT steel rods, Ferrous Scrap and MS Billets with a good understanding of our customers' precise needs.
              </p>

              {/* <div className="social-links">
                {homeData.socialLinks.map((link, i) => (
                  <a key={'social-link-' + i} href={link.to}>
                    {link.text}
                  </a>
                ))}
              </div> */}
            </div>
           
          </div>
        </div>
        <div className="home-right-part">
          <img src={homeNew} alt="tmt" className='homeimg' />
        </div>
      </div>
    </section>
  );
}

export default Home;
