import React from 'react';

const BookingPolicyScreen = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-primary-beige">
      <div className="max-w-3xl mx-auto">
        {/* Content Container */}
        <div className="flex flex-col items-center">
          {/* Header Section */}
          <h1 className="mb-6 text-center">
            <span style={{ 
              fontSize: 'clamp(32px, 5vw, 40px)', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-orange)', 
              letterSpacing: '0px' 
            }}>Booking Policy</span>
          </h1>
          
          <p className="text-center mb-4" style={{ 
              fontSize: 'clamp(16px, 4vw, 18px)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
            To ensure a smooth booking experience, please follow these steps when booking games through the Vaya app:
          </p>
          
          <ol className="list-decimal pl-6 mb-6 space-y-4 text-left w-full" style={{ 
              fontSize: 'var(--font-size-medium)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)' 
            }}>
            <li>
              <strong>Browse Available Games:</strong> Open the Vaya app and navigate to the "Games" tab to see all upcoming games in your area.
            </li>
            <li>
              <strong>Select a Game:</strong> Choose a game that fits your schedule and preferences. You can filter games by date, location, and skill level.
            </li>
            <li>
              <strong>Book Your Spot:</strong> Tap on "Book Now" to reserve your spot in the game. Review the game details, including date, time, location, and price.
            </li>
            <li>
              <strong>Complete Payment:</strong> Follow the payment instructions to secure your booking. Payment options include credit/debit cards and in-app credits.
            </li>
            <li>
              <strong>Confirmation:</strong> Once payment is complete, you will receive a booking confirmation in the app and via email.
            </li>
            <li>
              <strong>View Your Bookings:</strong> Access your upcoming games in the "My Games" section of the app.
            </li>
          </ol>
          
          {/* Important Note */}
          <div className="mt-6 p-4 bg-white rounded-md shadow-sm w-full">
            <p className="mb-2 text-center" style={{ 
                fontSize: '18px', 
                lineHeight: '24px', 
                fontWeight: 'var(--font-weight-semibold)', 
                color: 'var(--color-primary-black)', 
                letterSpacing: '0px' 
              }}>
              Important Note:
            </p>
            <p className="text-center" style={{ 
                fontSize: 'var(--font-size-medium)', 
                lineHeight: 'var(--line-height-medium)', 
                fontWeight: 'var(--font-weight-medium)', 
                color: 'var(--color-primary-black)', 
                letterSpacing: '0px' 
              }}>
              Please refer to our{' '}
              <a href="/refund-policy" className="text-primary-orange hover:underline">Refund & Cancellation Policy</a>{' '}
              for information about cancellations, refunds, and no-shows.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="mt-6 text-center w-full">
            <a 
              href="/" 
              className="inline-block bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-warning-dark transition-colors duration-300"
            >
              <span style={{ 
                  fontSize: 'var(--font-size-medium)', 
                  lineHeight: 'var(--line-height-medium)', 
                  fontWeight: 'var(--font-weight-semibold)' 
                }}>Back to Home</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPolicyScreen;
