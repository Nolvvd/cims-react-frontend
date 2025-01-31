import Dashboard from './Dashboard';
import AssetsManagement from './AssetsManagement';
import MaintenanceManagement from './MaintenanceManagement';
import UserManagement from './UserManagement';

export default function MainContent({ category, setCategory }) {
  const renderContent = () => {
    switch(category) {
      case 'Assets': return <AssetsManagement />;
      case 'Maintenance': return <MaintenanceManagement />;
      case 'Users': return <UserManagement />;
      default: return <Dashboard setCategory={setCategory} />;
    }
  };

  return <div className="main-content">{renderContent()}</div>;
}