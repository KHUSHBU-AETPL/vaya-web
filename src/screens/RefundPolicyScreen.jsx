import React from 'react';

const RefundPolicyScreen = () => {
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
            }}>Refund and Cancellation Policy</span>
          </h1>
          
          <p className="text-center mb-4 w-full" style={{ 
              fontSize: 'clamp(16px, 4vw, 18px)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            At Vaya, we are committed to providing the best possible experience for all players. To ensure fairness and facilitate smooth organization of games, we have established the following refund and cancellation policy:
          </p>
          
          <h2 className="text-center mt-6 mb-3 w-full" style={{ 
              fontSize: 'clamp(18px, 4vw, var(--font-size-large))', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>Cancellation Window</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-left w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            <li>You may cancel your participation in a game up to 12 hours before kick-off and receive a full refund in the form of in-game credits.</li>
            <li>Cancellations made less than 12 hours before kick-off are not eligible for a refund.</li>
            <li>All cancellations must be done through Vaya app.</li>
            <li>Refunds are issued instantly at the moment you cancel and they will be awarded to you as game credits in the app.</li>
            <li>Refunded game credits will be available in your Profile, accessible via the bottom navigation bar of the app.</li>
            <li>Please note that refunds are provided exclusively in game credits, which can be used to book future games on Vaya platform. Monetary refunds will not be issued.</li>
          </ul>
          
          <h2 className="text-center mt-6 mb-3 w-full" style={{ 
              fontSize: 'clamp(18px, 4vw, var(--font-size-large))', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>No-Shows</h2>
          <p className="text-center mb-4 w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            We strongly encourage players to cancel their spot, even if it's too late for a refund, as this helps us keep the game information accurate and assists us in completing the game successfully.
          </p>
          
          <h2 className="text-center mt-6 mb-3 w-full" style={{ 
              fontSize: 'clamp(18px, 4vw, var(--font-size-large))', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>Game Cancellation Policy</h2>
          <p className="text-center mb-4 w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            If Vaya cancels a game for any reason, such as adverse weather conditions, field-related issues, or insufficient number of players:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-left w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            <li>All registered participants will receive a full refund in game credits.</li>
            <li>Refunds will be processed instantly once the game is officially cancelled within the app.</li>
            <li>You will receive a push notification informing you of the cancellation.</li>
            <li>Full cancellation details can be reviewed under Game Messages, which are found on the Game information page within the app.</li>
            <li>No further action is required on your part, as credits are automatically added to your account and can be applied toward any future Vaya games.</li>
            <li>You can view your updated game credits in your Profile via the bottom navigation bar.</li>
          </ul>
          
          {/* Contact Info */}
          <div className="mt-6 p-4 bg-white rounded-md shadow-sm w-full">
            <p className="text-center" style={{ 
                fontSize: 'var(--font-size-medium)', 
                lineHeight: 'var(--line-height-medium)', 
                fontWeight: 'var(--font-weight-medium)', 
                color: 'var(--color-primary-black)', 
                letterSpacing: '0px' 
              }}>
              If you have any questions or require assistance regarding bookings, cancellations, or refunds, please do not hesitate to contact us at{' '}
              <a href="mailto:support@vaya-sports.com" className="text-primary-orange hover:underline">support@vaya-sports.com</a>.
              <br />We respond to all inquiries within 48 hours on weekdays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyScreen;
