import React from 'react';
import aboutImage from '../assets/Image.svg'; // Using Image.svg for the About section image

const AboutScreen = () => {
  const values = [
    {
      id: 1,
      title: 'Inclusive and Affordable',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      title: 'Great Venues and Devoted Organisers',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      title: 'Development of Women\'s and Mixed Football',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 4,
      title: 'Social Aspects and Good Vibes',
      description: 'We\'re all in on Barcelona! Instead of jumping into other cities, we\'re keeping things local so we can give this amazing city all our love and attention - and create the very best football experience.',
    },
    {
      id: 5,
      title: 'No Global App, but Local Quality',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  // State to manage accordion open/close, initially only item 4 is open based on design
  const [openItem, setOpenItem] = React.useState(4);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="inline-block bg-secondary-orange-25 text-primary-orange text-xs font-semibold px-3 py-1 rounded-full mb-4">ABOUT</span> {/* TODO(i18n): "ABOUT" */} 
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-primary-black mb-6">
          At Vaya, we're all about high-quality football and a strong sense of community. {/* TODO(i18n): Main heading */}
        </h1>
        <p className="text-lg text-primary-black max-w-xl mx-auto">
          Our mission is to make football accessible to everyone, regardless of background, experience, or budget. {/* TODO(i18n): Mission statement */}
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-16">
        {/* Left Image Section */}
        <div className="lg:w-1/2">
          <img src={aboutImage} alt="Vaya Team" className="rounded-lg shadow-lg w-full h-auto object-cover" /> {/* TODO(i18n): "Vaya Team" for alt text */} {/* Using Image.svg */}
        </div>

        {/* Right Content - Focus and Values */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-bold text-primary-black mb-6 text-left">Our Focus and values</h2> {/* TODO(i18n): "Our Focus and values" */} 
          <div>
            {values.map((item) => (
              <div key={item.id} className="border-b border-gray-200 py-4">
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-orange text-primary-white font-bold mr-4">{item.id}</span>
                    <span className="text-lg text-primary-black font-semibold">{item.title}</span> {/* TODO(i18n): item.title */}
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${openItem === item.id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openItem === item.id && (
                  <div className="mt-4 pl-12 text-primary-black">
                    <p className="text-left text-base leading-relaxed">{item.description}</p> {/* TODO(i18n): item.description */} 
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
