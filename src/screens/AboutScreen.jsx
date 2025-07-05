import React from 'react';
import aboutImage from '../assets/images/Image.svg'; // Using Image.svg for the About section image

const AboutScreen = () => {
  const values = [
    {
      id: 1,
      title: 'Inclusive and Affordable',
      description: 'At Vaya, we believe football should be for everyone. That\'s why creating a welcoming and inclusive environment is at the core of everything we do. Our matches are open to all skill levels and backgrounds, with affordable fees to keep the game accessible.',
    },
    {
      id: 2,
      title: 'Great Venues and Devoted Organisers',
      description: 'We work with top-quality pitches and passionate organizers to deliver a fun, fair, and safe football experience that\'s engaging for all players.',
    },
    {
      id: 3,
      title: 'Development of Women\'s and Mixed Football',
      description: 'We are dedicated to providing tailored, well-organised women\'s and mixed-gender games designed to offer the best experience. Our goal is to introduce different skill levels to make the games more engaging for everyone involved.',
    },
    {
      id: 4,
      title: 'Social Aspects and Good Vibes',
      description: 'Football is more than just a game — it\'s about sharing good times. Our events are designed to bring people together, build friendships, and foster good vibes on and off the pitch. This spirit of connection is at the heart of what Vaya is all about.',
    },
    {
      id: 5,
      title: 'No Global App, but Local Quality',
      description: 'We\'re all in on Barcelona! Instead of jumping into other cities, we\'re keeping things local so we can give this amazing city all our love and attention - and create the very best football experience.',
    },
    {
      id: 6,
      title: 'Rewarding Loyalty',
      description: 'Regular players are valued and appreciated through Vaya Points — a simple way to reward participation. The more games played, the more points earned, which can be used to join future matches. It\'s our way of saying thank you for being part of our community.',
    },
  ];

  // State to manage accordion open/close, initially no items are open
  const [openItem, setOpenItem] = React.useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full py-10 xs:py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[100px]">
        <div className="text-center mb-6 xs:mb-8 sm:mb-12">
          <span className="inline-block bg-secondary-orange-25 text-primary-orange text-xs font-semibold px-3 py-1 rounded-full mb-3 sm:mb-4">ABOUT</span> {/* TODO(i18n): "ABOUT" */} 
          <h1 className="mb-3 xs:mb-4 sm:mb-6 px-2 text-center" style={{ 
            fontSize: 'clamp(28px, 6vw, 40px)', 
            lineHeight: '110%', 
            fontWeight: 'var(--font-weight-bold)', 
            color: 'var(--color-primary-black)', 
            letterSpacing: '0px' 
          }}>
            At Vaya, we're all about high-quality football and a strong sense of community. {/* TODO(i18n): Main heading */}
          </h1>
          <p className="max-w-xl mx-auto px-2 text-center" style={{ 
            fontSize: 'clamp(14px, 4vw, 16px)', 
            lineHeight: 'var(--line-height-medium)', 
            fontWeight: 'var(--font-weight-medium)', 
            color: 'var(--color-primary-black)', 
            letterSpacing: '0px', 
            textAlign: 'center',
            '@media (min-width: 640px)': {
              textAlign: 'justify'
            }
          }}>
            Our mission is to make football accessible to everyone, regardless of background, experience, or budget. {/* TODO(i18n): Mission statement */}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 xs:gap-8 sm:gap-12 lg:gap-16 xl:gap-24 mt-8 xs:mt-10 sm:mt-16">
          {/* Left Image Section */}
          <div className="lg:w-1/2 w-full px-2 sm:px-4">
            <img src={aboutImage} alt="Vaya Team" className="rounded-lg shadow-lg w-full h-auto object-cover" /> {/* TODO(i18n): "Vaya Team" for alt text */} {/* Using Image.svg */}
          </div>

          {/* Right Content - Focus and Values */}
          <div className="lg:w-1/2 w-full px-2 sm:px-4 mt-6 xs:mt-8 lg:mt-0">
            <h2 className="mb-4 sm:mb-6 text-center lg:text-left" style={{ 
              fontSize: 'clamp(20px, 5vw, var(--font-size-large))', 
              lineHeight: '110%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-black)' 
            }}> Our Focus and Values</h2> {/* TODO(i18n): "Our Focus and values" */} 
            <div>
              {values.map((item) => (
                <div key={item.id} className="border-b border-gray-200 py-2 xs:py-3 sm:py-4">
                  <button
                    className="flex justify-between items-center w-full text-left focus:outline-none"
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 rounded-full bg-primary-orange text-primary-white font-bold mr-2 xs:mr-3 sm:mr-4 text-xs xs:text-sm sm:text-base">{item.id}</span>
                      <span style={{ 
                        fontSize: 'clamp(14px, 4vw, 18px)', 
                        lineHeight: '24px', 
                        fontWeight: '600', 
                        color: 'var(--color-primary-black)', 
                        letterSpacing: '0px' 
                      }}>{item.title}</span> {/* TODO(i18n): item.title */}
                    </div>
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transform transition-transform ${openItem === item.id ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {openItem === item.id && (
                    <div className="mt-2 xs:mt-3 sm:mt-4 pl-7 xs:pl-9 sm:pl-12 text-primary-black">
                      <p style={{ 
                        fontSize: 'clamp(13px, 3.5vw, var(--font-size-medium))', 
                        lineHeight: 'var(--line-height-medium)', 
                        fontWeight: 'var(--font-weight-medium)', 
                        color: 'var(--color-primary-black)', 
                        textAlign: 'left',
                        '@media (min-width: 640px)': {
                          textAlign: 'justify'
                        }
                      }}>{item.description}</p> {/* TODO(i18n): item.description */} 
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
