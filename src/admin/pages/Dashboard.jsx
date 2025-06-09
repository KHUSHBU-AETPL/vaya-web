import { useState } from 'react';

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenFlutterDashboard = () => {
    const flutterDashboardUrl = "http://localhost:57645/";
    setIsLoading(true);
    setTimeout(() => {
      window.open(flutterDashboardUrl, "_blank");
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="shadow rounded-lg" style={{ backgroundColor: 'var(--color-primary-white)' }}>
      <div className="px-6 py-6 border-b" style={{ borderColor: 'var(--color-gray-25)' }}>
        <h2 className="text-2xl font-semibold" style={{ color: 'var(--color-primary-black)' }}>Admin Control Panel</h2>
        <p className="mt-1 text-sm" style={{ color: 'var(--color-gray-100)' }}>Welcome to the Vaya Web administration dashboard</p>
      </div>

      <div className="p-6 space-y-10">
        {/* Flutter Dashboard Card */}
        <div className="p-6 border rounded-lg" style={{ 
          backgroundColor: 'var(--color-success-light)', 
          borderColor: 'var(--color-gray-25)' 
        }}>
          <h3 className="text-lg font-semibold" style={{ color: 'var(--color-success-dark)' }}>Flutter Admin Dashboard</h3>
          <p className="mt-2 text-sm" style={{ color: 'var(--color-primary-black)' }}>
            Access the complete Flutter admin dashboard to manage games, pitches, players, and more.
          </p>
          <div className="mt-4">
            <button
              onClick={handleOpenFlutterDashboard}
              disabled={isLoading}
              className="px-5 py-2 rounded-lg text-sm font-medium transition"
              style={{
                backgroundColor: isLoading ? 'var(--color-gray-50)' : 'var(--color-primary-orange)',
                color: 'var(--color-primary-white)',
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
            >
              {isLoading ? 'Loading...' : 'Open Flutter Admin Dashboard'}
            </button>
          </div>
        </div>

        {/* Admin Features */}
        <div className="p-6 border rounded-lg" style={{ 
          backgroundColor: 'var(--color-warning-light)', 
          borderColor: 'var(--color-gray-25)' 
        }}>
          <h3 className="text-lg font-semibold" style={{ color: 'var(--color-warning-dark)' }}>Admin Features</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Game Management', desc: 'Add, edit, and manage games' },
              { title: 'Pitch Management', desc: 'Manage available pitches' },
              { title: 'Player Management', desc: 'View and manage player accounts' },
              { title: 'Notifications', desc: 'Send notifications to users' },
            ].map((feature, idx) => (
              <div key={idx} className="p-4 rounded-md border" style={{ 
                backgroundColor: 'var(--color-primary-white)', 
                borderColor: 'var(--color-gray-25)' 
              }}>
                <h4 className="font-medium" style={{ color: 'var(--color-primary-black)' }}>{feature.title}</h4>
                <p className="mt-1 text-sm" style={{ color: 'var(--color-gray-100)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
