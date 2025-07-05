import React from 'react';
import { Link } from 'react-router-dom';
import supportImage from '../assets/images/Vaya_Notifications 1.svg';

const SupportSection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[100px]">
        <div className="p-6 sm:p-8 lg:p-12 bg-white" style={{ maxWidth: '100%', height: 'auto', minHeight: 'auto', sm: 'minHeight: 400px', lg: 'minHeight: 471px' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-16 xl:gap-24" style={{ maxWidth: '100%' }}>
            {/* Left Content */}
            <div className="text-center lg:text-left lg:max-w-[568px] w-full">
              <span className="inline-block bg-secondary-orange-25 text-primary-orange text-xs font-semibold px-3 py-1 rounded-full mb-3 sm:mb-4">
                SUPPORT {/* TODO(i18n): "SUPPORT" */}
              </span>
              <h2 className="mb-3 sm:mb-4">
                <span style={{ 
                  fontSize: 'clamp(36px, 8vw, 64px)', 
                  lineHeight: 'clamp(46px, 9vw, 74px)', 
                  fontWeight: '700', 
                  color: 'var(--color-primary-black)', 
                  letterSpacing: '0px',
                  display: 'block'
                }}>We're here to help</span> {/* TODO(i18n): "We're here to help" */}
              </h2>
              <p className="mb-6 sm:mb-8" style={{ 
                fontSize: 'clamp(14px, 4vw, 16px)', 
                lineHeight: 'var(--line-height-medium)', 
                fontWeight: 'var(--font-weight-semibold)', 
                color: 'var(--color-primary-black)', 
                letterSpacing: '0px' 
              }}>
                Can't find the answer your looking for? Please contact our team. {/* TODO(i18n): "Can't find the answer your looking for? Please contact our team." */}
              </p>
              <Link to="/contact-old" className="inline-flex items-center justify-center" style={{ 
                backgroundColor: 'var(--color-primary-orange)', 
                color: '#FFFFFF', 
                fontWeight: 'var(--font-weight-semibold)', 
                borderRadius: '8px', 
                padding: '4px 21px', 
                height: '48px', 
                gap: '4px', 
                transition: 'all 0.3s ease' 
              }}>
                Contact Us {/* TODO(i18n): "Contact Us" */}
              </Link>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-[85%] sm:w-[75%] md:w-[60%] lg:w-full lg:max-w-[568px]">
                <div className="absolute inset-0 bg-primary-orange rounded-full transform scale-90 translate-x-4 translate-y-0"></div>
                <img src={supportImage} alt="Support Megaphone" className="relative z-10 w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
