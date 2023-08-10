// Data
// import skills from '../../data/skills.json';

// ---------------

function skills() {
    return (
        <section id="skills" className="section full-width-section">
            <div className="section-wrapper2 block">
                <div className="home-left-part">
                    {/* {
                        homeData.product.map((value, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        <h6>{value.name}</h6>
                                        <p>{value.text}</p>
                                    </div>
                                </>
                            )
                        })
                    } */}
                   
                        <h6>TMT Steel Rods Trading </h6>
                        <p>We deal with TMT Steel rods from some of the leading steel manufacturers. We handle various grades of steel (Fe500, Fe500D) in varying sizes (8mm- 32mm). We supply both small and larger volumes of TMT steel across Tamilnadu. Regular / Periodic supply of quality steel rods for projects at competitive project / wholesale pricing is also done for larger infrastructure developers.
                        </p>

                        <h6>Ferrous Scrap  </h6>
                        <p>We supply ferrous scrap of various grades to anywhere across Tamilnadu. We handle both domestic scrap and import quality scrap from across the globe. As a seasoned scrap trader, we can ensure committed on-time delivery of quality ferrous scrap of any volume. We undertake continuous, schedules monthly volumes of Ferrous scrap delivery.
                        </p>

                        <h6>MS Billets </h6>
                        <p>Mild Steel (MS) – Billets of certified quality and (100mm- 120mm) grade can be supplied on regular basis across TamilNadu.
                        </p>
                  


                    {/* <p className="site-des">{homeData.welcomeText}</p> */}
                    {/* <h4 className="entry-title">{homeData.name}</h4>
          <p className="site-info">{homeData.text}</p> */}

                    {/* <div className="social-links">
            {homeData.socialLinks.map((link, i) => (
              <a key={'social-link-' + i} href={link.to}>
                {link.text}
              </a>
            ))}
          </div> */}
                </div>
                <div className="home-right-part">
                    
                </div>
            </div>
        </section>
    );
}

export default skills;
