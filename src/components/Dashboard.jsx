export default function Dashboard({ setCategory }) {
  return (
    <div className="dashboard">
      <div className="welcome-section">
        <h1>🏢 Welcome to the Computer Inventory Management System (CIMS)</h1>
        <p>📌 Manage assets, maintenance, and users efficiently.</p>
      </div>
      
      <div className="quick-actions">
        <h2>🚀 Quick Actions</h2>
        <div className="action-buttons">
          <button className="btn-assets" onClick={() => setCategory('Assets')}>
            📦 Manage Assets
          </button>
          <button className="btn-maintenance" onClick={() => setCategory('Maintenance')}>
            🛠️ Manage Maintenance
          </button>
          <button className="btn-users" onClick={() => setCategory('Users')}>
            👤 Manage Users
          </button>
        </div>
      </div>

      <div className="info-panel">
        <h3>ℹ️ Information Panel</h3>
        <div className="info-section">
          <p><strong>📦 Assets:</strong> Click to add, update, or view all assets</p>
          <p><strong>🛠️ Maintenance:</strong> Track service history and records</p>
          <p><strong>👤 Users:</strong> Manage user accounts</p>
        </div>
      </div>
    </div>
  );
}