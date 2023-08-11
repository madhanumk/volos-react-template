import React, { Fragment, useState } from 'react';

// Plugins
// import axios from 'axios';

// Data
import contactData from '../../data/contact.json';
import homeData from '../../data/home.json';

// ----------------

// type formDataType = {
//   'your-name': string;
//   'your-email': string;
//   'your-subject': string;
//   'your-message': string;
// };
// const initialFormData = {
//   'your-name': '',
//   'your-email': '',
//   'your-subject': '',
//   'your-message': '',
// };

// to handle sending form message

// type serverStateType = {
//   submitting: boolean;
//   status?: {
//     ok: boolean;
//     msg: string;
//   } | null;
// };

function Contact() {

  // const [formData, setFormData] = useState<formDataType>(initialFormData);
  // const [serverState, setServerState] = useState<serverStateType>({
  //   submitting: false,
  //   status: null,
  // });

  /**
   * Change {formData} variable when user input data
   *
   * @param e change event in form inputs
   */

  // const handleDataChange = (
  //   e:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLTextAreaElement>
  // ) => {
  //   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  /**
   * Handle the http request we sent to send our message (that user wrote)
   * and give message to the user to know what happened, is the message sent or not.
   *
   * @param ok if message has been sent or not
   * @param msg the message to be shown to the user
   */

  // const handleServerResponse = (ok: boolean, msg: string) => {
  //   setServerState({
  //     submitting: false,
  //     status: { ok, msg },
  //   });
  //   if (ok) {
  //     setFormData(initialFormData);
  //   }
  //   setTimeout(() => {
  //     setServerState((prev: serverStateType) => ({ ...prev, status: null }));
  //   }, 3000);
  // };

  /**
   * Submitting message when user clock send button
   *
   * @param e form submit event
   */
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   // Submitting Form
  //   setServerState({ submitting: true });
  //   axios({
  //     method: 'post',
  //     url: contactData.formspreeEndpoint,
  //     data: formData,
  //   })
  //     .then((r) => {
  //       handleServerResponse(true, 'Message Has Been Send');
  //     })
  //     .catch((r) => {
  //       handleServerResponse(false, 'Error occuars while sending');
  //     });
  // };

  return (
    <section id="contact" className="section">
      <div className="section-wrapper block">
        <div className="content-1300 contact-sec">
          <div className="row contact-main">
            <div className="one-half width-40">

              <div> 
                <h3>Contact Info</h3>
                <b>PRABHU SRIKANTH</b><br />
                <b>Phone  : </b> +91 98420 88555<br /> <b>Email :  </b>talentsteelindustriesindia22@gmail.com<br />
              <b>Factory : </b>SF No. 476, K.G. Palayam Annur, Coimbatore - 641 697.<br />
              <b>Address  : </b>134 & 135, 1st Floor, Broadway Road, Chennai - 600 104.<br />
              <div className="social-links-contacts">
                {homeData.socialLinks.map((link, i) => (
                  <a key={'social-link-' + i} href={link.to}>
                    {link.text}
                  </a>
                ))}
              </div>
              </div>

            </div>

            <div className="one-half width-55 last">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.2836317456799!2d76.79084942459005!3d10.953209200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8673028332251%3A0x2c804348e17166ac!2sK%20G%20Palayam%20Temple!5e0!3m2!1sen!2sin!4v1691753495558!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* <div className="contact-form"> 
                <form action="#" method="post" onSubmit={handleSubmit}>
                  <p>
                    <input
                      id="name"
                      type="text"
                      name="your-name"
                      placeholder="NAME"
                      pattern="(?!.^\s$)[A-Za-z ]{3,}"
                      required
                      value={formData['your-name']}
                      onChange={handleDataChange}
                    />
                  </p>
                  <p>
                    <input
                      id="contact-email"
                      type="email"
                      name="your-email"
                      placeholder="EMAIL"
                      pattern="(?=.*[a-zA-Z])[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}"
                      required
                      value={formData['your-email']}
                      onChange={handleDataChange}
                    />
                  </p>
                  <p>
                    <input
                      id="subject"
                      type="text"
                      name="your-subject"
                      placeholder="SUBJECT"
                      pattern="(?!.^\s$)[A-Za-z ]{3,}"
                      required
                      value={formData['your-subject']}
                      onChange={handleDataChange}
                    />
                  </p>
                  <p>
                    <textarea
                      id="message"
                      name="your-message"
                      placeholder="MESSAGE"
                      required
                      value={formData['your-message']}
                      onChange={handleDataChange}></textarea>
                  </p>
                  <p className="contact-submit-holder">
                    <input type="submit" value="SEND" />
                  </p>
                  {(serverState.submitting || serverState.status?.msg) && (
                    <p className="respond-message">
                      {serverState.submitting
                        ? 'Sending message'
                        : serverState.status
                        ? serverState.status?.msg
                        : ''}
                    </p>
                  )}
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
