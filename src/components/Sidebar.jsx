

export default function Sidebar({ onSelectCategory }) {
  const categories = ['Assets', 'Maintenance', 'Users'];
  
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">CIMS Navigation</h2>
      <nav>
        {categories.map((category) => (
          <div
            key={category}
            className="nav-item"
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </div>
        ))}
      </nav>
    </div>
  );
}