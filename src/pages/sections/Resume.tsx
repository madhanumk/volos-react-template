// Images
// import signature from '../../assets/images/signature2.png';

// Data
import resumeData from '../../data/resume.json';
import { markdownToHTML } from '../../utils/converter';
import aboutImage from '../../assets/images/aboutImage.jpg'
import about from '../../assets/images/about.png'
import profile from "../../assets/images/dummy-person.jpg"

// -------------

function Resume() {
  return (
    <section id="resume" className="section">
      <div className="section-wrapper block">
        <div className="content-1300">
          <div className="row about-main">
            <div className="one-half about1 width-50">
              <img src={about} alt='aboutImage' className="resume-sect-img" />
            </div>

            <div className="one-half width-50 last pt-10">
              <p>Tallent Steel Industries India, started in the year 1994 is a trusted Steel Trading and Manufacturing company based out of Coimbatore. The company is engaged in the manufacture of TMT Rods of varying grades and has its own smelting and Re-bar unit. The company has very strong nexus with quality steel manufactures and is actively engaged in the trading of Ferrous Scrap, MS Billets and TMT bars.</p>
              <p>The company has its operations in<br /> <b>Chennai   |    Madurai     |     Coimbatore      |      Salem     |      Trichy      |      Tirunelveli</b></p>
              <div className='about_content'>
                <img src={profile} className="profile" alt="" />
                <p>Tallent Steel is ably run by its Managing Director Mr. Prabhu Srikanth. A dynamic professional , Prabhu Shrikanth is a qualified and practicing lawyer with versatile business interest viz. Steel Manufacture & Trading, Legal Advocacy – Civil, Corporate & Criminal, Agro Trading and Film Distribution.</p>
              </div>
              <a href="#" className='linkedIn'>
                LINKEDIN
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Resume;
