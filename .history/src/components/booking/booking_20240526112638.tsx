import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../navbar/navbar';
import house from '../../media/ravenna/ravenna1.png';

interface InputField {
  placeholder: string;
  name: string;
}

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false); // Change initial state to false
  const form = useRef<HTMLFormElement>(null);

  const navLinks = [
    {
      destination:'/',
      name:'Home'
    },
    {
      destination: '/custom-homes',
      name: 'Custom Homes'
  },
  {
      destination: '/commercial-construction',
      name: 'Commercial Construction'
  },
  {
      destination: '/retail-homes',
      name: 'Retail Homes'
  }
  
  ]

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
          setSubmitted(true); // Set submitted to true when form is successfully submitted
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  const inputFields: InputField[] = [
    { placeholder: 'Email', name: 'user_email' },
    { placeholder: 'First Name', name: 'first_Name' },
    { placeholder: 'Last Name', name: 'last_Name' },
    { placeholder: 'Phone number', name: 'phone_Number' },
    { placeholder: 'Your Message', name: 'project_Details' },
  ];

  return (
    <>
      <Navbar
      links={navLinks} />

      <div className='w-screen h-screen flex justify-center items-center absolute top-10 left-0 bg-[#35465E]'>
        <div className='hidden md:block md:w-[50vw] max-w-[650px] ml-auto bg-black pt-3 pb-3 bg-opacity-70 rounded-3xl'>
          <h1 className='text-white text-4xl mb-4'>Dolce Vita</h1>
          <img src={house} className='w-[50vw] object-cover' />
          <p className='mt-4 text-3xl'>The best construction and consulting in halifax</p>
        </div>
        <div className='text-center ml-auto mr-auto md:w-[50vw] max-w-[400px]'>
          {submitted ? ( // Conditional rendering based on the submitted state
            <div>
              <h2 className='text-white text-2xl mt-5 pl-3 pr-3'>Form Submitted Successfully!</h2>
              <p className='text-white'>Thank you for reaching out.</p>
            </div>
          ) : (
            <div>
              <h1>Dolce Vita</h1>
              <h2 className='text-white text-2xl mt-5 pl-3 pr-3'>You have made an excellent choice</h2>
              <p className='w-4/5 ml-auto mr-auto'>Let's get in contact so we can work together</p>
              <form onSubmit={sendEmail} ref={form}>
                <div className='mt-8 flex flex-col justify-center items-center bg-opacity-100 pt-6 pb-6 rounded-3xl'>
                <form onSubmit={sendEmail} ref={form}>
  <div className='mt-8 flex flex-col justify-center items-center bg-opacity-100 pt-6 pb-6 rounded-3xl'>
    <input
      className='border border-blue-400 bg-black rounded-xl text-white focus:placeholder-gray-300 p-2 mb-3 w-[80vw] max-w-[400px]'
      type="email"
      placeholder="Email"
      name="user_email"
    />
    <input
      className='border border-blue-400 bg-black rounded-xl text-white focus:placeholder-gray-300 p-2 mb-3 w-[80vw] max-w-[400px]'
      type="text"
      placeholder="First Name"
      name="first_Name"
    />
    <input
      className='border border-blue-400 bg-black rounded-xl text-white focus:placeholder-gray-300 p-2 mb-3 w-[80vw] max-w-[400px]'
      type="text"
      placeholder="Last Name"
      name="last_Name"
    />
    <input
      className='border border-blue-400 bg-black rounded-xl text-white focus:placeholder-gray-300 p-2 mb-3 w-[80vw] max-w-[400px]'
      type="tel"
      placeholder="Phone number"
      name="phone_Number"
    />
    <textarea
      className='border border-blue-400 bg-black rounded-xl text-white focus:placeholder-gray-300 p-2 mb-3 w-[80vw] max-w-[400px]'
      placeholder="Your Message"
      name="project_Details"
    />
  </div>
  <button type='submit' className='bg-white hover:bg-main-color hover:text-white hover:scale-[1.0] transition all'>Send Message</button>
</form>

                </div>
                <button type='submit' className='bg-white hover:bg-main-color hover:text-white hover:scale-[1.0] transition all'>Send Message</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Booking;




{/* <textarea
key={index}
className=' border border-blue-400 bg-black rounded-xl text-white focus:placeholder-gray-300 p-2 mb-3 w-[80vw] max-w-[400px]'
placeholder={inputField.placeholder}
name={inputField.name}
/> */}