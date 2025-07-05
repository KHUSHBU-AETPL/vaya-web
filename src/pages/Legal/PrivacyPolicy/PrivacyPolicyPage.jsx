import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-primary-beige">
      <div className="max-w-3xl mx-auto">
        {/* Content Container */}
        <div className="flex flex-col items-center">
          {/* Header Section */}
          <h1 className="mb-6 text-center w-full">
            <span style={{ 
              fontSize: 'clamp(32px, 5vw, 40px)', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-orange)', 
              letterSpacing: '0px' 
            }}>Privacy Policy</span>
          </h1>
          
          <p className="text-left mb-4 w-full" style={{ 
              fontSize: 'clamp(16px, 4vw, 18px)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            This policy explains in detail how we collect, use, and share your data when you access our services and platforms.
          </p>
          
          
          <h2 className="text-left mt-6 mb-3 w-full" style={{ 
              fontSize: 'clamp(18px, 4vw, var(--font-size-large))', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>What Data We Collect</h2>
          
          <h3 className="text-left mb-2 w-full" style={{ 
              fontSize: '18px', 
              lineHeight: '24px', 
              fontWeight: 'var(--font-weight-semibold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>Data You Provide to Us:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-left w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            <li>First name, last name, email address, phone number, street address, city, and postal code.</li>
            <li>If you choose to sign up using your Google or Facebook account, we may also receive information from those platforms, such as your public profile, contact list, or activity.</li>
          </ul>

          <h3 className="text-left mb-2 w-full" style={{ 
              fontSize: '18px', 
              lineHeight: '24px', 
              fontWeight: 'var(--font-weight-semibold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>Data Collected Automatically:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-left w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            <li>Technical data about your browser and device (IP address, unique identifiers, browser type, operating system).</li>
            <li>Usage data, such as the time and date of access to our services.</li>
            <li>Location data, if you have enabled location access in the mobile app.</li>
          </ul>
          
          
          <h2 className="text-left mt-6 mb-3 w-full" style={{ 
              fontSize: 'clamp(18px, 4vw, var(--font-size-large))', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>Use of Cookies and Similar Technologies</h2>
          <p className="text-left mb-4 w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            We use cookies, web beacons, and similar technologies for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-left w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            <li>To remember your preferences and keep your session active.</li>
            <li>To help improve your browsing experience.</li>
            <li>To analyze how you interact with the site.</li>
            <li>To comply with your choices regarding cookie acceptance.</li>
          </ul>

          
          <h2 className="text-left mt-6 mb-3 w-full" style={{ 
              fontSize: 'clamp(18px, 4vw, var(--font-size-large))', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>How We Use Your Data</h2>
          <p className="text-left mb-4 w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>Your personal information may be used to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-left w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            <li>Operate and maintain our services.</li>
            <li>Create and manage your account.</li>
            <li>Send communications such as technical notices, updates, and promotional messages (only if you've given your consent).</li>
            <li>Analyze trends and improve the quality and security of our platform.</li>
            <li>Protect our company and users from fraudulent activity.</li>
            <li>Comply with our legal obligations or respond to legal claims.</li>
          </ul>

          
          <h2 className="text-left mt-6 mb-3 w-full" style={{ 
              fontSize: 'clamp(18px, 4vw, var(--font-size-large))', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>Who We Share Your Information With</h2>
          <p className="text-left mb-4 w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>Your data may be shared with:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-left w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            <li>Companies that provide us with services such as data analysis, customer support, or marketing.</li>
            <li>Affiliates and companies within our corporate group.</li>
            <li>Partners with whom we run joint promotions.</li>
            <li>Other users, in case you post content in public areas.</li>
            <li>Third parties in the event of a sale, merger, or company restructuring.</li>
            <li>Government or regulatory authorities if required by law or to protect legitimate rights and interests.</li>
          </ul>

          
          <h2 className="text-left mt-6 mb-3 w-full" style={{ 
              fontSize: 'clamp(18px, 4vw, var(--font-size-large))', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>Data Retention</h2>
          <p className="text-left mb-4 w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
          </p>

          
          <h2 className="text-left mt-6 mb-3 w-full" style={{ 
              fontSize: 'clamp(18px, 4vw, var(--font-size-large))', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>Security</h2>
          <p className="text-left mb-4 w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            We implement technical and organizational security measures to protect your information. However, we cannot guarantee absolute security against unauthorized access or security incidents.
          </p>

          
          <h2 className="text-left mt-6 mb-3 w-full" style={{ 
              fontSize: 'clamp(18px, 4vw, var(--font-size-large))', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>User Rights</h2>
          <p className="text-left mb-4 w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-left w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            <li>Access the information we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your personal data.</li>
            <li>Object to our processing of your information.</li>
            <li>Request restriction of processing.</li>
            <li>Request portability of your data.</li>
            <li>Withdraw consent for processing where we rely on consent.</li>
          </ul>
          <p className="text-left mb-4 w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            To exercise your rights, please contact us via email. We usually respond within one month.
          </p>

          
          <h2 className="text-left mt-6 mb-3 w-full" style={{ 
              fontSize: 'clamp(18px, 4vw, var(--font-size-large))', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>Children's Privacy</h2>
          <p className="text-left mb-4 w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            Our services are not intended for children under the age of 18. If we become aware that data has been collected from a minor without parental or legal guardian consent, we will delete it.
          </p>

          
          <h2 className="text-left mt-6 mb-3 w-full" style={{ 
              fontSize: 'clamp(18px, 4vw, var(--font-size-large))', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>Links to Other Websites</h2>
          <p className="text-left mb-4 w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            Our website may contain links to third-party websites. We are not responsible for their privacy practices, so we encourage you to review their individual policies.
          </p>

          
          <h2 className="text-left mt-6 mb-3 w-full" style={{ 
              fontSize: 'clamp(18px, 4vw, var(--font-size-large))', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>Changes to This Policy</h2>
          <p className="text-left mb-4 w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            We may update this policy at any time to reflect legal or service changes. If we do, we will notify you via email or through notices on our platform.
          </p>
          
          {/* Contact Info */}
          <div className="mt-6 p-4 bg-white rounded-md shadow-sm w-full">
            <p className="text-left" style={{ 
                fontSize: 'var(--font-size-medium)', 
                lineHeight: 'var(--line-height-medium)', 
                fontWeight: 'var(--font-weight-medium)', 
                color: 'var(--color-primary-black)', 
                letterSpacing: '0px' 
              }}>
              If you have any questions or require assistance regarding our Privacy Policy, please do not hesitate to contact us at{' '}
              <a href="mailto:support@vaya-sports.com" className="text-primary-orange hover:underline">support@vaya-sports.com</a>.
              <br />We respond to all inquiries within 48 hours on weekdays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
