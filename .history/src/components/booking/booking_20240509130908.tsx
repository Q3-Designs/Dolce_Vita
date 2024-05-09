import React, { useState, useRef, useEffect } from 'react';
import './booking.css';
import emailjs from '@emailjs/browser';
import Navbar from '../navbar/navbar';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../footer/footer';

interface Link {
  dest: string;
  name: string;
}

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = 'service_32u1f5x';
    const templateId = 'template_ubgz5ef';
    const userId = 'CN_-9JmkFRgjxgmrg';

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, userId)
        .then((result) => {
          console.log(result.text);
          setSubmitted(true);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  useEffect(() => {
    // Scroll to the top when the "submitted" state changes
    if (submitted) {
      window.scrollTo(0, 0);
    }
  }, [submitted]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const links: Link[] = [
    {
      dest: '/',
      name: 'Home',
    },
    {
      dest: '/why-us',
      name: 'Why Us',
    },
    {
      dest: '/about',
      name: 'About Us',
    },
    {
      dest: 'https://ab7882-2.myshopify.com',
      name: 'Shop',
    },
  ];

  return (
    <>
      {/* <Navbar links={links} /> */}

      <div className="booking-container">
        <div className="booking-contents">
          <div className="small">
            <div className="le-box">
            
              <h1 className="title-text booking-title"></h1>
              {submitted ? (
                <div style={{ height: '100vh' }}>
                  <p className="description-text">Thank you for your service! We'll get in touch with you shortly.</p>
                  <button className="button">Home</button>
                </div>
              ) : (
                <>
                  <p className="booking-p">Let's get in contact so we can work together</p>
                  <form onSubmit={sendEmail} ref={form}>
                    <div className="info-box-container">
                      <input type="email" placeholder="Email" name="user_email" />
                      <input type="text" placeholder="First Name" name="first_Name" />
                      <input type="text" placeholder="Last Name" name="last_Name" />
                      <input type="text" placeholder="Company name (if applicable)" name="company_Name" />
                      <input type="text" placeholder="Phone number" name="phone_Number" />
                      <input type="text" placeholder="Project details" name="project_Details" />
                    </div>

              

                    <button className="button submit-button" type="submit">
                      Submit request
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="big">
          {/* <img src={nobg} alt="nobg" /> */}
          <h2 className="title-text">Q3 Designs</h2>
          <ul className="description-text">
            <AnimatePresence mode="wait">
              <motion.li initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}>
                Discipline
              </motion.li>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.li
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.4 } }}
              >
                Creativity
              </motion.li>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.li
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.8 } }}
              >
                Precision
              </motion.li>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.li
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 1.2 } }}
              >
                Tenacity
              </motion.li>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.li
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 1.6 } }}
              >
                Focus
              </motion.li>
            </AnimatePresence>
          </ul>
          <AnimatePresence mode="wait">
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 2.4 } }}
              exit={{ scale: 0.0, transition: { duration: 0.5 } }}
              className="title-text promise"
            >
              We will get it done
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Booking;