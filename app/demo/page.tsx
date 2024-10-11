import React from 'react';
// import { FaTelegram, FaXTwitter  } from 'react-icons/fa6';

const ContactPage: React.FC = () => {
  return (
    <div className="text-black h-[82vh] flex items-center justify-center">
      <div className="max-w-6xl w-full p-8">
        <div className="flex flex-col items-center justify-center">
          <div className="lg:w-1/2 p-6 pt-0 rounded-lg text-center w-full">

            <h2 className="text-3xl text-black font-semibold">Request Demo and Find Out More</h2>
            <h2 className="text-1xl mt-3 mb-8 text-zinc-700">Submit and we will get back to you ASAP.</h2>
            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col items-center">
              <input type="hidden" name="access_key" value="c4b39749-a38a-44b6-bdb3-f6bad2b40f7f" />
              
              <input type="text" name="name" placeholder="Your Name *" required className="w-11/12 p-4 mb-4 border border-gray-400 rounded-md focus:border-blue-500" />
              <input type="email" name="email" placeholder="Your Email *" required className="w-11/12 p-4 mb-4 border border-gray-400 rounded-md focus:border-blue-500" />
              <input type="text" name="company" placeholder="Company Name *" required className="w-11/12 p-4 mb-4 border border-gray-400 rounded-md focus:border-blue-500" />
              <input type="url" name="website" placeholder="Website *" required className="w-11/12 p-4 mb-4 border border-gray-400 rounded-md focus:border-blue-500" />
              
              <button type="submit" className="w-11/12 p-4 bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 font-bold text-white">Request Demo</button>
            </form>

          </div>
        </div>
      </div>
    </div>


  );
};

export default ContactPage;
