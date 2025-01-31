import { useState } from 'react';

export default function AssetsManagement() {
  const [selectedAction, setSelectedAction] = useState(null);
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);

  const assetActions = [
    { action: 'Add Asset', params: 'kind, type, status, assignmentDate, username' },
    { action: 'Update Asset', params: 'id, kind, type, status, assignmentDate, username' },
    { action: 'Get Asset by ID', params: 'id' },
    { action: 'Delete Asset', params: 'id' },
    { action: 'Get All Assets', params: 'No parameters required' },
    { action: 'Get Assets by Kind', params: 'kind' },
    { action: 'Get Assets by Type', params: 'type' },
    { action: 'Get Assets by Type & Kind', params: 'type, kind' },
    { action: 'Get All Asset Associations', params: 'No parameters required' },
    { action: 'Get Asset History', params: 'id' },
    { action: 'Get User’s Assets', params: 'username' },
    { action: 'Count Assets by Type & Kind', params: 'type, kind' }
  ];

  const handleActionClick = (action) => {
    setSelectedAction(action);
    setFormData({});
    setResult(null);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful submission
    setResult({
      message: `${selectedAction.action} executed successfully!`,
      data: formData
    });
  };

  return (
    <div className="management-section">
      <h2>📦 Assets Management</h2>
      {!selectedAction ? (
        <div className="actions-grid">
          {assetActions.map((action, index) => (
            <button 
              key={index}
              onClick={() => handleActionClick(action)}
              className="action-button"
            >
              {action.action}
            </button>
          ))}
        </div>
      ) : (
        <div className="action-form">
          <button onClick={() => setSelectedAction(null)} className="back-button">
            ← Back to Actions
          </button>
          <h3>{selectedAction.action}</h3>
          <form onSubmit={handleSubmit}>
            {selectedAction.params.split(', ').map(param => (
              param.toLowerCase() === 'no parameters required' ? (
                <p key="no-params" className="no-params-message">No parameters needed for this action</p>
              ) : (
                <div key={param} className="form-field">
                  <label>{param}:</label>
                  <input
                    type="text"
                    name={param}
                    placeholder={`Enter ${param}`}
                    value={formData[param] || ''}
                    onChange={handleInputChange}
                  />
                </div>
              )
            ))}
            <button type="submit" className="submit-button">Execute Action</button>
          </form>
         {result && (
  <div className="result">
    <h4>📝 Result:</h4>
    <p>{result.message}</p>
    {Object.keys(result.data).length > 0 && (
      <div className="result-data">
        {Object.entries(result.data).map(([key, value]) => (
          <div key={key} className="data-row">
            <span className="data-label">{key}:</span>
            <span className="data-value">{value}</span>
          </div>
        ))}
      </div>
    )}
  </div>
)}
        </div>
      )}
    </div>
  );
}