import { Outlet, Link } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-primary-beige)' }}>
      <header style={{ backgroundColor: 'var(--color-navbar-bg)' }} className="shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold" style={{ color: 'var(--color-primary-black)' }}>Admin Dashboard</h1>
            <p className="text-sm mt-1" style={{ color: 'var(--color-gray-100)' }}>Manage your application</p>
          </div>
          <Link to="/" className="px-4 py-2 rounded-lg" style={{ backgroundColor: 'var(--color-secondary-orange-50)', color: 'var(--color-primary-white)' }}>
            Back to Home 
          </Link>
        </div>
        <div className="border-t border-gray-200" style={{ borderColor: 'var(--color-gray-25)' }}></div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;
