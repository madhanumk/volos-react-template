// Images
// import signature from '../../assets/images/signature2.png';

// Data
import resumeData from '../../data/resume.json';
import { markdownToHTML } from '../../utils/converter';
import aboutImage from '../../assets/images/aboutImage.jpg'
import about from '../../assets/images/about.png'

// -------------

function Resume() {
  return (
    <section id="resume" className="section">
      <div className="section-wrapper block">
        <div className="content-1300">
          <div className="row about-main">
            <div className="one-half about1 width-50">

              <img src={about} alt='aboutImage' className="resume-sect-img" />
              {/* <h2 className="entry-title section-title">
                {resumeData.experience.title}
              </h2>

              <ul className="timeline-holder">
                {resumeData.experience.expPiece.map((exp, i) => (
                  <li key={'exp-' + i} className="timeline-event">
                    <span className="timeline-circle"></span>
                    <div
                      className="timeline-event-content"
                      dangerouslySetInnerHTML={{
                        __html: markdownToHTML(exp.description),
                      }}></div>
                    <div className="timeline-event-date">{exp.date}</div>
                  </li>
                ))}
              </ul> */}
            </div>

            <div className="one-half width-50 last pt-30">
              {/* <h2 className="entry-title section-title">
                {resumeData.coverLetter.title}
              </h2>
              <p className="section-info">
                {resumeData.coverLetter.description}
              </p> */}



              {/* {resumeData.coverLetter.paragraphes.map((parg, i) => (
                <p key={'parg-' + i}>{parg}</p>
              ))} */}

              <p>Tallent Steel Industries India, started in the year 1994 is a trusted Steel Trading and Manufacturing company based out of Coimbatore. The company is engaged in the manufacture of TMT Rods of varying grades and has its own smelting and Re-bar unit. The company has very strong nexus with quality steel manufactures and is actively engaged in the trading of Ferrous Scrap, MS Billets and TMT bars.</p>
              <p>The company has its operations in<br/> <b>Chennai   |    Madurai     |     Coimbatore      |      Salem     |      Trichy      |      Tirunelveli</b></p>
              <p>Tallent Steel is ably run by its Managing Director Mr. Prabhu Srikanth. A dynamic professional , Prabhu Shrikanth is a qualified and practicing lawyer with versatile business interest viz. Steel Manufacture & Trading, Legal Advocacy – Civil, Corporate & Criminal, Agro Trading and Film Distribution.</p>
              {/* <img className="my-signature" src={signature} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
