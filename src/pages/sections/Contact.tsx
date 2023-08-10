import React, { Fragment, useState } from 'react';

// Plugins
// import axios from 'axios';

// Data
import contactData from '../../data/contact.json';

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
        <div className="content-1300">
          <div className="row">
            <div className="one-half width-40">
              {/* <p className="section-info">{contactData.description}</p>
              {contactData.paragrapgs.map((parg, i) => (
                <p key={'contact-parg-' + i}>{parg}</p>
              ))} */}
              {/* <p>
                {contactData.contactInfo.map((info, i) => (
                  <Fragment key={'contact-info-' + i}>
                    <b>{info.title}</b> {info.value} <br />
                  </Fragment>
                ))}
              </p> */}
              <p> <b>Phone  : </b> +91 98420 88555<br /> <b>Email :  </b> dprabhusrikanth@gmail.com<br /></p>

            </div>

            <div className="one-half width-55 last">



              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1505804441153!2d76.93795980911587!3d11.02732688909177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85815bb375b37%3A0x2ae31305026b56e8!2sRepute%20Digital%20Business%20Agency!5e0!3m2!1sen!2sin!4v1691584627900!5m2!1sen!2sin"
                width="100%"
                height="500"
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
